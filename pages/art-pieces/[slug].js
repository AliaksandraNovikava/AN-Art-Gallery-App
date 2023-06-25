import ArtPieceDetails from "../../components/ArtPieceDetails/index.js";
import { useRouter } from "next/router";

export default function ArtPieceDetailPage({ pieces, artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => piece.slug === slug);
  const { imageSource, name, artist, year, genre } = currentArtPiece;

  return (
    <div>
      <ArtPieceDetails
        artPiecesInfo={artPiecesInfo}
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </div>
  );
}
