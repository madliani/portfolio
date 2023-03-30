import PortfolioHomepage from "../../assets/images/portfolio-homepage.png";
import ProjectItem from "./projectItem";

const Projects: React.FC = () => {
    return (
        <div className="Projects">
            <div className="container">
                {/* Row 1 */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">Portfolio</span>{" "}
                            Projects
                        </h1>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row text-center">
                    {/* Project 1 */}
                    <ProjectItem
                        imgSrc={PortfolioHomepage}
                        imgAlt={"Portfolio"}
                        projectDescription={`My personal portfolio that was built with React.`}
                        title={"Portfolio"}
                        viewCode={
                            "https://github.com/crystalographer/portfolio"
                        }
                        viewSite={"https://crystalographer.github.io"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
