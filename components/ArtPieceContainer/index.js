import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
`;

export default function ArtPieceContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
