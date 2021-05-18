import React, { useState, useEffect } from 'react';
import { fetchContinentData } from './api'
import { Line } from 'react-chartjs-2'
import NumberFormat from 'react-number-format';

const ChartContinent = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchCAPI = async () => {
            const data = await fetchContinentData()
            setDailyData(data)
        }
        console.log(dailyData)
        fetchCAPI()
    }, [])

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ continent }) => continent),
                    datasets: [
                        {
                            data: dailyData.map(({ cases }) => cases),
                            label: 'Active',
                            borderColor: 'red',
                            fill: true
                        }, {
                            data: dailyData.map(({ recovered }) => recovered),
                            label: 'Recovered',
                            borderColor: 'orange',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'black',
                            fill: true
                        }]
                }}

            />) :
            "Loading"
    )

    return (
        <div className="linechart">
            <h3 style={{ padding: "20px 0", textAlign: "center" }}>Covid-19 Continent Stats</h3>

            <table class="table">
                <thead>
                    <tr>

                        <th scope="col" style={{ color: 'green' }}>Continent</th>
                        <th scope="col" style={{ color: 'red' }}>Confirmed</th>
                        <th scope="col" style={{ color: 'orange' }}>Recovered</th>
                        <th scope="col">Deaths</th>
                    </tr>
                </thead>
                {dailyData.map((d, i) => (
                    <tbody key={i}>
                        <tr>

                            <td style={{ color: 'green' }}>  {d.continent}  </td>
                            <td style={{ color: 'red' }}><NumberFormat value={d.cases} displayType={'text'} thousandSeparator={true} /> </td>
                            <td style={{ color: 'orange' }}><NumberFormat value={d.recovered} displayType={'text'} thousandSeparator={true} /> </td>
                            <td><NumberFormat value={d.deaths} displayType={'text'} thousandSeparator={true} /></td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <h3 style={{ padding: "20px 0", textAlign: "center" }}>Covid-19 Continent Line Graph</h3>
            {lineChart}
        </div>
    )
}

export default ChartContinent