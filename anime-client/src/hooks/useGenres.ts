import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Genre } from "../entities/Genre";

const fetchGenres = async (): Promise<Genre[]> => {
  const response = await axios.get("https://api.jikan.moe/v4/genres/anime");
  return response.data.data; // Adjusted to match API's structure
};

const useGenres = () => {
  return useQuery<Genre[], Error>(["genres"], fetchGenres, {
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export default useGenres;
