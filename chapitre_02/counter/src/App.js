import React from 'react';
import './App.css';
// Import components //
import Counter from './components/Counter';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      countOne: 5,
      countTwo: 7,
    }
  }

  // state = toujours le state précédent et màj //
  handleClickMore = () => {
    if (this.state.countOne >= 100) {
      return;
    }

    if (this.state.countOne === this.state.countTwo - 1) {
      this.setState(state => ({
        countTwo: state.countTwo + 1
      })) 
    }

    this.setState(state => ({
      countOne: state.countOne + 1
    }))
  }

  handleClickLess = () => {
    if (this.state.countOne === 0) {
      return;
    }

    this.setState(state => ({
      countOne: state.countOne - 1
    }))
  }

  secondHandleClickMore = () => {
    if (this.state.countTne >= 100) {
      return;
    }

    this.setState(state => ({
      countTwo: state.countTwo + 1
    }))
  }

  secondHandleClickLess = () => {
    if (this.state.countTwo === 0) {
      return;
    }

    if (this.state.countTwo === this.state.countOne + 1) {
      this.setState(state => ({
        countOne: state.countOne - 1
      })) 
    }

    this.setState(state => ({
      countTwo: state.countTwo - 1
    }))
  }

  render () {
    return (
      <div>
        <h1>COUNTER</h1>
        <div className="flex-box container">
          <h2 className="margin-auto">Counter 1 :</h2>
          <Counter count={this.state.countOne} clickLess={this.handleClickLess} clickMore={this.handleClickMore}/>
        </div>

        <div className="flex-box container">
        <h2 className="margin-auto">Counter 2 :</h2>
        <Counter count={this.state.countTwo} clickLess={this.secondHandleClickLess} clickMore={this.secondHandleClickMore}/>
        </div>
      </div>
    )
  }
}

export default App;
