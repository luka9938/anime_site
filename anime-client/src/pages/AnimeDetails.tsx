import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import ApiClient from "../services/api_client";
import "../AnimeDetails.css";
import DetailItem from "../components/DetailItem";
import { Anime } from "../entities/Anime"; // Assuming you have an Anime type defined
import AnimeTrailer from "../components/AnimeTrailer";

const animeApiClient = new ApiClient<Anime>("anime");

const AnimeDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the anime ID from the URL params
  const [anime, setAnime] = useState<Anime | null>(null); // Use the Anime type for type safety
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      animeApiClient
        .get(id)
        .then((data) => {
          setAnime(data);
          setError(null);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch anime details. Please try again later.");
        });
    }
  }, [id]);

  if (error) return <div>{error}</div>; // Display error message if an error occurs
  if (!anime) return <div>Loading...</div>; // Display a loading message while fetching data

  return (
    <div className="animedetailsContainer">
      <button onClick={() => navigate("/")} className="button-62">
        Back to Homepage
      </button>

      <h1 className="animedetailsh1">{anime.title}</h1>
      <img
        className="animedetailsimg"
        src={anime.image_url} // Adjusted to match your backend field
        alt={anime.title}
      />
      <DetailItem label="English Title" value={anime.title_english || "N/A"} />
      <DetailItem
        label="Japanese Title"
        value={anime.title_japanese || "N/A"}
      />
      <DetailItem label="Rating" value={anime.rating || "N/A"} />
      <DetailItem
        label="Genres"
        value={anime.genres?.map((genre) => genre.name).join(", ") || "N/A"}
      />
      <DetailItem label="Year" value={anime.aired_from || "N/A"} />
      <DetailItem label="Type" value={anime.type || "N/A"} />
      <DetailItem
        label="Episodes"
        value={anime.episodes?.toString() || "N/A"}
      />
      <DetailItem label="Synopsis" value={anime.synopsis || "N/A"} />
      <DetailItem label="Background" value={anime.background || "N/A"} />

      <a
        className="animedetailsA"
        href={anime.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button-62">More Info</button>
      </a>
      {/* Conditionally render AnimeTrailer only if there is a trailer available */}
      {anime.trailer_url && <AnimeTrailer animeId={id!} />}
    </div>
  );
};

export default AnimeDetails;
