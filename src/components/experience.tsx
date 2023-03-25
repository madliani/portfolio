import ExperienceEntry from "./experienceEntry";

const Experience: React.FC = () => {
    return (
        <div className="Experience">
            <div className="container mt-5">
                {/* Row 1 */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title text-center">
                            Experience
                        </h1>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row text-start">
                    <ExperienceEntry
                        jobTitle="Front-end Developer"
                        company={
                            <a
                                href="https://interso.ru"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                inter://so
                            </a>
                        }
                        startDate="Feb 2022"
                        endDate="Sep 2022"
                        location="Petrozavodsk, Karelia, Russia"
                        jobDescription={
                            <span>
                                At{" "}
                                <a
                                    href="https://interso.ru"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    inter://so
                                </a>
                                , I worked as the main front-end developer on
                                their startup project. I started the project
                                from scratch and was responsible for the project
                                architecture and technologies used.
                            </span>
                        }
                        className="mb-3"
                    />
                    <ExperienceEntry
                        jobTitle="Front-end Developer"
                        company={
                            <a
                                href="https://axmit.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                axmit
                            </a>
                        }
                        startDate="Jun 2019"
                        endDate="Oct 2020"
                        location="Petrozavodsk, Karelia, Russia"
                        jobDescription={
                            <span>
                                In{" "}
                                <a
                                    href="https://axmit.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    axmit
                                </a>{" "}
                                I worked on many outsourcing projects, such as{" "}
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
                                . I was mostly involved in project support. I
                                mean fixing bugs and adding new features.
                            </span>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
