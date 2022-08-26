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
          <p>For the past 6 years I was a Building Services Mechanical Engineer. I worked on many large scale projects ranging from domestic to commerial sites, collorbating with architects and engineers.</p>
          <p>I was curious to learn about the technology that we often take for granted. I left my comfort zone and took a gamble with a 16 week coding bootcamp at School of Code.</p>
          <p>Whilst I have learnt a lot on the bootcamp I feel like I have barely scratched the surface! As tech continues to grow expontionally I too want to grow my knowledge and I'm excited to see where this journey takes me!</p>
          <button className="button">My CV</button>

          {/* <img src={penny} alt="penny" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
