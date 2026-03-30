import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams() // This is used to get the dynamic parameter from the url and it will return an object with key as the parameter name and value as the parameter value
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>User: {userid}</div>
  )
}

export default User