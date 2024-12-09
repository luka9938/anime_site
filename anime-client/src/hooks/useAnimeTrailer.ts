import { useState, useEffect } from "react";
import ApiClient from "../services/api_client"; // Ensure this client is implemented correctly

interface TrailerData {
  url: string;
  trailer_youtube_id: string | null;
  trailer_url: string | null;
  trailer_embed_url: string | null;
  trailer_image_url: string | null;
}

const useAnimeTrailer = (animeId: string) => {
  const [trailer, setTrailer] = useState<TrailerData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiClient = new ApiClient<TrailerData>("anime");

    const fetchTrailer = async () => {
      try {
        const data = await apiClient.get(animeId);
        if (data.trailer_youtube_id && data.trailer_embed_url) {
          setTrailer(data);
        } else {
          setError("Trailer not available for this anime.");
        }
      } catch (err) {
        setError("Failed to fetch anime trailer data.");
      }
    };

    fetchTrailer();
  }, [animeId]);

  return { trailer, error };
};

export default useAnimeTrailer;
