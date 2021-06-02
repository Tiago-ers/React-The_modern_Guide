import React, { useState } from 'react';
import Despesas from './components/Despesas/Despesas.jsx';
import NovaDespesa from './components/NovaDespesa/NovaDespesa.jsx';
import './App.css';

const mokeExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [dataDespesas, setDespesas] = useState(mokeExpenses);

  const addDespesas = (despesas) => {
    console.log('APP ', despesas);
    setDespesas((prevDespesas) => {
      return [despesas, ...prevDespesas];
    });
  };

  return (
    <div className='App'>
      <NovaDespesa addDespesas={addDespesas} />

      <Despesas items={dataDespesas} />
    </div>
  );
}

export default App;
