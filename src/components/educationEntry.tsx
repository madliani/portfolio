import { ReactNode } from "react";

interface EducationProps {
    schoolName: ReactNode;
    degree: string;
    startDate: string;
    endDate: string;
    description?: string;
    className?: string;
}

const EducationEntry: React.FC<EducationProps> = ({
    schoolName,
    degree,
    startDate,
    endDate,
    description,
    className
}: EducationProps) => {
    return (
        <div
            className={
                className
                    ? `col-12 experience-entry ${className}`
                    : "col-12 experience-entry"
            }
        >
            <h3 className="education-title mb-1 alt-green">{schoolName}</h3>
            <h6 className="education-degree-dates mb-2">
                {degree}, {startDate} - {endDate}
            </h6>
            {description && (
                <p className="education-description">- {description}</p>
            )}
        </div>
    );
};

export default EducationEntry;
