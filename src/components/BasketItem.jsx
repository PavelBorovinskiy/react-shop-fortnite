import React from "react";

const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item">
      {name}{" "}
      <i
        className="material-icons icon-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{" "}
      x{quantity}{" "}
      <i
        className="material-icons icon-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
     
    </li>
  );
};

export default BasketItem;
