import "./Usluga.css";
import ram1 from "../assets/ram1.png";
import img17 from "../assets/img17.png";
import ch from "../assets/ch.png";
import ong from "../assets/ong.png";
import ak from "../assets/ak.png";
import ram2 from "../assets/ram2.png";

import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";

import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";
import uch1 from "../assets/uch1.png";
import uch2 from "../assets/uch2.png";
import uch3 from "../assets/uch3.png";
import uch4 from "../assets/uch4.png";
import uch5 from "../assets/uch5.png";

function Usluga() {
  return (
    <div className="Bg">
      <div className="Usluga">
        <div className="Usluga-h1">
          <h1>УСЛУГИ</h1>
        </div>
        <p>
          Менеджеры компании с радостью ответят на ваши вопросы и помогут с{" "}
          <br />
          выбором продукции.
        </p>
        <div className="obyom">
          <div className="Bigs-card">
            <div className="card10 ">
              <div>
                <img className="ram1" src={ram1} alt="" />
                <img className="img17" src={img17} alt="" />
              </div>
              <div className="usluga-text">
                <h3>
                  БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ <br /> СПЕЦИАЛИСТА
                </h3>
                <p>
                  Поможем с выбором аккумулятора, <br /> моторного масла и
                  аксессуаров для <br />
                  автомобиля под ваши требования.
                </p>
              </div>
            </div>
            <div className="card7 card20">
              <img className="ram1" src={ram2} alt="" />
              <img className="ch" src={ch} alt="" />
              <img className="ong" src={ong} alt="" />
              <img className="ak" src={ak} alt="" />
              <div className="usluga-text">
                <h3>
                  ОБМЕН СТАРОГО АККУМУЛЯТОРА <br /> НА НОВЫЙ
                </h3>
                <p>
                  Принесите нам старую АКБ для легкового <br /> автомобиля, и мы
                  предоставим Вам скидку <br /> на новый аккумулятор!
                </p>
              </div>
            </div>
            <div className="card7 card20">
              <img className="ram1" src={ram2} alt="" />
              <img className="k1" src={k1} alt="" />
              <img className="k2" src={k2} alt="" />
              <img className="s1 s" src={s1} alt="" />
              <img className="s2 s" src={s2} alt="" />
              <img className="s3 s" src={s1} alt="" />
              <img className="s4 s" src={s3} alt="" />
              <img className="s5 s" src={s4} alt="" />
              <div className="usluga-text">
                <h3>
                  БЕСПЛАТНАЯ ДИАГНОСТИКА <br /> АККУМУЛЯТОРА
                </h3>
                <p>
                  Приезжайте к нам и мы бесплатно <br /> проведём диагностику
                  вашего <br /> аккумулятора!
                </p>
              </div>
            </div>
          </div>
          <div className="imgs">
            <img className="img18" src={img18} alt="" />
            <img className="img19" src={img19} alt="" />

            <img className="uch1 uch" src={uch1} alt="" />
            <img className="uch2 uch" src={uch2} alt="" />
            <img className="uch3 uch" src={uch3} alt="" />
            <img className="uch4 uch" src={uch4} alt="" />
            <img className="uch5 uch" src={uch5} alt="" />
          </div>
        </div>
        <div className="button">
          <button>ЗАДАТЬ ВОПРОС</button>
        </div>
      </div>
    </div>
  );
}
export default Usluga;
