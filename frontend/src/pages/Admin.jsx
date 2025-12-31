import { useEffect, useState } from 'react';
import api from '../utils/api';

const Admin = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    api.get('/audit').then(res => setLogs(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Admin Panel</h1>
      <h2>Audit Logs</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.action} on {log.resource} by {log.user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
