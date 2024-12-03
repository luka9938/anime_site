// components/AnimeGrid.tsx
import React from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useAnimes from "../hooks/useAnimes";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeGrid = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useAnimes({
    searchText: "Cowboy Bebop", // Example query (can be dynamic)
  });

  const fetchedAnimeCount =
    data?.pages.reduce((acc, page) => acc + page.data.length, 0) ?? 0;

  return (
    <InfiniteScroll
      dataLength={fetchedAnimeCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {isLoading &&
          [...Array(20).keys()].map((key) => <AnimeCardSkeleton key={key} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default AnimeGrid;
