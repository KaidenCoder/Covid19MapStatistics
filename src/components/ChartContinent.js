import React, { useState, useEffect } from 'react';
import { fetchContinentData } from './utils/api'
import { Line } from 'react-chartjs-2'
import NumberFormat from 'react-number-format';
import Newscovid from './news/Newscovid';

const ChartContinent = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchCAPI = async () => {
            const data = await fetchContinentData()
            setDailyData(data)
        }
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
                            label: 'Confirmed',
                            borderColor: 'red',
                            fill: true
                        }, {
                            data: dailyData.map(({ recovered }) => recovered),
                            label: 'Recovered',
                            borderColor: 'green',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'blue',
                            fill: true
                        }]
                }}
            />) :
            "Loading"
    )

    return (
        <div className="linechart">
            <h3 style={{ padding: "20px 0", textAlign: "center" }}>Continent Tabular Data</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ background: 'rgba(0,0,0,0.05)', color: 'black', border: "1px solid black" }}>Continent</th>
                        <th scope="col" style={{ background: 'rgba(255,0,0,0.05)', color: 'red', border: "1px solid black" }}>Confirmed</th>
                        <th scope="col" style={{ background: 'rgba(0,255,0,0.05)', color: 'green', border: "1px solid black" }}>Recovered</th>
                        <th scope="col" style={{ background: 'rgba(0,0,255,0.05)', color: 'blue', border: "1px solid black" }}>Deaths</th>
                    </tr>
                </thead>
                {dailyData.map((d, i) => (
                    <tbody key={i}>
                        <tr>
                            <td style={{ color: 'black', border: "1px solid black" }}>  {d.continent}  </td>
                            <td style={{ color: 'red', border: "1px solid black" }}><NumberFormat value={d.cases} displayType={'text'} thousandSeparator={true} /> </td>
                            <td style={{ color: 'green', border: "1px solid black" }}><NumberFormat value={d.recovered} displayType={'text'} thousandSeparator={true} /> </td>
                            <td style={{ color: 'blue', border: "1px solid black" }}><NumberFormat value={d.deaths} displayType={'text'} thousandSeparator={true} /></td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <h3 style={{ padding: "20px 0", textAlign: "center" }}>Line Graph data</h3>
            {lineChart}

        </div>
    )
}

export default ChartContinent