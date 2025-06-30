import "./Logo.css";
import logoch from "../assets/logo-ch.png";
import logoong from "../assets/logo-ong.png";
import img26 from "../assets/img26.png";
import img27 from "../assets/img27.png";
import img28 from "../assets/img28.png";
import img29 from "../assets/img29.png";
import img30 from "../assets/img30.png";

function Logo() {
  return (
    <div className="Logo">
      <img src={logoch} alt="" />
      <img src={img26} alt="" />
      <img src={img27} alt="" />
      <img src={img28} alt="" />
      <img src={img29} alt="" />
      <img src={img30} alt="" />
      <img src={logoong} alt="" />
    </div>
  );
}
export default Logo;
