interface ExperienceProps {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
    jobDescription1?: string;
    jobDescription2?: string;
    jobDescription3?: string;
}

const ExperienceEntry: React.FC<ExperienceProps> = ({
    jobTitle,
    company,
    startDate,
    endDate,
    location,
    jobDescription1,
    jobDescription2,
    jobDescription3
}: ExperienceProps) => {
    return (
        <div className="col-12 experience-entry">
            <h3 className="experience-title mb-1 alt-green">{jobTitle}</h3>
            <h4 className="experience-company mb-1">{company}</h4>
            <h6 className="experience-dates-location mb-3">
                {startDate} - {endDate}, {location}
            </h6>
            {jobDescription1 && (
                <p className="experience-description">- {jobDescription1}</p>
            )}
            {jobDescription2 && (
                <p className="experience-description">- {jobDescription2}</p>
            )}
            {jobDescription3 && (
                <p className="experience-description">- {jobDescription3}</p>
            )}
        </div>
    );
};

export default ExperienceEntry;
