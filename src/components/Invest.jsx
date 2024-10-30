import React from 'react'

export default function Invest({ income, investmentPercentage, onInvestmentPercentageChange }) {
  const investmentAmount = (income * investmentPercentage) / 100

  return (
    <div className='w-full bg-white shadow-lg rounded-xl p-6 transition-all hover:shadow-xl space-y-4'>
      <div className="flex flex-col space-y-2">
        <p className="font-medium">Percentage to invest:</p>
        <input
          type="range"
          min="0"
          max="100"
          value={investmentPercentage}
          onChange={(e) => onInvestmentPercentageChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">Investment Percentage: <span className="font-medium">{investmentPercentage}%</span></p>
        <p className="text-gray-600">Amount to invest: <span className="font-medium">${investmentAmount.toFixed(2)}</span></p>
      </div>
    </div>
  )
}