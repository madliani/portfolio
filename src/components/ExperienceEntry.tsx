import { ReactNode } from "react";
import styled from "styled-components";

type Properties = {
    className?: string;
    company: ReactNode;
    endDate: string;
    jobDescription?: ReactNode;
    jobTitle: string;
    location: string;
    startDate: string;
};

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const Container = styled.div`
    margin: 0.5rem 0;
`;

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const Title = styled.h3`
    font-weight: 700;
`;

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const Company = styled.h4`
    font-weight: 600;
`;

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const DatesLocation = styled.h6`
    font-size: 1.2rem;
    font-weight: 500;
`;

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const Description = styled.p`
    margin: 0.2rem 0;
    font-size: 1rem;
    line-height: 2rem;
`;

export const ExperienceEntry = ({
    className,
    company,
    endDate,
    jobDescription,
    jobTitle,
    location,
    startDate
}: Properties) => {
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
