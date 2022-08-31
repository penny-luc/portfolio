import "./Projects.css";


const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <span className="line"></span>
      <div className="card-container">
        <div className="card">
          <h3>Green Basket App</h3>
          <span className="bar"></span>
          <p className="btc">Full stack application</p>
          <p>Making foodbanks accessible</p>
          <p>4 Week Team project</p>
          <p>CRUD operations</p>
          <p>React, JS, MUI, Postgres, Express, Heroku, Jest</p>
          <a href="https://greenbskt.netlify.app/" target="_blank" rel="noreferrer">
            <button className="button" style={{margin: "1.5rem"}}>More Info</button>
          </a>
         
        </div>
        <div className="card">
          <h3>Collabor8</h3>
          <span className="bar"></span>
          <p className="btc">Full stack application</p>
          <p>Collaboration for side projects</p>
          <p>1 Week Team project</p>
          <p>CRUD Operations</p>
          <p>React, JS, CSS, Postgres, Express, Postman, Jest</p>
          <a href="https://github.com/SchoolOfCode/w9_backend-project-team-collyn" target="_blank" rel="noreferrer">
            <button className="button" style={{margin: "1.5rem"}}>More Info</button>
          </a>
       
        </div>
        <div className="card">
          <h3>Weather App</h3>
          <span className="bar"></span>
          <p className="btc">Front end application</p>
          <p>Weather based on location</p>
          <p>Pair programming</p>
          <p>API requests</p>
          <p>React, TypeScript, CSS, Chakra, Postman</p>
          <a href="https://github.com/SchoolOfCode/w12d5_typescript-react-hackathon-conor-penny" target="_blank" rel="noreferrer">
            <button className="button" style={{margin: "1.5rem"}}>More Info</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
