import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import { Games } from "./useGames";
const apiClient = new ApiClient<Games>("/games");
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};
export default useGame;
