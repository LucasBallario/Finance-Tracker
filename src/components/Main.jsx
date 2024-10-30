import React, { useState, useEffect } from 'react';
import Income from './Income';
import Saving from './Saving';
import Invest from './Invest';
import FinancialGoals from './FinancialGoals';

export default function Main() {
    const [income, setIncome] = useState(0);
    const [savingPercentage, setSavingPercentage] = useState(0);
    const [investmentPercentage, setInvestmentPercentage] = useState(100);
    const [goals, setGoals] = useState([]);
  
    
    useEffect(() => {
      const savedGoals = localStorage.getItem('goals');
      if (savedGoals) {
        setGoals(JSON.parse(savedGoals));
      }
    }, []);
  
    
    useEffect(() => {
      localStorage.setItem('goals', JSON.stringify(goals));
    }, [goals]);
  
    const handleSavingPercentageChange = (newSavingPercentage) => {
      setSavingPercentage(newSavingPercentage);
      setInvestmentPercentage(100 - newSavingPercentage);
    };
  
    const handleInvestmentPercentageChange = (newInvestmentPercentage) => {
      setInvestmentPercentage(newInvestmentPercentage);
      setSavingPercentage(100 - newInvestmentPercentage);
    };
  
    const addGoal = (newGoal) => {
      setGoals([...goals, { ...newGoal, id: Date.now().toString() }]);
    };
  
    const updateGoal = (id, updatedGoal) => {
      setGoals(goals.map(goal => goal.id === id ? updatedGoal : goal));
    };
  
    const deleteGoal = (id) => {
      setGoals(goals.filter(goal => goal.id !== id));
    };

  return (
    <div className='container mx-auto px-4 my-8 flex flex-col gap-6'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Income
          income={income}
          setIncome={setIncome}
        />
        <Saving
          income={income}
          savingPercentage={savingPercentage}
          onSavingPercentageChange={handleSavingPercentageChange}
        />
        <Invest
          income={income}
          investmentPercentage={investmentPercentage}
          onInvestmentPercentageChange={handleInvestmentPercentageChange}
        />
      </div>
      <FinancialGoals
        goals={goals}
        addGoal={addGoal}
        updateGoal={updateGoal}
        deleteGoal={deleteGoal}
        monthlyIncome={income}
        savingPercentage={savingPercentage}
      />
    </div>
  );
}