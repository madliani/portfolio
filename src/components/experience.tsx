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
                        jobTitle="Software Engineer II"
                        company="Comcast"
                        startDate="Nov 2022"
                        endDate="Present"
                        location="Philadelphia, PA"
                    />
                    <ExperienceEntry
                        jobTitle="Software Engineer"
                        company="Passport"
                        startDate="Jan 2022"
                        endDate="Oct 2022"
                        location="Charlotte, NC (Remote)"
                        jobDescription1="Delivers product features for the Permits team using React, Node, and AWS cloud computing tools such Lambda and DynamoDB."
                        jobDescription2="Utilizes test driven development to build functional solutions for requested software features."
                        jobDescription3="Works on an agile development team that defines, evaluates,
            prioritizes, and completes user stories in 2-week sprints."
                    />
                    <ExperienceEntry
                        jobTitle="Software Development Manager"
                        company="MacguyverTech"
                        startDate="Jul 2021"
                        endDate="Jan 2022"
                        location="Glenolden, PA (Remote)"
                        jobDescription1="Mapped out daily and weekly tasks for the development team and oversaw multiple client projects throughout their lifecycles."
                        jobDescription2="Developed a more efficient process to deploy applications on to cloud-based servers."
                        jobDescription3={`Established an improved onboarding process to help new developers better assimilate to the company's code base and development practices.`}
                    />
                    <ExperienceEntry
                        jobTitle="Software Developer"
                        company="MacguyverTech"
                        startDate="Jul 2020"
                        endDate="Jul 2021"
                        location="Glenolden, PA (Remote)"
                        jobDescription1="Delivered performance-driven and user-centric websites that met all business requirements."
                        jobDescription2="Implemented enhancements to existing applications that fixed errors and improved applications functionality and speed."
                        jobDescription3="Built and documented RESTful APIs."
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
