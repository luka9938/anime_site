import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import useAnimeQueryStore from "../store";
import { Anime } from "../entities/Anime";
import { Response } from "../services/api_client";

const apiClient = new ApiClient<Anime>("anime");

const useAnimes = () => {
  const animeQuery = useAnimeQueryStore((state) => state.animeQuery);

  return useInfiniteQuery<Response<Anime>>(
    ["animes", animeQuery],
    async ({ pageParam = 1 }) => {
      const params: Record<string, any> = {
        page: pageParam,
        q: animeQuery.searchText || "",
      };

      // Fetch data from the backend
      const response = await apiClient.getAll({ params });

      // Apply filtering on the frontend
      let filteredResults = response.results;

      if (animeQuery.genreId) {
        filteredResults = filteredResults.filter((anime) =>
          anime.genres.some((genre) => genre.id === animeQuery.genreId)
        );
      }

      if (animeQuery.type) {
        filteredResults = filteredResults.filter(
          (anime) => anime.type === animeQuery.type
        );
      }

      if (animeQuery.rating) {
        filteredResults = filteredResults.filter(
          (anime) => anime.rating === animeQuery.rating
        );
      }

      // Apply sorting on the frontend
      if (animeQuery.sortOrder === "popularity") {
        filteredResults.sort((a, b) => a.popularity - b.popularity);
      } else if (animeQuery.sortOrder === "score") {
        filteredResults.sort((a, b) => b.score - a.score);
      } else if (animeQuery.sortOrder === "start_date") {
        filteredResults.sort((a, b) => {
          const dateA = a.aired_from ? new Date(a.aired_from).getTime() : 0;
          const dateB = b.aired_from ? new Date(b.aired_from).getTime() : 0;
          return dateB - dateA; // Descending order (newer dates first)
        });
      } else if (animeQuery.sortOrder === "title") {
        filteredResults.sort((a, b) => a.title.localeCompare(b.title));
      }

      return {
        ...response,
        results: filteredResults,
      };
    },
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );
};

export default useAnimes;
