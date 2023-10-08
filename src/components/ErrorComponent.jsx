import React from 'react'
import "../index.css"
import App from '../App'
import Descriptions from './description'
import Main from './Main'
const ErrorComponent = () => {
  return (
    <div className='error-component'>
      <h1>Please check your city name :</h1>
      <h3>please refresh the page and try again with proper city name...</h3>
      </div>

  )
}

export default ErrorComponent
