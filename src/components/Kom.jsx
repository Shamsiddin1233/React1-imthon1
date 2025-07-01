import "./Kom.css";
import img21 from "../assets/img21.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Kom() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="Bg2">
      <div className="Kom">
        <div className="Kom-card">
          <div className="Kom-h2">
            <h2>о компании</h2>
          </div>
        </div>
        <div className="Kom-box1">
          <img src={img21} alt="" data-aos="fade-right" />
          <div className="Com-text" data-aos="fade-left">
            <p>
              Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам
              в
              <br />
              «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой
              аккумулятор <br /> именно для вашего авто! С 1997 года сеть
              магазинов «PRO Auto» занимается <br /> продажей автомобильных
              аккумуляторов, масел, расходных материалов, химией <br /> и
              аксессуаров.
            </p>
            <button className="Kom-but">УЗНАТЬ БОЛЬШЕ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Kom;
