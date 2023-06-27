import ArtPieces from "../components/ArtPieces/index.js";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton.js";
import Image from "next/image.js";
import { useState } from "react";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favPieces = pieces.filter((piece) => piece.isFavorite);
  return (
    <>
      {/* <ArtPieces pieces={favPieces} onToggleFavorite={onToggleFavorite} /> */}
      {pieces.map(({ slug, imageSource, name, artist }) => {
        // find the movie in the state and destructure the isFavorite property
        // if it is not in the state, default isFavorite to false
        const { isFavorite } = artPiecesInfo.find(
          (info) => info.slug === slug
        ) ?? {
          isFavorite: false,
        };

        return (
          <li key={slug}>
            <FavoriteButton
              pieces={pieces}
              onToggleFavorite={onToggleFavorite}
            />
            <Image src={imageSource} alt={name} width={336} height={200} />
            <h2>
              {artist}: {name}
            </h2>
            {/* <button type="button" onClick={handleToggleFavorite(id)}>
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button> */}
          </li>
        );
      })}
    </>
  );
}
