import React from 'react';
// Components //
import Button from './components/Button';
import Card from './components/Card'
// Bootstrap //
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then((res) => res.json())
    .then((data) => {
      const country = data[0];

      this.setState({
        name: country.name,
        capital: country.capital,
        flag: country.flag,
        population: country.population,
        region: country.region,
      })
    })
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((res) => res.json())
    .then((data) => {
      const country = data[0];

      this.setState({
        name: country.name,
        capital: country.capital,
        flag: country.flag,
        population: country.population,
        region: country.region,
      })
    })
  }

  render() {
    return (
        <div>
          <h1 className="text-center m-3">Country Selector</h1>

          <div className="d-flex justify-content-evenly">
            < Button children="France" onClick={() => this.getCountry("France")}>France</Button>
            < Button children="Brazil" onClick={() => this.getCountry("Brazil")}>Brazil</Button>
            < Button children="Croatia" onClick={() => this.getCountry("Croatia")}>Croatia</Button>
          </div>

            < Card info={this.state}/>
        </div>
    )
  }
}

export default App;