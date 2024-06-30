import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const SubHeading = () => {
  return (
    <div className='flex flex-col gap-4 my-2 sm:flex-row  sm:gap-20'>
       <Button title="Event Planners" path="/eventPlanner" ></Button>
       <Button title="Farmers" path="farmer" />
       <Button title="Travellers" path="traveller" />

    </div>
    
  )
}

export default SubHeading