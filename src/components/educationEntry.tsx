interface EducationProps {
    schoolName: string;
    degree: string;
    startDate: string;
    endDate: string;
    description?: string;
}

const EducationEntry: React.FC<EducationProps> = ({
    schoolName,
    degree,
    startDate,
    endDate,
    description
}: EducationProps) => {
    return (
        <div className="col-12 experience-entry">
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
