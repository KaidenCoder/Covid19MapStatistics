import React, { useState, useEffect } from 'react';
import { fetchDataChangeable } from './api'
import { Bar } from 'react-chartjs-2'

const BarChart = (props) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchCAPI = async () => {
            const data = await fetchDataChangeable()
            setDailyData(data)
        }

        fetchCAPI()
    }, [])

    console.log(props.data.confirmed)

    // const lineChart = (
    //     dailyData.length ? (
    //         <Line
    //             data={{
    //                 labels: dailyData.map(({ continent }) => continent),
    //                 datasets: [
    //                     {
    //                         data: dailyData.map(({ cases }) => cases),
    //                         label: 'Active',
    //                         borderColor: 'red',
    //                         fill: true
    //                     }, {
    //                         data: dailyData.map(({ recovered }) => recovered),
    //                         label: 'Recovered',
    //                         borderColor: 'green',
    //                         fill: true
    //                     }, {
    //                         data: dailyData.map(({ deaths }) => deaths),
    //                         label: 'Deaths',
    //                         borderColor: 'black',
    //                         fill: true
    //                     }]
    //             }}

    //         />) :
    //         "Loading"
    // )

    const barChart = (

        <Bar
            data={{
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'Total People Infected by Covid-19 stats',
                    backgroundColor: ['red', 'orange', 'black'],
                    data: [props.data.confirmed, props.data.recovered, props.data.deaths]
                }]
            }}

            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${props.country}` }
            }}
        />

    )

    return (
        <div className="linechart">
            <h3 style={{ padding: "0px 0 20px 0", textAlign: "center" }}>Covid-19 Stats for {props.data.country} </h3>



            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ color: 'green' }}>{props.data.country}</th>
                        <th scope="col" style={{ color: 'red' }}>Confirmed</th>
                        <th scope="col" style={{ color: 'orange' }}>Recovered</th>
                        <th scope="col">Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" style={{ color: 'green' }}>Data</th>
                        <td style={{ color: 'red' }}>{props.data.confirmed} </td>
                        <td style={{ color: 'orange' }}>{props.data.recovered} </td>
                        <td>{props.data.deaths}</td>
                    </tr>
                </tbody>
            </table>

            {barChart}

        </div>
    )
}

export default BarChart