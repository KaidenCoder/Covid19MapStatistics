import axios from 'axios'

const url1 = 'https://disease.sh/v3/covid-19/continents'
const url2 = 'https://disease.sh/v3/covid-19'
const url3 = 'https://disease.sh/v3/covid-19/countries'
const url = 'https://disease.sh/v3/covid-19/all'
const newsapi = `https://newsapi.org/v2/top-headlines?language=en&q=covid&apiKey=${process.env.REACT_APP_API_KEY}`

export const fetchData = async () => {
    try {
        const response = await axios.get(url)
        const modifiedData = {
            confirmed: response.data.cases,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            todayCases: response.data.todayCases
        }
        return modifiedData
    } catch (error) {

    }
}

export const fetchContinentData = async () => {
    try {
        const response = await axios.get(url1)
        const modifiedData = response.data.map((dailyData) => ({
            cases: dailyData.cases,
            recovered: dailyData.recovered,
            deaths: dailyData.deaths,
            continent: dailyData.continent
        }))
        return modifiedData

    } catch (error) {

    }
}

export const fetchDataChangeable = async (country) => {
    let changeableUrl = `${url2}/countries/India`
    if (country) {
        changeableUrl = `${url2}/countries/${country}`
    }
    try {
        const response = await axios.get(changeableUrl)
        const modifiedData = {
            confirmed: response.data.cases,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            todayCases: response.data.todayCases,
            country: response.data.country
        }
        return modifiedData
    } catch (error) {

    }
}

export const fetchCountriesData = async () => {
    try {
        const response = await axios.get(url3)
        const modifiedData = response.data.map((dailyData) => ({
            country: dailyData.country,
            confirmed: dailyData.cases,
            recovered: dailyData.recovered,
            deaths: dailyData.deaths,
            latitude: dailyData.countryInfo.lat,
            longitude: dailyData.countryInfo.long,
            id: dailyData.countryInfo._id
        }))
        return modifiedData

    } catch (error) {

    }
}


export const fetchNewsCovidData = async () => {
    try {
        const response = await axios.get(newsapi)

        const modifiedNewsData = response.data.articles.map((newsData) => ({
            author: newsData.author,
            content: newsData.content,
            description: newsData.description,
            date: newsData.publishedAt,
            source: newsData.source.name,
            title: newsData.title,
            url: newsData.url,
            image: newsData.urlToImage
        }))
        return modifiedNewsData

    } catch (error) {

    }
}

