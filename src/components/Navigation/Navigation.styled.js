import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;

    &.active {
        color: red;
    }
`;

export const HeaderDiv = styled.ul`
    height: 30px;
    margin: 0;
    padding: 20px;
    border-bottom: 2px solid lightgray;
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
`