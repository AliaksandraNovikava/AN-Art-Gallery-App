import styled from "styled-components";
import Navigation from "../Navigation";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  width: 100%;
  padding: 10px 15px 0;
  background-color: white;
`;

export default function Layout({ children }) {
  return (
    <div>
      <StyledContainer>{children}</StyledContainer>
      <Navigation />
    </div>
  );
}
