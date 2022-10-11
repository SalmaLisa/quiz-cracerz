import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const loadedData = useLoaderData();
  const quizData = loadedData.data;
  return (
    <div className='border'>
       
      <AreaChart className='mx-auto mt-16' width={550}
          height={350}
        data={quizData}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#4A47D3" />
        </AreaChart>
       <h1 className='text-center'> Total Questions Chart</h1>
    </div>
  );
};

export default Statistics;