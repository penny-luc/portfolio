import "./Projects.css"
import user1 from "./images/user1.jpeg"
import user2 from "./images/user2.jpeg"
import user3 from "./images/user3.jpeg"

const Projects = () => {
    return (
        <div className="projects" id='projects'>
        <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
            <div className="card">
                <img src={user1} alt='user1'/>
                <p>Review</p>
                <p><span>name</span></p>
                <p>TITLE</p>
            </div>
            <div className="card">
                <img src={user2} alt='user2'/>
                <p>review</p>
                <p><span>name</span></p>
                <p>title</p>
            </div>
            <div className="card">
                <img src={user3} alt='user3'/>
                <p>review</p>
                <p><span>name</span></p>
                <p>title</p>
            </div>
        </div>


        </div>

        </div>
      );
}
 
export default Projects;