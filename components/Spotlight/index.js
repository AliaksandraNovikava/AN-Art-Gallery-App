import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPieceContainer from "../ArtPieceContainer";
import styled from "styled-components";

export default function Spotlight({ pieces, onToggleFavorite }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  console.log(randomPiece);

  const ScrollSection = styled.div`
    position: relative;
    flex: 1 0 auto;
    width: 100%;
  `;

  return (
    <ScrollSection>
      <ArtPieceContainer>
        <FavoriteButton onToggleFavorite={onToggleFavorite} />
        <Image
          src={randomPiece.imageSource}
          alt={randomPiece.name}
          width={336}
          height={200}
        />
        <h2>
          {randomPiece.name} by {randomPiece.artist}
        </h2>
      </ArtPieceContainer>
    </ScrollSection>
  );
}
