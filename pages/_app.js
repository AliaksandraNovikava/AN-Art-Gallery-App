import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import Layout from "../components/Layout/index.js";
import styled from "styled-components";

const Device = styled.div`
  position: relative;
  display: block;
  width: 368px;
  height: 100vh;
  /* border-radius: 10px; */
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.12);
  overflow: auto;
`;

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
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState("artPieces", {
    defaultValue: [],
  });

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

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  return (
    <Device>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </Device>
  );
}
