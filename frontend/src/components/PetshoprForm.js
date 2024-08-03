import React, { useState } from 'react';
import axios from 'axios';
import PetshopResult from './PetshopResult.js';
import '../assets/styles/App.css';

function PetshopForm() {
  const [date, setDate] = useState('');
  const [smallDogs, setSmallDogs] = useState(0);
  const [largeDogs, setLargeDogs] = useState(0);
  const [result, setResult] = useState(null);

  const handleClearInput = (e) => {
    e.target.value = ''; // Limpa o valor que está no campo ao ser clicado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/petshop/calculate', {
      date: date,
      smallDogs: parseInt(smallDogs, 10),
      largeDogs: parseInt(largeDogs, 10),
    });
    setResult(response.data);
  };

  return (
    <div className='main-form'>
      <div className='titulo'>
        <h1>Petshop Finder</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Data:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Quantidade de cães pequenos:
          <input type="number" value={smallDogs} onChange={(e) => setSmallDogs(e.target.value)} required onFocus={handleClearInput} />
        </label>
        <label>
          Quantidade de cães grandes:
          <input type="number" value={largeDogs} onChange={(e) => setLargeDogs(e.target.value)} required onFocus={handleClearInput} />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {result && <PetshopResult result={result} />}
    </div>
  );
}

export default PetshopForm;
