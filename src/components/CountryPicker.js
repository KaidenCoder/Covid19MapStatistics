import React, { useState, useEffect } from 'react'
import { fetchCountriesData } from './utils/api'

const CountryPicker = ({ handleCountryChange }) => {
    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        const fetchCountAPI = async () => {
            const data = await fetchCountriesData()
            setCountryData(data)
        }

        fetchCountAPI()
    }, [setCountryData])
    console.log(countryData)

    return (
        <div>
            <form>
                <div className="form-group">
                    <label style={{ padding: "20px 0 0 0", textAlign: "center" }}>Country select</label>
                    <select className="form-control countrySelect" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="global">India</option>
                        {countryData.map((country, i) =>
                            <option key={i} value={country.country}>{country.country}</option>
                        )}

                    </select>
                </div>


            </form>
        </div>
    )
}

export default CountryPicker