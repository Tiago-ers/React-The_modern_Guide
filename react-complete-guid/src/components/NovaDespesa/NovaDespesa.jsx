import React from 'react';
import FormDespesa from './FormDespesa';
import './NovaDespesa.css';

const NovaDespesa = (props) => {
  const saveDataDespesa = (dataDespesa) => {
    const despesas = {
      ...dataDespesa,
      id: Math.random().toString(),
    };
    //console.log('Dados ', despesas);
    props.addDespesas(despesas);
  };

  return (
    <div className='new-expense'>
      <FormDespesa onSaveDataDespesa={saveDataDespesa} />
    </div>
  );
};

export default NovaDespesa;
