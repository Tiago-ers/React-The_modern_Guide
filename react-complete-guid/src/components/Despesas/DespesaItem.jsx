import React, { useState } from 'react';
import DespesaData from './DespesaData';
import './DespesaItem.css';

function DespesaItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <div className='expense-item'>
      <DespesaData date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
      <button onClick={clickHandler}>Mudar titulo</button>
    </div>
  );
}

export default DespesaItem;
