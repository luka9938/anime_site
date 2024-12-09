import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import useAnimeQueryStore from "../store";
import { Anime } from "../entities/Anime"; // Import your Anime type
import { Response } from "../services/api_client"; // Assuming Response<T> is defined

const apiClient = new ApiClient<Anime>("anime");

const useAnimes = () => {
  const animeQuery = useAnimeQueryStore((state) => state.animeQuery);

  return useInfiniteQuery<Response<Anime>>(
    ["animes", animeQuery],
    async ({ pageParam = 1 }) => {
      const params: Record<string, any> = {
        page: pageParam,
        q: animeQuery.searchText || "",
        genres: animeQuery.genreId,
        type: animeQuery.type,
        rating: animeQuery.rating,
        order_by: animeQuery.sortOrder || "",
        sort:
          animeQuery.sortOrder === "popularity"
            ? "asc"
            : animeQuery.sortOrder === "start_date"
            ? "desc"
            : animeQuery.sortOrder === "title"
            ? "asc"
            : "desc",
      };

      const response = await apiClient.getAll({ params });

      // Filter out items without a score or release date
      const filteredResults =
        animeQuery.sortOrder === "start_date"
          ? response.results // Do not filter when sorting by release date
          : response.results.filter(
              (anime) => anime.score !== null && anime.aired_from !== null // Ensure valid score and release date for other sorts
            );

      return {
        ...response,
        results: filteredResults,
      };
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.next ? lastPage.next : undefined,
    }
  );
};

export default useAnimes;
