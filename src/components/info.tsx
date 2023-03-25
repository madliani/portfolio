import Headshot from "../assets/images/profile-headshot.jpg";

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
                        <p className="about-text">
                            A software engineer with experience building modern
                            web applications and custom software solutions for
                            clients. Proficient in deploying applications to
                            cloud-based servers and well-versed in the project
                            management lifecycle. Looking to contribute
                            long-term organizational value through my knowledge
                            of various programming technologies. Passionate
                            about working in a collaborative environment to
                            create meaningful applications and solve programming
                            challenges that benefit the end user.
                        </p>
                        <a
                            href={"../assets/docs/CV.pdf"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="resume-btn">
                                Download Resume
                            </button>
                        </a>
                    </div>
                    <div className="col-md-6 mb-3">
                        <img
                            src={Headshot}
                            className="profile-picture"
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
