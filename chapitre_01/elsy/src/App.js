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
		this.setState((prevState) => {
			return this.calculateWater({
				...prevState,
				heart: e.target.value,
			});
		});
	};

	onStepsChange = (e) => {
		this.setState((prevState) => {
			return this.calculateWater({
				...prevState,
				steps: e.target.value,
			});
		});
	};

	onTempChange = (e) => {
		this.setState((prevState) => {
			return this.calculateWater({
				...prevState,
				temperature: e.target.value,
			});
		});
	};

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
					<div className="row">
						<Box
							icon="local_drink"
							color="#3A85FF"
							value={this.state.water}
							unit="L"
						/>
						<Box
							icon="directions_walk"
							color="black"
							value={this.state.steps}
							unit="steps"
							min={stepsMin}
							max={stepsMax}
							onChange={this.onStepsChange}
						/>
						<Box
							icon="favorite"
							color="red"
							value={this.state.heart}
							unit="bpm"
							min={heartMin}
							max={heartMax}
							onChange={this.onHeartChange}
						/>
						<Box
							icon="wb_sunny"
							color="yellow"
							value={this.state.temperature}
							unit="°C"
							min={tempMin}
							max={tempMax}
							onChange={this.onTempChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;