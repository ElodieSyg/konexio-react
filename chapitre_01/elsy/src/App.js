import React from "react";
// CSS Import //
import './App.css';
import './styles/global.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Components Import //
import Box from './components/Box'

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
    };
  }

  onHeartChange = (e) => {
    this.setState({
      heart: e.target.value,
    })
    this.calculateWater()
  }

  onStepsChange = (e) => {
    this.setState({
      steps: e.target.value,
    })
    this.calculateWater()
  }

  onTempChange = (e) => {
    this.setState({
      temperature: e.target.value,
    })
    this.calculateWater()
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
    this.calculateWater();
  }

  calculateWater = () => { 
    if (this.state.temperature > 20) {
      this.setState({
        water: this.state.water * 0.02
    })}
    
    if (this.state.steps > 10000) {
      this.setState({
        water: this.state.steps * 0.0008
    })}  
    
    if (this.state.heart > 10000) {
      this.setState({
        water: this.state.steps * 0.00002
      })}
  }

  render() { 
    return (
      <div className="container-fluid">
        <div className="row">
          {/*Water box */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          {/*Steps box */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" onChange={this.onStepsChange} min={stepsMin} max={stepsMax} />
          {/*Heart box */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" onChange={this.onHeartChange} min={heartMin} max={heartMax} />
          {/*Temperature box */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" onChange={this.onTempChange} min={tempMin} max={tempMax} />
        </div>
      </div>
  )}

}

export default App;