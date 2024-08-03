import React, { useState } from 'react';
import axios from 'axios';
import PetshopResult from './PetshopResult.js';
import '../assets/styles/App.css';

function PetshopForm() {
  const [date, setDate] = useState('');
  const [smallDogs, setSmallDogs] = useState('');
  const [largeDogs, setLargeDogs] = useState('');
  const [result, setResult] = useState(null);

  const handleClearInput = (e) => {
    e.target.value = ''; // Limpa o valor que está no campo ao ser clicado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit foi chamado'); 

    const smallDogsNum = Number(smallDogs);
    const largeDogsNum = Number(largeDogs);
    
    if (smallDogsNum < 0 || largeDogsNum < 0) {
      alert('A quantidade de cães não pode ser negativa.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/petshop/calculate', {
        date: date,
        smallDogs: smallDogsNum,
        largeDogs: largeDogsNum,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Erro ao calcular:', error);
    }
  };

  const isSubmitDisabled = Number(smallDogs) < 0 || Number(largeDogs) < 0;

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
          <input 
            type="number" 
            value={smallDogs} 
            onChange={(e) => setSmallDogs(e.target.value)} 
            required 
            onFocus={handleClearInput} 
          />
        </label>
        <label>
          Quantidade de cães grandes:
          <input 
            type="number" 
            value={largeDogs} 
            onChange={(e) => setLargeDogs(e.target.value)} 
            required 
            onFocus={handleClearInput} 
          />
        </label>
        <button type="submit" disabled={isSubmitDisabled}>Calcular</button>
      </form>
      {result && <PetshopResult result={result} />}
    </div>
  );
}

export default PetshopForm;
