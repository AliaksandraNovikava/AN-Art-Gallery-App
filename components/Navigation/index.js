import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 368px;
  height: 60px;
  background-color: #000;
  color: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #999999;
  }
`;

export default function Navigation() {
  return (
    <NavBar>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      <StyledLink href="#">Favorites</StyledLink>
    </NavBar>
  );
}
