import EducationEntry from "./educationEntry";

const Education: React.FC = () => {
    return (
        <div className="Education">
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title text-center">Education</h1>
                    </div>
                </div>
                <div className="row text-start">
                    <EducationEntry
                        schoolName={
                            <a
                                href="https://petrsu.ru/en"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Petrozavodsk State University (PetrSU)
                            </a>
                        }
                        degree="Master's degree, Mathematics"
                        startDate="2018"
                        endDate="2020"
                        className="mb-3"
                    />
                    <EducationEntry
                        schoolName={
                            <a
                                href="https://petrsu.ru/en"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Petrozavodsk State University (PetrSU)
                            </a>
                        }
                        degree="Bachelor's degree, Electrical and Electronics Engineering"
                        startDate="2014"
                        endDate="2018"
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
