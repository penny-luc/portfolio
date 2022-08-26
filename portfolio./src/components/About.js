import "./About.css";
import penny from "./images/pl-img.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={penny} alt="penny" />
        {/* <h2>About</h2>
          <span className="line"></span>
          <p>Text goes here</p>
          <p>Text goes here</p>
          <button className="button">Button</button> */}
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>Text goes here</p>
          <p>Text goes here</p>
          <button className="button">Button</button>

          {/* <img src={penny} alt="penny" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
