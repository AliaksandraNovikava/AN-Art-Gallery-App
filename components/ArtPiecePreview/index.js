import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPieceContainer from "../ArtPieceContainer";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <ArtPieceContainer>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image src={image} alt={title} width={336} height={200} />
      <h2>
        {artist}: {title}
      </h2>
    </ArtPieceContainer>
  );
}
