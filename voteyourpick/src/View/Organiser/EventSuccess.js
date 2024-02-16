import React from 'react'
import AppBar from '../Component/AppBar'
import tick from '../../Assets/tick.svg'

export default function EventSuccess() {
  return (
    <div>
        <AppBar />
    <div className='flex justify-center pt-10'>
        <div className='flex flex-row gap-3'>
            <img src={tick} className='w-11' />
            <div className=''>
                <h1 className='text-lg'>Friday Feast </h1>
                <p className='text-green-700 text-sm'>Published Successfully ! </p>
            </div>
        </div>
    </div>
    </div>
  )
}
