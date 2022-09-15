import React from 'react'

function WeatherForm(props) {
  return (
    <div className='container'>
      <form onSubmit={props.getWeather}>
        <div className='row gy-3'>
          <div className='col-md-6'>
            <input type='text' name='city' className='form-control' id='cc-name' placeholder='City' required='' />
            <small className='text-muted'>example: "Barcelona"</small>
            <div className='invalid-feedback'>Name on card is required</div>
          </div>

          <div className='col-md-6'>
            <input type='text' name='country' className='form-control' id='cc-number' placeholder='Country' required='' />
            <small className='text-muted'>example: "Spain"</small>
          </div>

          <button className='btn btn-success btn-block'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default WeatherForm
