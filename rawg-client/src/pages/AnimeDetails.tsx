import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import "../components/AnimeDetails.css";
import AnimeTrailer from "../components/AnimeTrailer";
import DetailItem from "../components/DetailItem";

const animeApiClient = new ApiClient("anime");

const AnimeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [anime, setAnime] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      animeApiClient
        .get(id)
        .then((data) => {
          setAnime(data.data);
          setError(null);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch anime details. Please try again later.");
        });
    }
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!anime) return <div>Loading...</div>;

  const themes =
    anime?.themes?.map((theme: any) => theme.name).join(", ") ||
    "Themes not available";
  const demographics =
    anime?.demographics?.map((demo: any) => demo.name).join(", ") ||
    "Demographics not available";

  return (
    <div className="animedetailsContainer">
      <button onClick={() => navigate("/")} className="button-50">
        Back to Homepage
      </button>

      <h1 className="animedetailsh1">{anime.title}</h1>
      <img
        className="animedetailsimg"
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
      />
      <DetailItem label="English Title" value={anime.title_english} />
      <DetailItem label="Japanese Title" value={anime.title_japanese} />
      <DetailItem label="Rating" value={anime.rating} />
      <DetailItem
        label="Genres"
        value={anime.genres.map((genre: any) => genre.name).join(", ")}
      />
      <DetailItem label="Year" value={anime.year} />
      <DetailItem label="Type" value={anime.type} />
      <DetailItem label="Episodes" value={anime.episodes} />
      <DetailItem label="Themes" value={themes} />
      <DetailItem label="Demographics" value={demographics} />
      <DetailItem label="Synopsis" value={anime.synopsis} />
      <DetailItem label="Background" value={anime.background} />

      <a
        className="animedetailsA"
        href={anime.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button-50">More Info</button>
      </a>

      {/* Conditionally render AnimeTrailer only if there is a trailer available */}
      {anime.trailer && anime.trailer.url && <AnimeTrailer animeId={id!} />}
    </div>
  );
};

export default AnimeDetails;
