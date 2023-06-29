import styled from "styled-components";
import Heart from "./heart.svg";

const StyledButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  width: 2.5em;
  height: 2.5em;
  padding: 0;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;
`;

export default function FavoriteButton({
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const toggledArtPieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  ) ?? {
    isFavorite: false,
  };
  const isFavorite = toggledArtPieceInfo.isFavorite;

  return (
    <ButtonContainer>
      <StyledButton
        onClick={() => {
          onToggleFavorite(slug);
        }}
        aria-label="favorite"
      >
        <Heart fill={isFavorite ? "red" : "lightgrey"} />
      </StyledButton>
    </ButtonContainer>
  );
}
