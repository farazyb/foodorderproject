import image from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserprogressContext.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  
  function handleShowCart() {
    console.log("show cart")
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={image}></img>
        <h1>REACT FOOD</h1>
      </div>
      <Button
        textOnly
        onClick={handleShowCart}
      >
        Cart ({totalCartItems})
      </Button>
    </header>
  );
}
