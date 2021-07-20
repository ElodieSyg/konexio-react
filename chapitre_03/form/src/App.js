import React from 'react';
// Bootstrap //
import 'bootstrap/dist/css/bootstrap.min.css'
// CSS Import //
import './App.css'

class App extends React.Component {

  renderInput(handleOnChange){
    let patt = new RegExp (/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    let userEmail = handleOnChange

    if (patt.test(userEmail) === true) {
      return (
        <input
        type="email"
        className="form-control border border-sucess"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email..."/>
      )
    } else {
      return (
        <input
        type="email"
        className="form-control border border-danger"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email..."/>
      )
    }
  }

  handleOnChange = (e) => {
    console.log(e.target.value)
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
                    <label onChange={this.hangleOnChange} for="inputEmail" className="form-label">Email address</label>
                    {this.renderInput()}
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