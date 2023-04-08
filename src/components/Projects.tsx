import PortfolioHomepage from "../../assets/images/portfolio-homepage.png";
import { ProjectItem } from "./ProjectItem";

export const Projects = function () {
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
                        imgAlt="Portfolio homepage"
                        imgSrc={PortfolioHomepage}
                        projectDescription="My personal portfolio that was built with Bootstrap, React, styled-components and TypeScript."
                        title="Portfolio"
                        viewCode="https://github.com/crystallographer/portfolio"
                        viewSite="https://crystalographer.github.io"
                    />
                    <ProjectItem
                        imgAlt="Reactify homepage"
                        imgSrc="https://raw.githubusercontent.com/crystallographer/reactify/main/assets/images/reactify-homepage.png"
                        projectDescription="The React Starter Kit."
                        title="Reactify"
                        viewCode="https://github.com/crystallographer/reactify"
                    />
                </div>
            </div>
        </div>
    );
};
