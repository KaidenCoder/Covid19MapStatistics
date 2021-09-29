import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import CoronaImage from './images/CoronaImage.png'
import { fetchDataChangeable } from './components/utils/api'
import Cards from './components/bodyui/global/Cards';
import MapD from './components/bodyui/map/MapD';
import ChartContinent from './components/bodyui/continent/ChartContinent';
import CountryPicker from './components/bodyui/country/CountryPicker';
import BarChart from './components/bodyui/country/BarChart';
import Navbar from './components/commonui/Navbar';
import { Switch, Route } from "react-router-dom"
import Footer from './components/commonui/Footer';
import Newscovid from './components/news/Newscovid';
import {useSelector, useDispatch} from 'react-redux'

const App = () => {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(async () => {
    const fetchedCData = await fetchDataChangeable();
    setData(fetchedCData)
  }, [])

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchDataChangeable(country);
    setData(fetchedData)
    setCountry(country)
  }

    return (
      <div className="App">
        <div data-testid="logo-image" className="imgContainer">
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
            <CountryPicker handleCountryChange={handleCountryChange} />
            <BarChart data={data} country={country} />
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

export default App;
