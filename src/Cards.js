import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faBriefcaseMedical, faSkullCrossbones, faAmbulance } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format';
import { fetchData } from './api'

const Cards = (props) => {
    console.log(props)
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchCAPI = async () => {
            const data = await fetchData()
            setDailyData(data)
        }

        fetchCAPI()
    }, [])

    console.log(dailyData)
    return (
        <div style={{ padding: "40px 0" }}>
            <div className="container">
                <h3 style={{ padding: "20px 0", textAlign: "center" }}>Total Global Stats</h3>
                <div className="row">
                    <div className="col">
                        <div className="card bgConfirmedCard" style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>

                            <div style={{ fontSize: 34, color: "red" }}>
                                <FontAwesomeIcon icon={faBriefcaseMedical} size={"2x"} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Total Confirmed</h5>
                                <h6 className="card-subtitle mb-2 text-muted">

                                    <NumberFormat value={dailyData.confirmed} displayType={'text'} thousandSeparator={true} />


                                </h6>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bgRecoveredCard" style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
                            <div style={{ fontSize: 34, color: "orange" }}>
                                <FontAwesomeIcon icon={faSmile} size={"2x"} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Total Recovered</h5>
                                <h6 className="card-subtitle mb-2 text-muted">

                                    <NumberFormat value={dailyData.recovered} displayType={'text'} thousandSeparator={true} />

                                </h6>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bgDeathsCard" style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
                            <div style={{ fontSize: 34, color: "black" }}>
                                <FontAwesomeIcon icon={faSkullCrossbones} size={"2x"} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Total Deaths</h5>
                                <h6 className="card-subtitle mb-2 text-muted">


                                    <NumberFormat value={dailyData.deaths} displayType={'text'} thousandSeparator={true} />

                                </h6>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bgConfirmedCard" style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
                            <div style={{ fontSize: 34, color: "red" }}>
                                <FontAwesomeIcon icon={faAmbulance} size={"2x"} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Today Cases+</h5>
                                <h6 className="card-subtitle mb-2 text-muted">


                                    <NumberFormat value={dailyData.todayCases} displayType={'text'} thousandSeparator={true} />

                                </h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards