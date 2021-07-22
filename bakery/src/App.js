import React from 'react';
// Components import //
import Button from './components/Button';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
// Bootstrap CSS //
import 'bootstrap/dist/css/bootstrap.min.css';
// CSS //
import './App.css'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      activeTab: "",
      items:[],
    }
  }


  selectAdd = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        activeTab: "add"
      }
    })
  }

  selectList = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        activeTab: "list"
      }
    })
  }

  selectPay = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        activeTab: "pay"
      }
    })
  }

  addItem = (name, price) => {
    this.setState(prevState => {
      return {
        ...prevState,
        items: this.props.state.name + this.props.state.price
      }
    })
  }

  isSelect() {
    if (this.state.activeTab === "list") {
      return (
      < List />
    )
    } if (this.state.activeTab === "pay") {
      return (
      < Pay />
      )
    } else if (this.state.activeTab === "add") {
      return (
      < Add addItem={this.addItem}/>
      )
    }
  }

  render() {
    return(
      <div className="container">
        <h1 className="text-center">Bakery</h1>
          <div className="d-flex flex-sm-column bd-highlight mb-3">
            <div className="d-flex button-container">
              <Button onClick={this.selectAdd} children="Add" className="p-2 bd-highlight margin" />
              <Button onClick={this.selectList} children="List" className="p-2 bd-highlight margin" />
              <Button onClick={this.selectPay} children="Pay" className="p-2 bd-highlight margin  " />
            </div>
            {this.isSelect()}
          </div>

      </div>
    )
  }
}

export default App