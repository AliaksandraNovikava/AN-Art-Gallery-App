import ArtPieces from "../components/ArtPieces/index.js";
import { useState } from "react";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onAddToFavorites,
}) {
  const favPieces = pieces.filter((piece) => piece.isFavorite);
  return (
    <>
      <ArtPieces pieces={favPieces} onAddToFavorites={onAddToFavorites} />
    </>
  );
}
