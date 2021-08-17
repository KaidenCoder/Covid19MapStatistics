import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchCountriesData } from './utils/api'
import NumberFormat from 'react-number-format';

function MapD() {

    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        const fetchCountAPI = async () => {
            const data = await fetchCountriesData()
            setCountryData(data)
        }

        fetchCountAPI()
    }, [setCountryData])
    console.log("mapd", countryData)

    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={4} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {countryData.map((d, i) => (

                <Marker
                    key={i}
                    position={[d.latitude, d.longitude]} >
                    <Popup position={[d.latitude, d.longitude]}>
                        <div>
                            <p>Country: {d.country}</p>
                            <p>Confirmed: <NumberFormat value={d.confirmed} displayType={'text'} thousandSeparator={true} /></p>
                            <p>Recovered: <NumberFormat value={d.recovered} displayType={'text'} thousandSeparator={true} /></p>
                            <p>Deaths: <NumberFormat value={d.deaths} displayType={'text'} thousandSeparator={true} /></p>
                        </div>
                    </Popup>
                </Marker>

            ))}

        </MapContainer >

    )
}

export default MapD