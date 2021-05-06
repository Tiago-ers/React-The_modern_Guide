import './DespesaItem.css'

function DespesaItem(){
  return (
    <div className="expense-item">
      <div>06 de Maio de 2021</div>
      <div className="expense-item__description">
        <h2>Aluguel de carro</h2>
        <div className="expense-item__price">R$179,00</div>
      </div>
    </div>
  )
}

export default DespesaItem
