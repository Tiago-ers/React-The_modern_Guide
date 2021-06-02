import React from 'react';
import './DespesaData.css';

function DespesaData(props) {
  console.log('DespesaData', props.date);
  const mes = props.date.toLocaleString('en-US', { month: 'long' });
  const dia = props.date.toLocaleString('en-US', { day: '2-digit' });
  const ano = props.date.getUTCFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date_day'>{dia}</div>
      <div className='expense-date_month'>{mes}</div>
      <div className='expense-date_year'>{ano}</div>
    </div>
  );
}

export default DespesaData;
