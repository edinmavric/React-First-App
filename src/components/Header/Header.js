import './Header.css';

const Header = props => {
  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <ul>
          <li>
            <a
              href="https://edinmavric.github.io/Portfolio/"
              rel="noreferrer"
              target="_blank"
            >
              {props.li1}
            </a>
          </li>
          <li>
            <a
              href="https://edinmavric.github.io/Portfolio/"
              rel="noreferrer"
              target="_blank"
            >
              {props.li2}
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
