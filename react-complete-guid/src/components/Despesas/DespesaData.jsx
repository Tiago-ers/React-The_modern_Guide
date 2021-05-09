import './DespesaData.css'

function DespesaData(props){
  const mes = props.date.toLocaleString('pt-BR', {month: 'long'})
  const dia = props.date.toLocaleString('pt-BR', {day: '2-digit'})
  const ano = props.date.getFullYear()

  return(
    <div className="expense-date">
      <div className="expense-date_day">{dia}</div>
      <div className="expense-date_month">{mes}</div>
      <div className="expense-date_year">{ano}</div>
    </div>
  )
}

export default DespesaData;
