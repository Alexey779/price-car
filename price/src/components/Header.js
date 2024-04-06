import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Orders from "./Orders";

const showOders = (props) => {
  let summa = 0;
  props.order.forEach(el => summa+= Number.parseFloat(el.price))
  return (
    <div>
      {props.order.map((el) => (
        <Orders onDelite={props.onDelite} key={el.id} item={el} />
      ))}
      <p className="summa"> Сумма: {new Intl.NumberFormat().format(summa)} руб</p>
    </div>
  );
};

const showNothing = () =>{
  return (
    <div className="empty">
<h2>Товаров нет</h2>
    </div>
  )
}
export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Retro Car</span>

        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>

        <FaShoppingCart
          onClick={() => setCardOpen((cardOpen = !cardOpen))}
          className={`shop-card-button ${cardOpen && "active"}`}
        />

        {cardOpen && (
          <div className="shop-card">
            {props.order.length > 0 ? showOders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className="presentation"></div>
    </header>
  );
}
