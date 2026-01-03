import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Analytics from './pages/Analytics';
import Simulation from './pages/Simulation';
import Mobilization from './pages/Mobilization';
import Admin from './pages/Admin';
import Segmentation from './pages/Segmentation';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, login, logout } = useAuth();
  
  if (!user) {
    return <Login onLogin={login} />;
  }
  
  return (
    <Router>
      <div className="flex">
        <Sidebar onLogout={logout} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/mobilization" element={<Mobilization />} />
            <Route path="/segmentation" element={<Segmentation />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
