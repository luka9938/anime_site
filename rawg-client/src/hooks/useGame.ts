import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");
const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};
export default useGame;
