import React from 'react'
import { useParams } from 'react-router-dom' //The useParams hook is used to access the dynamic parameters in the URL. In this case, it's used to retrieve the userid from the URL.


function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid} </div>
  )
}

export default User