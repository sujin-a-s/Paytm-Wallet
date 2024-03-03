import React from 'react'

const AppBar = () => {
  return (
    <div className='flex justify-between p-5 shadow-md'>
        <div>
            Paytm App
        </div>
        <div className='flex '>
            <h1 className='px-2'>Hello</h1>
            <div className='bg-slate-300 rounded-full p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default AppBar