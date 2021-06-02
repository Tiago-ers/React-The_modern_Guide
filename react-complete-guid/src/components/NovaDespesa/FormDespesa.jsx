import React, { useState } from 'react';
import './FormDespesa.css';

const FormDespesa = () => {
  //   const [title, setTitle] = useState('');
  //   const [amount, setAmount] = useState('');
  //   const [date, setDate] = useState('');

  const [userInputs, setUserInputs] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    // setUserInputs({
    //   ...userInputs, //SPREAD operator, garante que o objeto não seja sobescrito
    //   title: event.target.value,
    // });

    //Essa é a forma mais segura de atualizar um estado.
    //Dessa forma garantimos que o react sempre tenha o estado atual a ser atualizado
    setUserInputs((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   amount: event.target.value,
    // });
    setUserInputs((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    // setUserInputs({
    //   ...userInputs,
    //   date: event.target.value,
    // });
    setUserInputs((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const dadosDespesa = {
      title: userInputs.title,
      amount: userInputs.amount,
      date: userInputs.date,
    };

    console.log('Vamos ver', dadosDespesa);
    
    //Limpa inputs
    setUserInputs({
      ...userInputs,
      date: '',
      title: '',
      amount: '',
    });
  };

  return (
    <form action='' onSubmit={submitForm}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            value={userInputs.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            value={userInputs.amount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            value={userInputs.date}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Despesa</button>
      </div>
    </form>
  );
};

export default FormDespesa;
