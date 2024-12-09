import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import { Genre } from "../entities/Genre";

// Create an ApiClient instance for the genres endpoint
const apiClient = new ApiClient<Genre>("genres/anime");

const useGenres = () => {
  return useQuery<Genre[], Error>(
    ["genres"],
    async () => {
      // Fetch genres using ApiClient
      const response = await apiClient.getAll();
      return response.results; // Adjust if the backend response structure differs
    },
    {
      staleTime: 1000 * 60 * 60, // 1 hour
    }
  );
};

export default useGenres;
