import ArtPieces from "../../components/ArtPieces/index.js";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <div>
      <ArtPieces
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
