import React from 'react';
import '../assets/styles/App.css';

function PetshopResult({ result }) {
  return (
    <div className="result">
      <h2>Melhor Petshop</h2>
      <div className="highlighted-result">
        <p>{result.bestPetshop}</p>
      </div>
      <h2>Resultados dos Petshops</h2>
      <div className="petshop-list">
        {result.results.map(petshop => (
          <div
            key={petshop.name}
            className={`petshop-item ${petshop.name === result.bestPetshop ? 'highlight' : ''}`}
          >
            <p>{petshop.name}</p>
            <p>R${petshop.totalCost.toFixed(2)}</p>
            <p>{petshop.distance}km</p>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default PetshopResult;
