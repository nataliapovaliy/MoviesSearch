import { StyledLink, HeaderDiv } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <nav>
            <HeaderDiv>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                    
                </li>
                <li>
                    <StyledLink to='movies'>Movies</StyledLink>
                
                </li>
            </HeaderDiv>
        </nav>
    )
}