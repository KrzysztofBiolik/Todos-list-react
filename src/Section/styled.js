import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    margin: 10px 0;
`;

export const Header = styled.header`
     border-bottom: 1px solid ${({ theme }) => theme.color.steam};
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    grid-gap: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Body = styled.div`
    padding: 10px;
`;