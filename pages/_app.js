import GlobalStyle from "../styles";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import Layout from "../components/Layout/index.js";
import styled from "styled-components";

const fetcher = async (URL) => {
  const res = await fetch(URL);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) {
    return <div>failed to load</div>;
  }
  if (isLoading) {
    return <div>loading...</div>;
  }

  const Device = styled.div`
    position: relative;
    display: block;
    width: 368px;
    height: 100vh;
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.12);
    overflow: auto;
  `;

  function handleToggleFavorite(slug) {
    // setArtPiecesInfo(
    //   artPiecesInfo.map((artPieceInfo) =>
    //     artPieceInfo.slug === slug
    //       ? { ...artPieceInfo, isFavorite: !artPieceInfo.isFavorite }
    //       : artPieceInfo
    //   )
    // );
  }

  function handleAddToFavorites() {
    setArtPiecesInfo([{ ...data, id: uid() }], ...artPiecesInfo);
    router.push("/favorites");
  }

  return (
    <Device>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={data}
          isFavorite={data.isFavorite}
          artPiecesInfo={artPiecesInfo}
          onAddToFavorites={handleAddToFavorites}
        />
      </Layout>
    </Device>
  );
}
