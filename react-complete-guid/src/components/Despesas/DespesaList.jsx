import React from 'react';
import DespesaItem from './DespesaItem';

const DespesaList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Período sem despesas.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <DespesaItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default DespesaList;
