import { Body, Container, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
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