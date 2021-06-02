import React from 'react';
import DespesaData from './DespesaData';
import Card from '../UI/Card';
import './DespesaItem.css';

function DespesaItem(props) {
  console.log('DespesaItem', props.date);
  return (
    <Card className='expense-item'>
      <div className='expense-item'>
        <DespesaData date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>R$ {props.amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default DespesaItem;
