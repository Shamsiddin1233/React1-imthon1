import "./Korzina.css";
import img34 from "../assets/img34.png";
import img35 from "../assets/img35.png";
import img25 from "../assets/img25.png";
import img36 from "../assets/img36.png";

import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Korzina() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  let [count, setCount] = useState(0);

  function incre() {
    setCount(count + 1);
  }
  function decr() {
    setCount(count - 1);
  }
  function ac() {
    setCount((count = 0));
  }
  return (
    <div className="Korzina-big">
      <div className="Korzina-text">
        <h3>ГЛАВНАЯ</h3>
        <img src={img34} alt="" />
        <p>КОРЗИНА</p>
      </div>
      <div className="Korzina">
        <h1>КОРЗИНА</h1>
        <div className="K-cards">
          <div>
            <div className="Kcard1" data-aos="fade-right">
              <img src={img35} alt="" />
              <div className="Kbox1">
                <h2>MAGNUM 60Ah</h2> <br />
                <button>В НАЛИЧИИ</button>
              </div>
              <div className="Kbox2">
                <h2>2199 руб.</h2>
                <del>2900 руб</del>
              </div>
              <div className="Buttons">
                <button className="Kbutton1" onClick={incre}>
                  +
                </button>
                <button className="Kbutton2">{count}</button>

                <button className="Kbutton1" onClick={decr}>
                  -
                </button>
              </div>
              <h1>2199 руб.</h1>
              <img className="img36" src={img36} alt="" />
            </div>

            <div className="Kcard1" data-aos="fade-left">
              <img src={img35} alt="" />
              <div className="Kbox1">
                <h2>MAGNUM 60Ah</h2> <br />
                <button>В НАЛИЧИИ</button>
              </div>
              <div className="Kbox2">
                <h2>2199 руб.</h2>
                <del>2900 руб</del>
              </div>
              <div className="Buttons">
                <button className="Kbutton1" onClick={incre}>
                  +
                </button>
                <button className="Kbutton2">{count}</button>

                <button className="Kbutton1" onClick={decr}>
                  -
                </button>
              </div>
              <h1>2199 руб.</h1>
              <img className="img36" src={img36} alt="" />
            </div>
            <div className="Kcard3" data-aos="fade-right">
              <button>ОЧИСТИТЬ СПИСОК</button>
              <div>
                <h2>Итого 2 товара</h2>
                <h1>4398 руб.</h1>
              </div>
            </div>
            <div className="Kcard4" data-aos="fade-left">
              <button>ПРОДОЛЖИТЬ ПОКУПКИ</button>
              <div>
                <button className="Kbutton3">РАСПЕЧАТАТЬ ЗАКАЗ</button>
                <button className="Kbutton4">ОФОРМИТЬ ЗАКАЗ</button>
              </div>
            </div>
          </div>
        </div>
        <img className="Kimg25" src={img25} alt="" />
      </div>
    </div>
  );
}
export default Korzina;
