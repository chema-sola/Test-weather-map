import React from 'react'
import './styles.css'

function WeatherInfoDetall(props) {
  let dataDay = props.forecast.data.list.filter((e) => e.dt_txt.includes(props.data))
  let max = dataDay[0].main.temp_max
  let min = dataDay[0].main.temp_min
  let icon = dataDay[0].weather[0].icon

  dataDay.forEach((e) => {
    if (e.main.temp_min < min) {
      min = e.main.temp_min
    }
    if (e.main.temp_max > max) {
      max = e.main.temp_max
    }
  })

  let calcmin = Math.trunc(min)
  let calcmax = Math.trunc(max)
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let numberDay = new Date(props.data).getDay()
  let nameDay = days[numberDay]
  let date = new Date(props.data)
  let day = date.getDate()

  return (
    <>
      <div className='mt-2 col-md-4 text-center'>
        <div className='grid-container' style={{ width: '18rem' }}>
          <div className='grid-element'>
            <h5 className='card-title'>
              {nameDay} {day}{' '}
            </h5>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} style={{ width: '100px' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h3>{calcmin}º</h3>
              <p>/ {calcmax}º</p>
            </div>
            <hr />
            <button className='btn btn-primary' onClick={() => props.clickday(props.data, props.forecast.data, dataDay)}>
              Info Day
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherInfoDetall
