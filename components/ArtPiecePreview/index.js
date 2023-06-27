import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import ArtPieceContainer from "../ArtPieceContainer";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  pieces,
  onToggleFavorite,
}) {
  return (
    <ArtPieceContainer>
      <FavoriteButton pieces={pieces} onToggleFavorite={onToggleFavorite} />
      <Image src={image} alt={title} width={336} height={200} />
      <h2>
        {artist}: {title}
      </h2>
    </ArtPieceContainer>
  );
}
