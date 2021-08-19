import React, { useState, useEffect } from 'react'
import { fetchNewsCovidData } from '../utils/api'
import NoImage from '../../images/noimage.jpeg'
import Moment from 'react-moment';
import 'moment-timezone';

const Newscovid = () => {
    const [newsdata, setNewsData] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            const data = await fetchNewsCovidData()
            setNewsData(data)
        }

        fetchNews()
    }, [setNewsData])
    console.log("news", newsdata)
    return (
        <div className="news">
            <h3 style={{ padding: "20px 0", textAlign: "center" }}>Daily Covid news</h3>
            {newsdata.map((data) => (
                <>
                    <div className="news-card">
                        <div className="news-img">
                            <img style={{ borderRadius: '10px' }} src={data.image ? data.image : NoImage} width='100%' height='250px' alt="image" />

                        </div>
                        <div className="news-content">
                            <h6 style={{ letterSpacing: '0.14em', paddingBottom: '0.5em' }}>{data.title ? data.title : "No title"} - <span style={{ fontSize: '0.8em', opacity: "0.5" }}>By {data.author ? data.author : "Anonymous"}{", "}{data.source ? data.source : "Anonymous"}</span></h6>
                            <p><span style={{ opacity: "0.5" }}>{data.content ? data.content : data.description}</span><a href={data.url}>Read more</a></p>
                            <p style={{ fontSize: '0.8em', opacity: "0.5" }}><Moment format="ddd MMM D YYYY LT" date={data.date} /></p>

                        </div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default Newscovid
