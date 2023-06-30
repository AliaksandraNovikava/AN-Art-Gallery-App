import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  console.log(artPiecesInfo);
  return (
    <>
      {pieces.map(({ slug, imageSource, name, artist }) => (
        <div key={slug}>
          <ArtPiecePreview
            image={imageSource}
            title={name}
            artist={artist}
            onToggleFavorite={onToggleFavorite}
            slug={slug}
            artPiecesInfo={artPiecesInfo}
          />
        </div>
      ))}
    </>
  );
}
