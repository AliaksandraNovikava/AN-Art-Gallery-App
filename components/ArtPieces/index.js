import ArtPiecePreview from "../ArtPiecePreview";
import Link from "next/link";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  console.log(artPiecesInfo);
  return (
    <>
      {pieces.map(({ slug, imageSource, name, artist, dimensions }) => (
        <div key={slug}>
          <Link href={`/art-pieces/${slug}`}>
            <ArtPiecePreview
              image={imageSource}
              title={name}
              artist={artist}
              onToggleFavorite={onToggleFavorite}
              slug={slug}
              artPiecesInfo={artPiecesInfo}
            />
          </Link>
        </div>
      ))}
    </>
  );
}
