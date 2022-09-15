import { useState } from 'react'

import WeatherForm from './component/WeatherForm'
import WeatherInfo from './component/WeatherInfo'
import WeatherInfoDay from './component/WeatherInfoDay'

import WEATHER_KEY from './keys'

import './App.css'

function App() {
  const [forecast, setForecast] = useState({})
  const [detallDia, setDetallDia] = useState('')

  const getWeather = async (e) => {
    e.preventDefault()
    const { city, country } = e.target.elements
    const cityValue = city.value
    const countryValue = country.value

    if (cityValue && countryValue) {
      try {
        const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`
        const response = await fetch(API_URL)
        const data = await response.json()
        setForecast({ data })
      } catch (error) {
        console.log(error)
      }
    }
  }
  function clickday(data) {
    setDetallDia(data)
  }

  let resultado = <></>
  let dias

  if (forecast.data) {
    resultado = forecast.data.list.map((e, index) => <li key={index}>{e.dt_txt.split(' ')[0]}</li>)
    dias = forecast.data.list.map((e) => e.dt_txt.split(' ')[0])
    dias = [...new Set(dias)]
  }

  return (
    <>
      <div className='px-4 py-5 my-6 text-center'>
        <h1 className='display-5 fw-bold'>Weather Map</h1>
        <div className='col-lg-10 mx-auto'>
          <p className='lead mb-4'>Welcome to my Weather Map tech test</p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <WeatherForm getWeather={getWeather} />
          </div>
          <div className='row'>
            {forecast.data && (
              <>
                <WeatherInfo forecast={forecast} dias={dias} clickday={clickday} />
              </>
            )}
            {detallDia ? <WeatherInfoDay data={detallDia} forecast={forecast} /> : <></>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
