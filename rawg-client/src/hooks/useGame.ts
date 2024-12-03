import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import { Anime } from "../entities/Anime";

const apiClient = new ApiClient<Anime>("/games");

const useGame = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: () => apiClient.getAll(), // Fetches all games
  });
};

export default useGame;
