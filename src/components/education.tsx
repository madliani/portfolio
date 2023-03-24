import EducationEntry from "./educationEntry";

const Education: React.FC = () => {
    return (
        <div className="Education">
            <div className="container my-5">
                {/* Row 1 */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="section-title text-center">Education</h1>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="row text-start">
                    <EducationEntry
                        schoolName="University of Pennsylvania"
                        degree="Professional Certificate - Full-Stack Development"
                        startDate="2020"
                        endDate="2021"
                    />
                    <EducationEntry
                        schoolName="Rutgers, The State University of New Jersey"
                        degree={`Bachelor's of Science - Biology`}
                        startDate="2014"
                        endDate="2018"
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
