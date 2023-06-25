import Image from "next/image";
import Link from "next/link";
import ArtPieceContainer from "../ArtPieceContainer";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <ArtPieceContainer>
      <Link href="/art-pieces">Back to Gallery</Link>
      <Image src={image} alt={title} width={336} height={200} />
      <h2>
        {artist}: {title}
      </h2>
      <p>{year}</p>
      <p>{genre}</p>
    </ArtPieceContainer>
  );
}
