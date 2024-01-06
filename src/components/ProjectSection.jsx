import picture from "../assets/website.png"
import picture1 from "../assets/new_littleLemon.png"
import {Link} from "react-router-dom"



const ProjectSection = () => {
    return (
        <section class="projects">
            <h2 className="projectsTitle">Recent Projects</h2>
            <div className="projectContainer">
                <div className="projectCard">
                    <div className="projectinfo">
                        <h3 className="projectTitle">Portfolio</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia unde molestiae optio! Consequatur hic inventore quae incidunt quaerat, veritatis dolorem atque aut adipisci, at iusto quia consectetur possimus repudiandae!</p>
                        <div className="projectButtons">
                            <a href="https://www.google.com" >
                                <div className="projectView">View site</div>
                            </a>
                            <a href="https://github.com/LeonardHolter/Personal-Website">
                                <div  className="projectCode">Check it out on Github</div>
                            </a>
                        </div>
                    </div>
                    <div className="projectImageSection">
                    <img src={picture} alt="" className="projectImage" />
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectImageSection">
                    <img src={picture1} alt="" className="projectImage" />
                    </div>
                    <div className="projectinfo">
                        <h3 className="projectTitle">Little Lemon Store</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia unde molestiae optio! Consequatur hic inventore quae incidunt quaerat, veritatis dolorem atque aut adipisci, at iusto quia consectetur possimus repudiandae!</p>
                        <div className="projectButtons">
                            <a href="https://www.google.com" >
                                <div className="projectView">View site</div>
                            </a>
                            <a href="https://github.com/LeonardHolter/Personal-Website">
                                <div  className="projectCode">Check it out on Github</div>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
          </section >
     );
}
 
export default ProjectSection;