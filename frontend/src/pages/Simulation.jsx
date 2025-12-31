import { useState } from 'react';
import api from '../utils/api';

const Simulation = () => {
  const [name, setName] = useState('');
  const [parameters, setParameters] = useState({ multiplier: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/simulations', { name, parameters });
    alert('Simulation run');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Simulation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Simulation Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block mb-2 p-2 border"
        />
        <input
          type="number"
          placeholder="Multiplier"
          value={parameters.multiplier}
          onChange={(e) => setParameters({ multiplier: e.target.value })}
          className="block mb-4 p-2 border"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Run Simulation</button>
      </form>
    </div>
  );
};

export default Simulation;
