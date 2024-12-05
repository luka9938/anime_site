import { useState, useEffect } from "react";
import axios from "axios";
import { Trailer } from "../entities/Trailer";

const useAnimeTrailer = (animeId: string | undefined) => {
  const [trailer, setTrailer] = useState<Trailer | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (animeId) {
      axios
        .get(`https://api.jikan.moe/v4/anime/${animeId}`)
        .then((response) => {
          const trailerData = response.data.data.trailer;
          if (trailerData) {
            setTrailer({
              id: parseInt(animeId),
              name: trailerData.title || "Trailer not available",
              preview: trailerData.images?.medium || "",
              data: {
                480: trailerData.url || "",
                max: trailerData.embed_url || "",
              },
            });
          } else {
            setTrailer(null);
          }
          setError(null);
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch anime trailer.");
        });
    }
  }, [animeId]);

  return { trailer, error };
};

export default useAnimeTrailer;
