import React from 'react';
import ReactDOM from 'react-dom/client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Main app component
const App = () => {
  const data = [
    { name: 'House1', value: 23 },
    { name: 'House2', value: 43 },
    { name: 'House3', value: 53 },
    { name: 'House4', value: 63 },
  ];

  // Custom tooltip to display detailed information on hover
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '5px' }}>
          <p>{label}</p>
          <p>{`Usage: ${payload[0].value} kW`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='App'>
      <h1>Energy Usage</h1>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Houses', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Usage (kW)', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
