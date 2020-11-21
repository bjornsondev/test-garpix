import { NavLink } from 'react-router-dom';
import s from './SiteNavLinks.module.scss';



function SiteNavLinks(){
  return [
    { text: "Купоны и сертификаты",     route: "discount" },
    { text: "Впечатления",              route: "impression" },
    { text: "Авиабилеты",               route: "air-tickets" },
    { text: "Ж/Д Билеты",               route: "train-tickets" },
    { text: "Отели",                    route: "hotels" },
    { text: "Каршеринг",                route: "carsharing" },
    { text: "Театры",                   route: "theaters" },
    { text: "Страхование",              route: "insurance" },
    { text: "Как подключиться",         route: "how-to-enter" },
    { text: "Партнеры",                 route: "partners" },
    { text: "offer",                    route: "offer" }
  ].map( (e, i) => 
    <li key={i}>
      <NavLink 
        to={e.route} 
        className={s.link}
        activeClassName={s.linkActive}
      >
        {e.text}
      </NavLink>
    </li>
  );
};

export default SiteNavLinks;