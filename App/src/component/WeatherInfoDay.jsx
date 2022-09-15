import React from 'react'
import './styles.css'

function WeatherInfoDay({ data, forecast }) {
  let infodatosDia = forecast.data.list.filter((e) => e.dt_txt.includes(data))
  let day = infodatosDia.map((s, idx) => (
    <div key={idx} className='grid-element'>
      <div style={{ height: '170px' }}>
        <div>{new Date(s.dt_txt).getHours()}H</div>
        <img src={`http://openweathermap.org/img/w/${s.weather[0].icon}.png`} style={{ width: '100px' }} />
        <h5>{s.weather[0].description}</h5>
      </div>
      <hr />
      <div>{Math.trunc(s.main.temp)}º</div>
    </div>
  ))

  let dateString = infodatosDia[0].dt_txt
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let numberDay = new Date(dateString).getDay()
  let number_Day = new Date(dateString).getDate()
  let nameDay = days[numberDay]

  return (
    <>
      <div className='px-4 py-5 my-6 text-center'>
        <h2>Weather Info Hours</h2>
        <div>
          <div className='grid-container'>
            <div className='grid-element'>
              <div style={{ height: '170px' }}>
                <div className='nameDay'>
                  {nameDay} {number_Day}
                </div>
              </div>
              <hr />
              <div>Temp (ºC)</div>
            </div>
            {day}
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherInfoDay
