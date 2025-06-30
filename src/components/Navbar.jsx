import "./Navbar.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={img1} alt="" />
      <ul>
        <li>
          <a href="">КОМПАНИЯ</a>
        </li>
        <li>
          <a href="">КАТАЛОГ</a>
        </li>
        <li>
          <a href="">УСЛУГИ</a>
        </li>
        <li>
          <a href="">ИНФОРМАЦИЯ</a>
        </li>
        <li>
          <a href="">КОНТАКТЫ</a>
        </li>
      </ul>
      <button>ЗАКАЗАТЬ ЗВОНОК</button>
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
  );
}

export default Navbar;
