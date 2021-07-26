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
      items: [],
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

  handleAddItem = (productName, price) => {
		this.setState((prevState) => {
			return {
				...prevState,
				items: [
					...prevState.items,
					{ productName: productName, price: price },
				],
			};
		});
	};

  isSelect() {
    if (this.state.activeTab === "list") {
      return (
      < List items={this.state.items}/>
    )
    } if (this.state.activeTab === "pay") {
      return (
      < Pay items={this.state.items}/>
      )
    } else if (this.state.activeTab === "add") {
      return (
      < Add addItem={this.handleAddItem}/>
      )
    }
  }



  render() {
    return(
      <div className="container">
        <h1 className="text-center">Bakery</h1>
          <div className="d-flex flex-sm-column bd-highlight mb-3">
            <div className="d-flex button-container">
              <Button onClick={this.selectAdd} className="p-2 bd-highlight margin">Add</Button>
              <Button onClick={this.selectList} className="p-2 bd-highlight margin">List</Button>
              <Button onClick={this.selectPay} className="p-2 bd-highlight margin  ">Pay</Button>
            </div>
            {this.isSelect()}
          </div>

      </div>
    )
  }
}

export default App