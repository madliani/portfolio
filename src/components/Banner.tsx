import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";
import { Socials } from "./Socials";

const sentences = [
    "I'm front-end developer",
    "I'm linux user",
    "I'm mathematician"
];

const Container = styled.div`
    position: relative;
    height: 80vh;
`;

const Jumbotron = styled.div`
    position: absolute;
    top: 20vh;

    width: 100%;
    margin: 0;
    padding: 2rem 1rem;

    text-align: center;

    background: none;

    @media (max-width: 768px) {
        top: 12vh;
    }
`;

const Content = styled.div`
    font-size: 75px;
`;

export const Banner = () => {
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
                            words={sentences}
                        />
                    </h6>
                    <Socials />
                </Content>
            </Jumbotron>
        </Container>
    );
};
