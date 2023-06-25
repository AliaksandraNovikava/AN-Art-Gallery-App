import styled from "styled-components";
import Heart from "./heart.svg";

const StyledButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  /* filter: invert(98%) sepia(0%) saturate(0%) hue-rotate(239deg) brightness(108%)
    contrast(101%); */
  width: 2.5em;
  height: 2.5em;
  padding: 0;
  cursor: pointer;

  &:hover {
    filter: invert(38%) sepia(48%) saturate(4041%) hue-rotate(340deg)
      brightness(101%) contrast(107%);
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
`;

export default function FavoriteButton({ isFavorite, onAddToFavorites }) {
  return (
    <ButtonContainer>
      <StyledButton onClick={onAddToFavorites} aria-label="favorite">
        <Heart fill={isFavorite ? "red" : "lightgrey"} />
      </StyledButton>
    </ButtonContainer>
  );
}
