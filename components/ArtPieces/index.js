import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces, onAddToFavorites }) {
  return (
    <>
      {pieces.map(({ slug, imageSource, name, artist, isFavorite }) => (
        <div key={slug}>
          <Link href={`/art-pieces/${slug}`}>
            <ArtPiecePreview
              image={imageSource}
              title={name}
              artist={artist}
              isFavorite={isFavorite}
              onAddToFavorites={onAddToFavorites}
            />
          </Link>
        </div>
      ))}
    </>
  );
}
