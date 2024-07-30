import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        font-weight: bold;
        };

    & {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    margin-left: 30px;
    };
        &:hover{
            text-decoration: underline;
        };
`;

export const StyledNavList = styled.ul`
    list-style-type: none;
    background-color: ${({ theme }) => theme.color.teal};
    display: flex;
    justify-content: center;
    padding: 20px;
    margin-top: 0;
`;