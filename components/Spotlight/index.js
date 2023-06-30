import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPieceContainer from "../ArtPieceContainer";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces, artPiecesInfo, onToggleFavorite }) {
  const [randomSpotlight, setRandomSpotlight] = useState(0);
  useEffect(() => {
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    setRandomSpotlight(randomPiece);
  }, [pieces]);

  const StyledImage = styled(Image)`
    height: 100%;
    width: 100%;
  `;

  return (
    <div>
      <ArtPieceContainer>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          slug={randomSpotlight.slug}
          artPiecesInfo={artPiecesInfo}
        />
        <Link href={`/art-pieces/${randomSpotlight.slug}`}>
          <StyledImage
            src={randomSpotlight.imageSource}
            alt={randomSpotlight.name}
            width={336}
            height={200}
          />
          <p>
            {randomSpotlight.artist}
            <br></br>
            <strong>{randomSpotlight.name}</strong>
          </p>
        </Link>
      </ArtPieceContainer>
    </div>
  );
}
