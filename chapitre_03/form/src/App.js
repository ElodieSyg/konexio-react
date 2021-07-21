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
      isSubmit: false,
    }
  }

  renderInputEmail(){
    let patt = new RegExp (/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    if (patt.test(this.state.email)) {
      return (
        <input
        onChange={this.handleOnChangeEmail}
        type="email"
        className="form-control border border-success is-valid"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email..."/>
      )
    } else {
      return (
        <input
        onChange={this.handleOnChangeEmail}
        type="email"
        className="form-control border border-danger is-invalid"
        id="inputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email..."/>
      )
    }
  }

  renderInputPassword(){
    let patt = new RegExp (/[0-9a-zA-Z]{6,}/)

    if (patt.test(this.state.password)) {
      return (
        <input 
          onChange={this.handleOnChangePassword}
          type="password" 
          className="form-control border border-success is-valid" 
          id="inputPassword" 
          placeholder="Enter password..."/>      
      )} else {
        return (
          <input 
            onChange={this.handleOnChangePassword}
            type="password" 
            className="form-control border border-danger is-invalid" 
            id="inputPassword" 
            placeholder="Enter password..."/>      
        )}  
    }

    renderModal() {
      if (this.state.isSubmit === true) {
        return (
          <div className="d-flex p-2 bd-highlight justify-content-center">
            <div className="bck-color">
              Form submitted !
            </div>
          </div>
          )};

        return null
    };

  handleOnChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleClick = () => {
    this.setState({
      isSubmit: true,
    })
    console.log("you clicked")
  }

  render() {
    return(
      <div>        
        <h1 className="title">Login</h1>
        <form 
          className="container" 
          onSubmit={this.handleSubmit}
          style={(this.state.isSubmit)
            ? { display: "none" }
            : { display: "block" }
      }>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    {this.renderInputEmail()}
                </div>

                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    {this.renderInputPassword()}
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" for="rememberMe">Remember me</label>
                </div>

                <button type="submit" class="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </form>
            {this.renderModal()}
      </div>
    )
  }
}

export default App