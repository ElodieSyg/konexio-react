import React from 'react';
// Importation CSS //
import './App.css';
import './css/counter.css'
import './css/userinfo.css';
// Importation Components //
import UserInfo from "./components/UserInfo"
import Counter from "./components/Counter"
// Json Files //
import users from "./users.json"

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 10,
    }
  }

  handleClickMore = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }

  handleClickLess = () => {
    if (this.state.count === 1) {
      return;
    }

    this.setState(state => ({
      count: state.count - 1
    }))
  }

  render() {
    return(
    <div>
        <h1>COUNTER</h1>
        <Counter count={this.state.count} clickLess={this.handleClickLess} clickMore={this.handleClickMore}/>
        {users.slice(0, this.state.count).map((user) => (
					<UserInfo name={user.name} email={user.email} />
				))}
    </div>
  )}
}

export default App;
