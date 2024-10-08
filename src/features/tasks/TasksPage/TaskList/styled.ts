import {Link} from "react-router-dom"
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.steam};
    
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span<{done?: boolean}>`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button<{toggleDone?: boolean; remove?: boolean }>`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 10px;
    transition: 0.5s;
    ${({ toggleDone }) => toggleDone && css`
    background: ${({ theme }) => theme.color.officeGreen};
    
    &:hover {
        filter:brightness(110%);
            }

    &:active {
        filter:  brightness(120%);
             }
        `}
    
    ${({ remove }) => remove && css`
    background: ${({ theme }) => theme.color.stangerRed};
    
    &:hover {
        filter: brightness(110%);
            }

    &:active {
        filter: brightness(120%);
             }
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.teal};
`;