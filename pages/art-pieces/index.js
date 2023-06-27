import ArtPieces from "../../components/ArtPieces/index.js";

export default function ArtPiecesPage({ pieces, onToggleFavorite }) {
  return (
    <div>
      <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
