import './Header.css';

const Header = ({ title, li1, li2 }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <ul>
          <li>
            <a href="https://edinmavric.com" rel="noreferrer" target="_blank">
              {li1}
            </a>
          </li>
          <li>
            <a href="https://edinmavric.com" rel="noreferrer" target="_blank">
              {li2}
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
