import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding/removing item from cart
  const handleCartToggle = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle} className={isInCart ? "remove" : "add"}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;