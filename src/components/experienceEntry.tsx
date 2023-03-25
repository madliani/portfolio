import { ReactNode } from "react";

interface ExperienceProps {
    jobTitle: string;
    company: ReactNode;
    startDate: string;
    endDate: string;
    location: string;
    jobDescription?: ReactNode;
    className?: string;
}

const ExperienceEntry: React.FC<ExperienceProps> = ({
    jobTitle,
    company,
    startDate,
    endDate,
    location,
    jobDescription,
    className
}: ExperienceProps) => {
    return (
        <div
            className={
                className
                    ? `col-12 experience-entry ${className}`
                    : "col-12 experience-entry"
            }
        >
            <h3 className="experience-title mb-1 alt-green">{jobTitle}</h3>
            <h4 className="experience-company mb-1">{company}</h4>
            <h6 className="experience-dates-location mb-3">
                {startDate} - {endDate}, {location}
            </h6>
            {jobDescription && (
                <p className="experience-description">- {jobDescription}</p>
            )}
        </div>
    );
};

export default ExperienceEntry;
