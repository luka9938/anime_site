// hooks/useAnimes.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";

const apiClient = new ApiClient("anime");

const useAnimes = (query: { searchText?: string; genreId?: number }) => {
  return useInfiniteQuery(
    ["animes", query],
    async ({ pageParam = 1 }) => {
      return apiClient.getAll({
        params: {
          page: pageParam,
          q: query.searchText,
          genres: query.genreId,
        },
      });
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
