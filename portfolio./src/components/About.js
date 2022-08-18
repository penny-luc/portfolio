import "./About.css";
import john from "./images/john-doe.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>Text goes here</p>
          <p>Text goes here</p>
          <button className="button">Button</button>
        </div>
      </div>
    </div>
  );
};

export default About;
