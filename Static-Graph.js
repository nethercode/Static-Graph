import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const data = [
    { name: 'House1 ', value: 23 },
    { name: 'House2 ', value: 43 },
    { name: 'House3 ', value: 53 },
    { name: 'House4 ', value: 63 },
  ];
  return(
    <div className='App'>
      <h1>Energy usage </h1>

      <p>This is a paragraph</p>
      <BarChart 
        width={600}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
        barSize={20}
        />
    </div>
  )


}


