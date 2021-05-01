import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Filter = ({filter, handler}) => {
  return(
    <div>
    find countries : <input value = {filter} onChange ={handler}/>
  </div>
  )
}

const Countries = ({countries, filter}) => {
  var filt_countries = Array(0)
  if (filter !== ''){
  countries.map((country)  => {
    if (country.name.toLowerCase().includes(filter.toLowerCase())) {
      filt_countries = filt_countries.concat(
        [{"name" : country.name,
         "capital" : country.capital,
         "population" : country.population,
         "languages": country.languages,
         "flag" : country.flag
        }]
    )
     }
  }
  )
  }
  if (filt_countries.length === 0){
    return (<p> Enter a valid name </p>)
  }
  else if (filt_countries.length === 1)
    {var country = filt_countries[0]
    return ( <div>
      <h2>{country.name}</h2>
      <p> capital {country.capital}</p>
      <p> population {country.population}</p>
      <h3> Languages </h3>
      <ul> {country.languages.map((lang,idx) => <p key={idx}>{lang.name}</p>)} </ul>
      <img src = {country.flag} alt = {country.name + "flag"} width="250" height="250"></img>
      </div>)}
  else if(filt_countries.length <= 10){
    return filt_countries.map((country,idx) => (<p key = {idx}> {country.name} </p>))
  }
  else {
    return <p> Too many matches, specify another filter </p>
  }
}

const App = () => {
  const [countries, setCountries ] = useState([])
  const [filtVal, setfiltVal] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleOnFiltChange = (event) => {
    setfiltVal(event.target.value)
  }

  return (
    <div>
      <Filter filter = {filtVal} handler = {handleOnFiltChange}/>

      <Countries countries = {countries} filter = {filtVal} />
    </div>
  )
}

export default App