import React, { useState } from 'react';

export default function FinancialGoals({ 
  goals, 
  addGoal, 
  updateGoal, 
  deleteGoal, 
  monthlyIncome, 
  savingPercentage 
}) {
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: '',
    deadline: '',
    currentAmount: 0,
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateGoal(newGoal)) {
      addGoal(newGoal);
      setNewGoal({
        name: '',
        targetAmount: '',
        deadline: '',
        currentAmount: 0,
        category: ''
      });
      setShowForm(false);
    }
  };

  const validateGoal = (goal) => {
    if (!goal.name || goal.targetAmount <= 0 || goal.currentAmount < 0) {
      alert('Please fill in all fields correctly');
      return false;
    }
    if (new Date(goal.deadline) <= new Date()) {
      alert('Deadline must be in the future');
      return false;
    }
    return true;
  };

  const calculateProgress = (goal) => {
    return (goal.currentAmount / goal.targetAmount) * 100;
  };

  return (
    <div className='Box rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 mt-4'>
      <div>
        <h2 className="text-xl font-bold mb-4">Financial Goals</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          {showForm ? 'Cancel' : 'New Goal'}
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Goal Name</label>
              <input
                type="text"
                value={newGoal.name}
                onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Target Amount</label>
              <input
                type="number"
                value={newGoal.targetAmount}
                onChange={(e) => setNewGoal({ ...newGoal, targetAmount: Number(e.target.value) })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Deadline</label>
              <input
                type="date"
                value={newGoal.deadline}
                onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Category</label>
              <input
                type="text"
                value={newGoal.category}
                onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Add Goal
            </button>
          </form>
        )}

        <div className="flex flex-wrap mt-4">
          {goals.map(goal => (
            <div key={goal.id} className="ml-8 mb-4 bg-white rounded-lg shadow-md p-4 w-64">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">{goal.name}</h3>
                <span className="text-sm text-gray-500">{goal.category}</span>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span>Progress:</span>
                  <span>{calculateProgress(goal).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${calculateProgress(goal)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-sm">
                <p>Target: ${goal.targetAmount}</p>
                <p>Current: ${goal.currentAmount}</p>
                <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
              </div>
              
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => {
                    const amount = prompt('Enter amount to add:');
                    if (amount && !isNaN(amount)) {
                      updateGoal(goal.id, {
                        ...goal,
                        currentAmount: goal.currentAmount + Number(amount)
                      });
                    }
                  }}
                  className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteGoal(goal.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}