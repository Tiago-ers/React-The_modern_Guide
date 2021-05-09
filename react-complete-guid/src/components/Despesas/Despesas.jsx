import DespesaItem from "./DespesaItem";
import './Despesas.css'

function Despesas(props) {
  return (
    <div className="expenses">
      <DespesaItem
        date={props.items[0].date}
        title={props.items[0].title}
        price={props.items[0].amount}
      />
      <DespesaItem
        date={props.items[1].date}
        title={props.items[1].title}
        price={props.items[1].amount}
      />
      <DespesaItem
        date={props.items[2].date}
        title={props.items[2].title}
        price={props.items[2].amount}
      />
      <DespesaItem
        date={props.items[3].date}
        title={props.items[3].title}
        price={props.items[3].amount}
      />
  </div>
  );
}

export default Despesas;
