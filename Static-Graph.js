
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//Main app componet 
const App = () => {
  //data will come from the sensors these are just theoretical values
  // sample data array  of energy usage values for different houses 
  const data = [
    { name: 'House1', value: 23 },
    { name: 'House2', value: 43 },
    { name: 'House3', value: 53 },
    { name: 'House4', value: 63 },
  ];

  return (
    // Root div of the app componet 
    <div className='App'>
      <h1>Energy Usage</h1>    
      <LineChart
      // Height and width of graph 
        width={600}
        height={300}
        // data on the graph will be from the array 
        data={data}
        margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/*X-axis settings, with Hour as the data key*/}
        <XAxis dataKey="H" />
        {/*Y-axis settings, with KiloWatt as the data key*/}
        <YAxis  dataKey="KW"/>
        {/* This allows the user  to see the details of the data when they hover their mouse*/}
        <Tooltip />
        {/* Displays key details*/}
        <Legend />
        
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
// Export the app component to be uned in other parts of the application 
export default App;

