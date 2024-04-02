import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
import { useContext } from "react";
export default function MealIteam({ meal }) {
  const { addItem } = useContext(CartContext);
  return (
    <li className="meal-item">
      <div className="artice">
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <p className="meal-item-price">{meal.price}</p>
        <p className="meal-item-description">{meal.description}</p>
      </div>
      <Button
        className="meal-item-actions"
        onClick={() => {
          addItem(meal);
        }}
      >
        Add to Cart
      </Button>
    </li>
  );
}
