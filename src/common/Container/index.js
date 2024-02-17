import { Wrapper } from "./styled";

const Container = ({ children }) => (
    <Wrapper className="container">
        {children}
    </Wrapper>
)

export default Container;