import PortfolioHomepage from "../../assets/images/portfolio-homepage.png";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">Portfolio</span>{" "}
                            Projects
                        </h1>
                    </div>
                </div>
                <div className="row text-center">
                    <ProjectItem
                        imgAlt="Portfolio"
                        imgSrc={PortfolioHomepage}
                        projectDescription="My personal portfolio that was built with Bootstrap, React, styled-components and TypeScript."
                        title="Portfolio"
                        viewCode="https://github.com/madliani/portfolio"
                        viewSite="https://crystalographer.github.io"
                    />
                </div>
            </div>
        </div>
    );
};
