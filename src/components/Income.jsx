import React, { useState } from 'react'

export default function Income( {income,setIncome} ) {
    const [isEditing,setIsEditing] = useState(false)
    const [manageValue, setManageValue] = useState(income)
  return (
    <div className='w-full bg-[#E5E4E2] shadow-lg rounded-xl p-6 transition-all hover:shadow-xl'>
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input 
            className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={manageValue}
            onChange={(e) => setManageValue(e.target.value)}
            onBlur={() => {
              setIncome(manageValue)
              setIsEditing(false) 
            }}
            type="number"
          />
        ) : (
          <p className="text-lg font-medium align-middle">Monthly income: ${income}</p>
        )}
        <button 
          onClick={() => setIsEditing(true)}
          className="ml-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  )
}
