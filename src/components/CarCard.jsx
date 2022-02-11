import "./carCard.css";

function CarCard(props) {
  return <li className="card">{props.children}</li>;
}

export default CarCard;
