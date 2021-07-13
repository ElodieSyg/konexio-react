import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from './components/Box'
import './styles/global.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heatMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-primary">Hello !</h1>
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box icon="directions_walk" color="black" value={3000} unit="steps" />
          <Box icon="favorite" color="red" value={120} unit="bpm" />
          <Box icon="wb_sunny" color="yellow" value={-10} unit="°C" />
        </div>
      </div>
    );
  }
}

export default App;
