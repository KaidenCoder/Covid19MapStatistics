import React, { useState, useEffect } from 'react'
import NoImage from '../../images/noimage.jpeg'
import Moment from 'react-moment';
import 'moment-timezone';

const Newscovid = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch(`https://content.guardianapis.com/search?q=covid&format=json&show-tags=contributor&show-section=true&show-fields=headline,trailText,thumbnail,publication,short-url&order-by=newest&show-elements=video&show-references=author&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`)
            .then(res => res.json())
            .then(data => setNews(data.response.results))
    }, [setNews])


    return (
        <div className="news">
            <h3 style={{ padding: "20px 0", textAlign: "center" }}>Daily Covid news</h3>
            {news != undefined ? news.map((data, i) => (
                <>
                    <div key={data.webPublicationDate} className="news-card" >
                        <div className="news-img">
                            <img style={{ borderRadius: '10px' }} src={data.fields.thumbnail ? data.fields.thumbnail : NoImage} width='100%' height='250px' alt="image" />

                        </div>
                        <div className="news-content">
                            <h6 style={{ letterSpacing: '0.14em', paddingBottom: '0.5em' }}>{data.fields.headline ? data.fields.headline : "No title"} - <span style={{ fontSize: '0.8em', opacity: "0.5" }}>Source: {data.fields.publication ? data.fields.publication : "Anonymous"}</span></h6>
                            <p><span style={{ opacity: "0.5" }}>{data.fields.trailText ? data.fields.trailText : ""}...</span><a href={data.webUrl}>Read more</a></p>
                            <p style={{ fontSize: '0.8em', opacity: "0.5" }}><Moment format="ddd MMM D YYYY LT" date={data.webPublicationDate} /></p>

                        </div>
                    </div>
                </>
            )) : <p style={{ textAlign: "center" }}>Data could not be fetched. Error: 426 Upgrade Required </p>}

        </div>
    )
}

export default Newscovid
