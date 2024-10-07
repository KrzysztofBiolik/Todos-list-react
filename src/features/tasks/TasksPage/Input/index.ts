import styled from "styled-components";

export default styled.input`
    flex-grow: 1;
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
    margin: 10px;
    padding: 10px;
`;