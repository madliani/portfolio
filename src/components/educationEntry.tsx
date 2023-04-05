import { ReactNode } from "react";
import styled from "styled-components";

interface EducationProps {
    schoolName: ReactNode;
    degree: string;
    startDate: string;
    endDate: string;
    description?: string;
    className?: string;
}

const Container = styled.div`
    margin: 0.5rem 0 0.5rem 0;
`;

const Title = styled.h3`
    font-weight: 700;
`;

const DegreeDates = styled.h6`
    font-size: 1.2rem;
    font-weight: 500;
`;

const EducationEntry: React.FC<EducationProps> = ({
    schoolName,
    degree,
    startDate,
    endDate,
    description,
    className
}: EducationProps) => {
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

export default EducationEntry;
