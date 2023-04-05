import { ReactNode } from "react";
import styled from "styled-components";

interface ExperienceProps {
    jobTitle: string;
    company: ReactNode;
    startDate: string;
    endDate: string;
    location: string;
    jobDescription?: ReactNode;
    className?: string;
}

const Container = styled.div`
    margin: 0.5rem 0 0.5rem 0;
`;

const Title = styled.h3`
    font-weight: 700;
`;

const Company = styled.h4`
    font-weight: 600;
`;

const DatesLocation = styled.h6`
    font-size: 1.2rem;
    font-weight: 500;
`;

const Description = styled.p`
    margin: 0.2rem 0 0.2rem 0;
    font-size: 1rem;
    line-height: 2rem;
`;

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
        <Container className={className ? `col-12 ${className}` : "col-12"}>
            <Title className="mb-1 alt-green">{jobTitle}</Title>
            <Company className="mb-1">{company}</Company>
            <DatesLocation className="mb-3">
                {startDate} - {endDate}, {location}
            </DatesLocation>
            {jobDescription && <Description>- {jobDescription}</Description>}
        </Container>
    );
};

export default ExperienceEntry;
