import { ReactNode } from "react";
import styled from "styled-components";

type Properties = {
    className?: string;
    degree: string;
    description?: string;
    endDate: string;
    schoolName: ReactNode;
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
const DegreeDates = styled.h6`
    font-size: 1.2rem;
    font-weight: 500;
`;

export const EducationEntry = ({
    className,
    degree,
    description,
    endDate,
    schoolName,
    startDate
}: Properties) => {
    return (
        <Container className={className ? `col-12 ${className}` : "col-12"}>
            <Title className="mb-1 alt-green">{schoolName}</Title>
            <DegreeDates className="mb-2">
                {degree}, {startDate} - {endDate}
            </DegreeDates>
            {description && <DegreeDates>- {description}</DegreeDates>}
        </Container>
    );
};
