import { ReactNode } from "react";
import { Body, Container, Header, Title } from "./styled";

interface SectionProps {
    title: ReactNode;
    body: ReactNode;
    extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent } : SectionProps) => (
    <Container>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Container>
);

export default Section;