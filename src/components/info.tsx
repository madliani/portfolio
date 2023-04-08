import styled from "styled-components";

const PROFILE_IMAGE = process.env.PROFILE_IMAGE;

const AboutText = styled.div`
    line-height: 2rem;
`;

const ResumeButton = styled.button`
    background-color: var(--dark);
    color: var(--light) !important;
    padding: 18px 40px;
    border: 2px solid var(--greenAlt);
    border-radius: 1.25rem;
    margin: 2rem 0 1rem 0;

    &:hover {
        background-color: var(--dark);
        color: var(--greenAlt) !important;
    }
`;

const Image = styled.img`
    height: 350px;
    width: 300px;
    border-radius: 1.25rem;
`;

const Info: React.FC = () => {
    return (
        <div className="Info">
            <div className="container">
                {/* Row 1 */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title">
                            <span className="main-color">About</span> Me
                        </h1>
                    </div>
                </div>
                {/* Row 2 */}
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
                                src={`data:image/png;base64,${PROFILE_IMAGE}`}
                                alt="Profile"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Info;
