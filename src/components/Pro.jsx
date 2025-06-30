import "./Pro.css";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Pro() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="Pro">
      <div className="Pro-h1">
        <h1>
          Автотовары: аксессуары, <br /> расходники и многое другое
        </h1>
      </div>
      <h2>
        PROAuto - это специализированный интернет магазин востребованных <br />
        товаров для автомобилей.
      </h2>
      <div className="big-card">
        <div className="card5" data-aos="fade-up">
          <div className="card5-text">
            <h2>АККУМУЛЯТОРЫ</h2>
            <button>ЗАКАЗАТЬ ОНЛАЙН</button>
          </div>
          <div className="filter"></div>
        </div>
        <div data-aos="fade-up">
          <img src={img11} alt="" />
        </div>
        <div data-aos="fade-up">
          <img src={img12} alt="" />
        </div>
        <div data-aos="fade-up">
          <img src={img13} alt="" />
        </div>
        <div data-aos="fade-up">
          <img src={img14} alt="" />
        </div>
        <div data-aos="fade-up">
          <img src={img15} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Pro;
