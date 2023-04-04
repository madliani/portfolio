import { Typewriter } from "react-simple-typewriter";

import Socials from "./socials";

const words = [
    "I'm front-end developer",
    "I'm linux user",
    "I'm mathematician"
];

const Banner: React.FC = () => {
    return (
        <div className="Banner">
            <div className="jumbotron jumbotron-fluid">
                <div className="banner-content">
                    <h1>
                        <span className="main-color">Rakhman</span> A.
                    </h1>
                    <h6>
                        <Typewriter
                            cursor
                            cursorBlinking
                            loop={false}
                            words={words}
                        />
                    </h6>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Banner;
