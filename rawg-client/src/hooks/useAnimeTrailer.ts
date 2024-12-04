import { useState, useEffect } from "react";
import axios from "axios";

const useAnimeTrailer = (animeId: string | undefined) => {
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (animeId) {
      axios
        .get(`https://api.jikan.moe/v4/anime/${animeId}`)
        .then((response) => {
          const youtubeUrl = response.data.data.trailer?.url;
          if (youtubeUrl) {
            // Extract YouTube video ID and convert to embed URL
            const videoId = youtubeUrl.split("v=")[1]?.split("&")[0];
            setTrailerUrl(videoId ? `https://www.youtube.com/embed/${videoId}` : null);
          } else {
            setTrailerUrl(null);
          }
          setError(null);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch anime trailer.");
        });
    }
  }, [animeId]);

  return { trailerUrl, error };
};

export default useAnimeTrailer;
