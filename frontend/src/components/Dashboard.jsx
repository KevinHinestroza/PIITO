import MapComponent from './MapComponent';
import ChartComponent from './ChartComponent';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <MapComponent />
        <ChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
