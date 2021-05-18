import './App.css';
import React from 'react';
import CoronaImage from './CoronaImage.png'
import { fetchDataChangeable } from './api'
import Cards from './Cards';
import MapD from './MapD';
import ChartContinent from './ChartContinent';
import CountryPicker from './CountryPicker';
import BarChart from './BarChart';


class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  // async componentDidMount() {
  //   const fetchedData = await fetchData();
  //   this.setState({ data: fetchedData })
  //   console.log(this.state.data)
  // }

  async componentDidMount() {
    const fetchedCData = await fetchDataChangeable();
    this.setState({ data: fetchedCData })
    console.log(this.state.data)
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchDataChangeable(country);
    console.log("fetchedChange", fetchedData)
    this.setState({ data: fetchedData, country: country })
    console.log(country)
  }

  render() {
    return (
      <div className="App">
        <div className="imgContainer">
          <img className="imageCss" src={CoronaImage} alt='Corona' />
        </div>


        <Cards />
        <ChartContinent />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <BarChart data={this.state.data} country={this.state.country} />
        <h3 style={{ padding: "20px 0", textAlign: "center" }}>Map of Covid-19 Countries</h3>
        <MapD />

      </div>
    );
  }

}

export default App;
