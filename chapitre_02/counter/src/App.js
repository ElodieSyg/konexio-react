import React from 'react';
import './App.css';
// Import components //
import Counter from './components/Counter';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0,
    }
  }

  // state = toujours le state précédent et màj //
  handleClickMore = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  handleClickLess = () => {
    if (this.state.count === 0) {
      return;
    }

    this.setState(state => ({
      count: state.count - 1
    }))
  }

  render () {
    return (
      <div>
        <h1>COUNTER</h1>
        <Counter count={this.state.count} clickLess={this.handleClickLess} clickMore={this.handleClickMore}/>
      </div>
    )
  }
}

export default App;
