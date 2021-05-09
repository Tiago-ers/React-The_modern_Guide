import DespesaData from "./DespesaData";
import "./DespesaItem.css";

function DespesaItem(props) {
  return (

      <div className="expense-item">
        <DespesaData date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </div>


  );
}

export default DespesaItem;
