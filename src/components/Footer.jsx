import "./Footer.css";
import img1 from "../assets/img1.png";
import img32 from "../assets/img32.png";
import img33 from "../assets/img33.png";

function Footer() {
  return (
    <div className="Bg3">
      <div className="Footer">
        <div className="Footer-box">
          <img src={img1} alt="" />
          <p>
            © 2019 PRO Auto. <br /> Все права защищены.
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>КОМПАНИЯ</th>
              <th>КАТАЛОГ</th>
              <th>УСЛУГИ</th>
              <th>ИНФОРМАЦИЯ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>О КОМПАНИИ</td>
              <td>АККУМУЛЯТОРЫ</td>
              <td>
                ДИАГНОСТИКА <br /> АККУМУЛЯТОРА
              </td>
              <td>АКЦИИ</td>
            </tr>
            <tr>
              <td>ЛИЦЕНЗИИ</td>
              <td>АВТОМАСЛА</td>
              <td></td>
              <td>НОВОСТИ</td>
            </tr>
            <tr>
              <td>ПАРТНЕРЫ</td>
              <td>АКСЕССУАРЫ</td>
              <td>
                ПРИЕМ <br /> АККУМУЛЯТОРОВ
              </td>
              <td>СТАТЬИ</td>
            </tr>
            <tr>
              <td>ОТЗЫВЫ КЛИЕНТОВ</td>
              <td>АВТОХИМИЯ</td>
              <td></td>
              <td>ВОПРОС - ОТВЕТ</td>
            </tr>
            <tr>
              <td>РЕКВИЗИТЫ</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>ВАКАНСИИ</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="Footer-box2">
          <h3>
            <img src={img32} alt="" />
            +7 (342) 279-36-13
          </h3>
          <p>
            <img src={img33} alt="" />
            proauto59@yandex.ru
          </p>
          <button>ЗАКАЗАТЬ ЗВОНОК</button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
