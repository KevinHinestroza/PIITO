import { useEffect, useState } from 'react';
import api from '../utils/api';

const Mobilization = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get('/mobilization').then(res => setEvents(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Mobilization</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name} - {event.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mobilization;
