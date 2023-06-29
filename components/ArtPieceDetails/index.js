import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ArtPieceContainer from "../ArtPieceContainer";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const StyledImage = styled(Image)`
    height: 100%;
    width: 100%;
  `;
  const StyledButton = styled.button`
    appearance: none;
    border: none;
    background: #000;
    padding: 0.5rem 1rem;
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
    }
  `;
  const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
  `;
  return (
    <ArtPieceContainer>
      <StyledButton>
        <StyledLink href="/art-pieces">Back to Gallery</StyledLink>
      </StyledButton>
      <StyledImage src={image} alt={title} width={336} height={200} />
      <p>
        {artist}
        <br></br>
        <strong>{title}</strong>
      </p>
      <p>{year}</p>
      <p>{genre}</p>
    </ArtPieceContainer>
  );
}
