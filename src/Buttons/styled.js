import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;   
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.teal};
    background: transparent;
    margin: 0 0 0 20px; 
    transition: color 0.5s;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-basis:100px;
        margin: 10px;
    }
    &:hover {
        filter: brightness(110%);
    }
    &:disabled {
        color: ${({theme}) => theme.color.lightGrey}
    }
`;