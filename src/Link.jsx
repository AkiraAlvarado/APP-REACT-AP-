// link.js
import "./link.css";

const Link = ({ id, name, priceUsd, }) => {
  // Convertir priceUsd y changePercent24Hr a números
  const price = parseFloat(priceUsd);
  return (
    <div className="tabla">
      <div>{id}</div>
      <div>{name}</div>
      <div>${price.toFixed(2)}</div>
    </div>
  );
};

export default Link;