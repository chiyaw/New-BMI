import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [statusColor, setStatusColor] = useState('text-gray-700');

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight <= 0 || height <= 0) {
      alert('Please enter valid weight and height values');
      return;
    }

    const bmiValue = (weight / (height * height)) * 703;
    const roundedBmi = bmiValue.toFixed(1);
    setBmi(roundedBmi);

    if (bmiValue < 18.5) {
      setMessage('You are underweight');
      setStatusColor('text-yellow-500');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage('You are a healthy weight');
      setStatusColor('text-green-600');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage('You are overweight');
      setStatusColor('text-orange-500');
    } else {
      setMessage('You are obese');
      setStatusColor('text-red-600');
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white border-4 border-purple-400 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-10 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8 tracking-wide">BMI Calculator</h1>

        <form onSubmit={calcBmi} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Weight (lbs)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 150"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height (inches)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 65"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={reload}
              className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-100 px-6 py-2 rounded-lg font-medium shadow-md transition"
            >
              Reset
            </button>
          </div>
        </form>

        {bmi && (
          <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center shadow-inner">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">Your BMI: <span className="text-indigo-600">{bmi}</span></h2>
            <p className={`text-md font-semibold ${statusColor}`}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;