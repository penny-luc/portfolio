import "./Footer.css";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <span className="line"></span>

        <div className="social">
          <a
            href="https://github.com/penny-luc"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} style={{ color: "white", margin: "1rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/penny-luc"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} style={{ color: "white", margin: "1rem" }} />
          </a>

          <FaMailBulk size={30} style={{ color: "white", margin: "1rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
