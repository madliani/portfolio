import { EducationEntry } from "./EducationEntry";

export const Education = function () {
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
                        className="mb-3"
                        degree="Master's degree, Mathematics"
                        endDate="2020"
                        schoolName={
                            <a
                                href="https://petrsu.ru/en"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Petrozavodsk State University (PetrSU)
                            </a>
                        }
                        startDate="2018"
                    />
                    <EducationEntry
                        degree="Bachelor's degree, Electrical and Electronics Engineering"
                        endDate="2018"
                        schoolName={
                            <a
                                href="https://petrsu.ru/en"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Petrozavodsk State University (PetrSU)
                            </a>
                        }
                        startDate="2014"
                    />
                </div>
            </div>
        </div>
    );
};
