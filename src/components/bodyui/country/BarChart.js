import React from 'react';
import { Bar } from 'react-chartjs-2'
import NumberFormat from 'react-number-format';

const BarChart = (props) => {
    const barChart = (
        <Bar
            data={{
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'Total People Infected by Covid-19 stats',
                    backgroundColor: ['red', 'green', 'blue'],
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
            <h3 style={{ padding: "60px 0 20px 0", textAlign: "center" }}>Covid-19 Stats for {props.data.country} </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" style={{ background: 'rgba(0,0,0,0.05)', color: 'black', border: "1px solid black" }}>{props.data.country}</th>
                        <th scope="col" style={{ background: 'rgba(255,0,0,0.05)', color: 'red', border: "1px solid black" }}>Confirmed</th>
                        <th scope="col" style={{ background: 'rgba(0,255,0,0.05)', color: 'green', border: "1px solid black" }}>Recovered</th>
                        <th scope="col" style={{ background: 'rgba(0,0,255,0.05)', color: 'blue', border: "1px solid black" }}>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" style={{ color: 'black', border: "1px solid black" }}>Data</th>
                        <td style={{ color: 'red', border: "1px solid black" }}><NumberFormat value={props.data.confirmed} displayType={'text'} thousandSeparator={true} /> </td>
                        <td style={{ color: 'green', border: "1px solid black" }}><NumberFormat value={props.data.recovered} displayType={'text'} thousandSeparator={true} /> </td>
                        <td style={{ color: 'blue', border: "1px solid black" }}><NumberFormat value={props.data.deaths} displayType={'text'} thousandSeparator={true} /> </td>
                    </tr>
                </tbody>
            </table>

            {barChart}

        </div >
    )
}

export default BarChart