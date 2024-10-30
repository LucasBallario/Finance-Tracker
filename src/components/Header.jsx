import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-center gap-3 py-4'>
        <div>
            <img className='rounded-full h-11 w-18' src= "/images1.jpg" />
        </div>
        <div>
            <p className='text-slate-700 font-bold'>Welcome back!</p>
            <p className='text-slate-400'>Joe doe</p>
        </div>
    </div>
  )
}
