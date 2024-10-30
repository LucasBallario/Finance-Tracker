import React from 'react'

export default function Saving({ income, savingPercentage, onSavingPercentageChange }) {
  const savingAmount = (income * savingPercentage) / 100

  return (
    <div className='w-full bg-white shadow-lg rounded-xl p-6 transition-all hover:shadow-xl space-y-4'>
      <div className="flex flex-col space-y-2">
        <p className="font-medium">Percentage to save:</p>
        <input
          type="range"
          min="0"
          max="100"
          value={savingPercentage}
          onChange={(e) => onSavingPercentageChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">Saving Percentage: <span className="font-medium">{savingPercentage}%</span></p>
        <p className="text-gray-600">Amount to save: <span className="font-medium">${savingAmount.toFixed(2)}</span></p>
      </div>
    </div>
  )
}