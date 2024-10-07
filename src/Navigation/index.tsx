import { StyledNavLink, StyledNavList } from "./styled"


export default () => (
    <nav>
        <StyledNavList>
            <li>
                <StyledNavLink
                    activeClassName="active"
                    to="/zadania">
                    Zadania
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink
                    activeClassName="active"
                    to="/autor">
                    O Autorze
                </StyledNavLink>
            </li>
        </StyledNavList>
    </nav>
)