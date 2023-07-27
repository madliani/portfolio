import { ExperienceEntry } from "./ExperienceEntry";

export const Experience = () => {
    return (
        <div className="Experience">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title text-center">
                            Experience
                        </h1>
                    </div>
                </div>
                <div className="row text-start">
                    <ExperienceEntry
                        className="mb-3"
                        company={
                            <a
                                href="https://interso.ru"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                inter://so
                            </a>
                        }
                        endDate="Sep 2022"
                        jobDescription={
                            <span>
                                At{" "}
                                <a
                                    href="https://interso.ru"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    inter://so
                                </a>
                                , I worked as the main front-end developer on
                                their startup project. I started the project
                                from scratch and was responsible for the project
                                architecture and technologies used.
                            </span>
                        }
                        jobTitle="Front-end Developer"
                        location="Petrozavodsk, Karelia, Russia"
                        startDate="Feb 2022"
                    />
                    <ExperienceEntry
                        company={
                            <a
                                href="https://axmit.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                axmit
                            </a>
                        }
                        endDate="Oct 2020"
                        jobDescription={
                            <span>
                                In{" "}
                                <a
                                    href="https://axmit.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    axmit
                                </a>{" "}
                                I worked on many outsourcing projects, such as{" "}
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
                                . I was mostly involved in project support. I
                                mean fixing bugs and adding new features.
                            </span>
                        }
                        jobTitle="Front-end Developer"
                        location="Petrozavodsk, Karelia, Russia"
                        startDate="Jun 2019"
                    />
                </div>
            </div>
        </div>
    );
};
