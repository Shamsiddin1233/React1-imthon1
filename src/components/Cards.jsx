import "./Cards.css";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="Cards">
      <div className="card1 card " data-aos="fade-right">
        <img src={img6} alt="" />
        <h3>
          Наличный и безналичный <br /> расчет
        </h3>
      </div>
      <div className="card2 car d" data-aos="fade-right">
        <img src={img7} alt="" />
        <h3>
          Техническая помощь и <br /> консультация
        </h3>
      </div>
      <div className="card3 card " data-aos="fade-left">
        <img src={img8} alt="" />
        <h3>
          Только качественная и <br /> проверенная продукция <br />➡
        </h3>
      </div>
      <div className="card4 card " data-aos="fade-left">
        <img src={img9} alt="" />
        <h3>
          Мы всегда на связи <br /> с 9:00 до 18:00! <br />➡
        </h3>
      </div>
    </div>
  );
}
export default Cards;
