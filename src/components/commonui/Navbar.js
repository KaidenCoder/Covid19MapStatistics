import React from 'react'
import { Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <ul className="navlink">
                <li><Link to="/Covid19MapStatistics/">Global</Link></li>
                <li><Link to="/Covid19MapStatistics/continent/">Continent</Link></li>
                <li><Link to="/Covid19MapStatistics/country/">Country</Link></li>
                <li><Link to="/Covid19MapStatistics/map/">Map</Link></li>
                <li><Link to="/Covid19MapStatistics/covidnews/">News</Link></li>
            </ul>

        </header>
    )
}

export default Navbar
