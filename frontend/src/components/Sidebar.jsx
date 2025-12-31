import { Link } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl mb-4">PIITO</h2>
      <nav>
        <Link to="/" className="block py-2">Dashboard</Link>
        <Link to="/analytics" className="block py-2">Analytics</Link>
        <Link to="/simulation" className="block py-2">Simulation</Link>
        <Link to="/mobilization" className="block py-2">Mobilization</Link>
        <Link to="/admin" className="block py-2">Admin</Link>
      </nav>
      <button onClick={onLogout} className="mt-4 bg-red-500 px-4 py-2">Logout</button>
    </div>
  );
};

export default Sidebar;
