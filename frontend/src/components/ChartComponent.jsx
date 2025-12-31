import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = () => {
  // Dummy data; replace with API call
  const data = [
    { name: 'Party A', votes: 400 },
    { name: 'Party B', votes: 300 },
  ];

  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="votes" fill="#8884d8" />
    </BarChart>
  );
};

export default ChartComponent;
