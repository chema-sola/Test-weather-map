import React from 'react'
import WeatherInfoDetall from './WeatherInfoDetall'

function WeatherInfo({ forecast, dias, clickday }) {

  const week = dias.map((d, idx) => <WeatherInfoDetall clickday={clickday} key={idx} data={d} forecast={forecast} />)

  return (
    <>
      <>{week}</>
    </>
  )
}

export default WeatherInfo
