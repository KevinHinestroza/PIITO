import { useEffect, useState } from 'react';
import api from '../utils/api';
import ChartComponent from '../components/ChartComponent';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/analytics').then(res => setData(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Analytics</h1>
      <ChartComponent data={data} />
    </div>
  );
};

export default Analytics;
