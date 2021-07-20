import React from 'react';
// Bootstrap //
import 'bootstrap/dist/css/bootstrap.min.css'
// CSS Import //
import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    }
  }

  renderInputEmail(){
    let patt = new RegExp (/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    if (patt.test(this.state.email)) {
      return (
        <input
        onChange={this.handleOnChange}
        type="email"
        className="form-control border border-success"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email..."/>
      )
    } else {
      return (
        <input
        onChange={this.handleOnChange}
        type="email"
        className="form-control border border-danger"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email..."/>
      )
    }
  }

  renderInputPassword(){
    let patt = new RegExp ()
  }

  handleOnChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <h1 className="title">Login</h1>
        <form className="container" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    {this.renderInputEmail()}
                </div>

                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input 
                    type="password" 
                    className="form-control border" 
                    id="inputPassword" 
                    placeholder="Enter password..."/>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe"/>
                    <label className="form-check-label" for="rememberMe">Remember me</label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
    )
  }
}

export default App