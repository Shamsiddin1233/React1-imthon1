import "./Nov.css";
import img1 from "../assets/img1.png";
import img23 from "../assets/img23.png";
import img24 from "../assets/img24.png";
import img25 from "../assets/img25.png";
import s5 from "../assets/s5.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Nov() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="Nov">
      <div className="Nov-card">
        <div className="Nov-h2">
          <h2>новости</h2>
        </div>
      </div>
      <div className="Nov-cards">
        <div className="N-card1" data-aos="fade-left">
          <div className="Ncard1-img">
            <img src={img1} alt="" />
          </div>
          <div className="Ncard1-text">
            <p>12 февраля 2020 года</p>
            <h3>У НАС НОВЫЙ ЛОГОТИПИНОВЫЙ САЙТ!</h3>
            <img src={s5} alt="" />
          </div>
        </div>
        <div className="N-card2 N-card" data-aos="fade-left">
          <img src={img23} alt="" />
          <div className="Ncard2-text">
            <p>10 февраля 2020 года</p>
            <h3>
              ОБНОВЛЕНИЕ ЛИНЕЙКИ <br /> АККУМУЛЯТОРОВ VARTRA{" "}
            </h3>
            <img src={s5} alt="" />
          </div>
        </div>
        <div className="N-card3 N-card" data-aos="fade-left">
          <img src={img24} alt="" />
          <div className="Ncard3-text">
            <p>10 февраля 2020 года</p>
            <h3>
              БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ <br /> СПЕЦИАЛИСТА ТЕПЕРЬ В <br /> РЕЖИМЕ
              ONLINE
            </h3>
            <img className="s6" src={s5} alt="" />
          </div>
        </div>
      </div>
      <div className="Button">
        <button>ЧИТАТЬ ВСЕ НОВОСТИ</button>
      </div>
      <img className="img25" src={img25} alt="" />
    </div>
  );
}
export default Nov;
