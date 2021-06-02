import React, { useState } from 'react';

import DespesaFiltro from './DespesaFiltro';
import './Despesas.css';
import DespesaList from './DespesaList';

function Despesas(props) {
  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filterDespesasAno = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className='expenses'>
      <DespesaFiltro
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <DespesaList items={filterDespesasAno} />
      {/* {filterDespesasAno.length === 0 && <p>Período sem despesas.</p>} */}
      {/* {filterDespesasAno.length > 0 &&
        filterDespesasAno.map((expense) => (
          <DespesaItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
    </div>
  );
}

export default Despesas;
