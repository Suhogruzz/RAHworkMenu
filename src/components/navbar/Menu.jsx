import { NavLink } from 'react-router-dom';

const activeClassName = 'menu__item-active';

export default function Menu(prop) {
  return (
    <nav className="menu">
      <NavLink className={({ isActive }) =>
                  [
                    isActive ? `${activeClassName} menu__item`: "menu__item",
                  ].join(" ")
                }
                to={"/"}>Главная</NavLink>

      <NavLink className={({ isActive }) =>
                  [
                    isActive ? `${activeClassName} menu__item` : "menu__item",
                  ].join(" ")
                } 
                to={"/drift"}>Дрифт-такси</NavLink>

      <NavLink className={({ isActive }) =>
                  [
                    isActive ? `${activeClassName} menu__item` : "menu__item",
                  ].join(" ")
                } 
                to={"/timeattack"}>Time Attack</NavLink>
                
      <NavLink className={({ isActive }) =>
                  [
                    isActive ? `${activeClassName} menu__item` : "menu__item",
                  ].join(" ")
                } 
                to={"/forza"}>Forza Karting</NavLink>
    </nav>
  )
};