import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPieceContainer from "../ArtPieceContainer";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces, artPiecesInfo, onToggleFavorite }) {
  const [currentPiece, setCurrentPiece] = useState("");
  useEffect(() => {
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    setCurrentPiece(randomPiece);
  }, [pieces]);

  const ScrollSection = styled.div`
    position: relative;
    flex: 1 0 auto;
    width: 100%;
  `;

  return (
    <ScrollSection>
      <ArtPieceContainer>
        <FavoriteButton onToggleFavorite={onToggleFavorite} pieces={pieces} />
        <Image
          src={currentPiece.imageSource}
          alt={currentPiece.name}
          width={336}
          height={200}
        />
        <h2>
          {currentPiece.name} by {currentPiece.artist}
        </h2>
      </ArtPieceContainer>
    </ScrollSection>
  );
}
