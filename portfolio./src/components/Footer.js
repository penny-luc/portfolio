import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="'nav-item">
            <a href="/">Home</a>
          </li>
          <li className="'nav-item">
            <a href="#about">About</a>
          </li>
          <li className="'nav-item">
            <a href="#test">Test</a>
          </li>
          <li className="'nav-item">
            <a href="#demo">Demo</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>made by Penny</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
