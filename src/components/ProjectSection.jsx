import picture from "../assets/website.png"

const ProjectSection = () => {
    return ( 
        <div className="ProjectSection">
            <div className="Project1">
                <img src={picture} alt="" />
                <p className="Header1">  Personal Website</p>
            </div>
        </div>
     );
}
 
export default ProjectSection;