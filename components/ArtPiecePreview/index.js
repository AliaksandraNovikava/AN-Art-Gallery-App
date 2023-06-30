import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPieceContainer from "../ArtPieceContainer";
import styled from "styled-components";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const StyledImage = styled(Image)`
    height: 100%;
    width: 100%;
  `;
  return (
    <ArtPieceContainer>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <Link href={`/art-pieces/${slug}`}>
        <StyledImage src={image} alt={title} width={336} height={200} />
        <p>
          {artist}
          <br></br>
          <strong>{title}</strong>
        </p>
      </Link>
    </ArtPieceContainer>
  );
}
