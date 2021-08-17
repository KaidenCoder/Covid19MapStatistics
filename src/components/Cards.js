import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBriefcaseMedical, faSkullCrossbones, faAmbulance } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format';
import { fetchData } from './utils/api'

const Cards = (props) => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchCAPI = async () => {
            const data = await fetchData()
            setDailyData(data)
        }
        fetchCAPI()
    }, [])

    return (
        <div >
            <div className="container linechart">
                <h3 style={{ padding: "20px 0", textAlign: "center" }}>COVID-19 GLOBAL STATS</h3>
                <div className="row">
                    <div className="col mb-2">
                        <div className="card bgConfirmedCard" style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
                            <div className="card-body">
                                <h5 className="card-title text-muted">Confirmed</h5>
                                <h4 className="card-title mt-2 ">
                                    <NumberFormat value={dailyData.confirmed} displayType={'text'} thousandSeparator={true} />
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="card bgRecoveredCard" style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
                            <div className="card-body">
                                <h5 className="card-title text-muted"> Recovered </h5>
                                <h4 className="card-title mt-2 ">
                                    <NumberFormat value={dailyData.recovered} displayType={'text'} thousandSeparator={true} />
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="card bgDeathsCard" style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
                            <div className="card-body">
                                <h5 className="card-title text-muted">Deaths</h5>
                                <h4 className="card-title mt-2 ">
                                    <NumberFormat value={dailyData.deaths} displayType={'text'} thousandSeparator={true} />
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards