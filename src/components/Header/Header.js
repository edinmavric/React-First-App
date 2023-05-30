import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <h1>Edin</h1>
        <ul>
          <li>
            <NavLink to="/">Svi Produkti</NavLink>
          </li>
          <li>
            <NavLink to="/mensclothing">Muska Odeca</NavLink>
          </li>
          <li>
            <NavLink to="/womensclothing">Zenska Odeca</NavLink>
          </li>
          <li>
            <NavLink to="/jewelery">Nakit</NavLink>
          </li>
          <li>
            <NavLink to="/electronics">Elektronika</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
