// hooks/useAnimes.ts
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
        q: animeQuery.searchText,
        genres: animeQuery.genreId,
        type: animeQuery.type,
        rating: animeQuery.rating,
        order_by: animeQuery.sortOrder?.replace("-", ""), // API may require "order_by"
        sort: animeQuery.sortOrder?.startsWith("-") ? "desc" : "asc",
      };

      // Remove undefined values to prevent invalid query parameters
      Object.keys(params).forEach(
        (key) => params[key] === undefined && delete params[key]
      );

      return apiClient.getAll({ params });
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
