import './App.css';
import React from 'react';
import CoronaImage from './images/CoronaImage.png'
import { fetchDataChangeable } from './components/utils/api'
import Cards from './components/Cards';
import MapD from './components/MapD';
import ChartContinent from './components/ChartContinent';
import CountryPicker from './components/CountryPicker';
import BarChart from './components/BarChart';
import Navbar from './components/Navbar';
import { Switch, Route } from "react-router-dom"
import Footer from './components/Footer';
import Newscovid from './components/news/Newscovid';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedCData = await fetchDataChangeable();
    this.setState({ data: fetchedCData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchDataChangeable(country);
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    return (
      <div className="App">
        <div className="imgContainer">
          <img className="imageCss" src={CoronaImage} alt='Corona' />
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/Covid19MapStatistics">
            <Cards />

          </Route>
          <Route path="/Covid19MapStatistics/continent/">
            <ChartContinent />
          </Route>
          <Route path="/Covid19MapStatistics/country/">
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <BarChart data={this.state.data} country={this.state.country} />
          </Route>
          <Route path="/Covid19MapStatistics/map/">
            <h3 style={{ padding: "20px 0", textAlign: "center" }}>Map of Covid-19 Countries</h3>
            <MapD />
          </Route>
          <Route path="/Covid19MapStatistics/covidnews/">
            <Newscovid />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
