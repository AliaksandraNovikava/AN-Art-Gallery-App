import ArtPiecePreview from "@/components/ArtPiecePreview";
import Link from "next/link";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const toggledArtPieces = artPiecesInfo.filter(
    (artPieceInfo) => artPieceInfo.isFavorite
  );
  console.log(toggledArtPieces);

  const favoriteArtPiecesSlugs = toggledArtPieces.map(
    (artPiece) => artPiece.slug
  );
  const favoriteArtPieces = pieces.filter((piece) =>
    favoriteArtPiecesSlugs.includes(piece.slug)
  );

  return (
    <>
      {favoriteArtPieces.map(({ slug, imageSource, name, artist }) => {
        return (
          <>
            <div key={slug}>
              <Link href={`/art-pieces/${slug}`}>
                <ArtPiecePreview
                  image={imageSource}
                  title={name}
                  artist={artist}
                  artPiecesInfo={artPiecesInfo}
                  onToggleFavorite={onToggleFavorite}
                  slug={slug}
                />
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}
