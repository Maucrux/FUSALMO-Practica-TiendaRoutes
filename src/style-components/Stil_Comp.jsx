import styled from "styled-components";
import { Link, NavLink as NL } from "react-router-dom";

//exportación nombrada
export const Button = styled.button`
  background: #dff5ff;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  font-size: 0.9em;
  margin: 0;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  background-color: #ffffff;
  color: #000000;
  flex-direction: row;
  align-content: center;
  padding: 5px;
  justify-content: space-between;
`;

export const BtnLink = styled.button`
  color: #0e0d0d;
  padding: 0.9em;
  border-radius: 5px;
  border: 2px solid #333;
  cursor: pointer;
  margin-right: 0.7em;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const StyledNavLink = styled(NL)`
  color: white;
  text-decoration: none;
  padding: 1em;
  list-style-type: none;

  &.is-active {
  }
`;

export const DetailsCont = styled.div`
  background-color: #8fbade;
  padding: 0.5em;
  border-radius: 10px;
  margin-top: 1em;
  h3,
  h4 {
    color: #333;
  }
  h2{
    font-family: Impact (sans-serif);
  }
`;

export const CenteredCont = styled.div`
  height: 100vh;
  width: 60%;
  margin: 0 auto;
`;

export const CenterInfo = styled.div`
  justify-content: center;
  text-align: center;

  ul li {
    display: inline-block;
  }
`;
