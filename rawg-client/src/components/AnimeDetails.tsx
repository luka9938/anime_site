import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; // Make sure you're using react-router-dom
import axios from "axios";
import "./AnimeDetails.css";

const AnimeDetails = () => {
  const { id } = useParams(); // Extracting the anime ID from the URL
  const [anime, setAnime] = useState<any>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.jikan.moe/v4/anime/${id}`) // Fetch data based on the anime ID
        .then((response) => setAnime(response.data.data))
        .catch((error) => console.error(error));
    }
  }, [id]); // Re-run when `id` changes

  if (!anime) return <div>Loading...</div>; // Show loading until anime data is fetched

  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.large_image_url} alt={anime.title} />
      <p>
        <strong>English Title:</strong> {anime.title_english}
      </p>
      <p>
        <strong>Japanese Title:</strong> {anime.title_japanese}
      </p>
      <p>
        <strong>Rating:</strong> {anime.rating}
      </p>
      <p>
        <strong>Genres:</strong> {anime.genres.map((genre: any) => genre.name).join(", ")}
      </p>
      <p>
        <strong>Year:</strong> {anime.year}
      </p>
      <p>
        <strong>Synopsis:</strong> {anime.synopsis}
      </p>
      <a href={anime.url} target="_blank" rel="noopener noreferrer">
        <button>More Info</button>
      </a>
    </div>
  );
};

export default AnimeDetails;
