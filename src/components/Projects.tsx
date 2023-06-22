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
                        imgAlt="Portfolio"
                        imgSrc={PortfolioHomepage}
                        projectDescription="My personal portfolio that was built with Bootstrap, React, styled-components and TypeScript."
                        title="Portfolio"
                        viewCode="https://github.com/crystallographer/portfolio"
                        viewSite="https://crystalographer.github.io"
                    />
                    <ProjectItem
                        imgAlt="Reactify"
                        imgSrc="https://raw.githubusercontent.com/crystallographer/reactify/main/assets/images/reactify-homepage.png"
                        projectDescription="The React Starter Kit."
                        title="Reactify"
                        viewCode="https://github.com/crystallographer/reactify"
                    />
                    <ProjectItem
                        imgAlt="Market"
                        imgSrc="https://raw.githubusercontent.com/crystallographer/market/main/assets/images/market-homepage.png"
                        projectDescription="Web market."
                        title="Market"
                        viewCode="https://github.com/crystallographer/market"
                    />
                    <ProjectItem
                        imgAlt="Emojer"
                        imgHeight="192px"
                        imgSrc="https://raw.githubusercontent.com/crystallographer/emojer/main/assets/icons/emoji.png"
                        imgWidth="192px"
                        projectDescription="The Emoji Compiler."
                        title="Emojer"
                        viewCode="https://github.com/crystallographer/emojer"
                    />
                    <ProjectItem
                        imgAlt="Caesar's Cipher"
                        imgHeight="192px"
                        imgSrc="https://raw.githubusercontent.com/crystallographer/caesar-cipher/main/assets/icons/key.png"
                        imgWidth="192px"
                        projectDescription="The Caesar's Cipher Encoder and Decoder."
                        title="Caesar's Cipher"
                        viewCode="https://github.com/crystallographer/caesar-cipher"
                    />
                </div>
            </div>
        </div>
    );
};
