import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import useAnimeQueryStore from "../store";

const apiClient = new ApiClient("anime");

const useAnimes = () => {
  const animeQuery = useAnimeQueryStore((state) => state.animeQuery);

  return useInfiniteQuery(
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
            ? "asc" // Popularity sorted in ascending order
            : animeQuery.sortOrder === "start_date"
            ? "desc"
            : animeQuery.sortOrder === "title"
            ? "asc" // Release Date sorted in descending order
            : "desc", // Default descending for other sorts
      };

      const response = await apiClient.getAll({ params });

      // Filter out items without a score or release date
      // Filter out items without a score
      const filteredData =
        animeQuery.sortOrder === "start_date"
          ? response.data // Do not filter when sorting by release date
          : response.data.filter(
              (anime) => anime.score !== null && anime.aired?.from !== null // Ensure valid score and release date for other sorts
            );

      return {
        ...response,
        data: filteredData,
      };
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.pagination.has_next_page
          ? lastPage.pagination.current_page + 1
          : undefined,
    }
  );
};

export default useAnimes;
