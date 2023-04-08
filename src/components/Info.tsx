import styled from "styled-components";

const PROFILE_IMAGE = process.env.PROFILE_IMAGE;

const AboutText = styled.div`
    line-height: 2rem;
`;

const ResumeButton = styled.button`
    margin: 2rem 0 1rem;
    padding: 18px 40px;
    color: var(--light) !important;
    background-color: var(--dark);
    border: 2px solid var(--green-alt);
    border-radius: 1.25rem;

    &:hover {
        color: var(--green-alt) !important;
        background-color: var(--dark);
    }
`;

const Image = styled.img`
    width: 300px;
    height: 350px;
    border-radius: 1.25rem;
`;

export const Info = function () {
    return (
        <div className="Info">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">About</span> Me
                        </h1>
                    </div>
                </div>
                <div className="row text-start">
                    <div className="col-md-6 about-section">
                        <AboutText>
                            <p>
                                My journey into front-end development began at a
                                hackathon organized by{" "}
                                <a
                                    href="https://axmit.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    axmit
                                </a>
                                . I participated in it together with a team of
                                other guys. We were in the top three finalists
                                and were invited to work.
                            </p>
                            <p>
                                At{" "}
                                <a
                                    href="https://axmit.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    axmit
                                </a>{" "}
                                I worked on many outsourced projects such as{" "}
                                <a
                                    href="https://getzelos.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Zelos
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://activatica.org"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Activatica
                                </a>
                                .
                            </p>
                            <p>
                                After that, I got a job at{" "}
                                <a
                                    href="https://interso.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    inter://so
                                </a>{" "}
                                as the main front-end developer in their startup
                                project.
                            </p>
                        </AboutText>
                        <a
                            href={
                                "https://raw.githubusercontent.com/crystallographer/portfolio/main/assets/docs/CV.pdf"
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <ResumeButton>Download Resume</ResumeButton>
                        </a>
                    </div>
                    {PROFILE_IMAGE && (
                        <div className="col-md-6 mb-3 d-flex justify-content-center">
                            <Image
                                alt="Profile"
                                src={`data:image/png;base64,${PROFILE_IMAGE}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
