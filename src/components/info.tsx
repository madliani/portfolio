const PROFILE_IMAGE = process.env.PROFILE_IMAGE;

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
                        <div className="about-text">
                            <p>
                                My journey into front-end development began at a
                                hackathon organized by{" "}
                                <a
                                    href="https://axmit.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    axmit
                                </a>{" "}
                                I worked on many outsourced projects such as{" "}
                                <a
                                    href="https://getzelos.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Zelos
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://activatica.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Activatica
                                </a>
                                .
                            </p>
                            <p>
                                After that, I got a job at{" "}
                                <a
                                    href="https://interso.ru"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    inter://so
                                </a>{" "}
                                as the main front-end developer in their startup
                                project.
                            </p>
                        </div>
                        <a
                            href={
                                "https://raw.githubusercontent.com/crystallographer/portfolio/main/src/assets/docs/CV.pdf"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="resume-btn">
                                Download Resume
                            </button>
                        </a>
                    </div>
                    {PROFILE_IMAGE && (
                        <div className="col-md-6 mb-3 d-flex justify-content-center">
                            <img
                                src={`data:image/png;base64,${PROFILE_IMAGE}`}
                                className="profile-image"
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
