import { Typewriter } from "react-simple-typewriter";

import styled from "styled-components";
import Socials from "./socials";

const words = [
    "I'm front-end developer",
    "I'm linux user",
    "I'm mathematician"
];

const Container = styled.div`
    position: relative;
    height: 80vh;
`;

const Jumbotron = styled.div`
    background: none;
    position: absolute;
    text-align: center;
    padding: 2rem 1rem;
    top: 20vh;
    width: 100%;
    margin: 0;

    @media (max-width: 768px) {
        top: 12vh;
    }
`;

const Content = styled.div`
    font-size: 75px;
`;

const Banner: React.FC = () => {
    return (
        <Container>
            <Jumbotron className="jumbotron jumbotron-fluid">
                <Content>
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
                </Content>
            </Jumbotron>
        </Container>
    );
};

export default Banner;
