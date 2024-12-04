import React from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useAnimes from "../hooks/useAnimes"; // Assuming you have this custom hook
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeGrid = () => {
  // Fetch anime data based on the current filters
  const { data, isLoading, fetchNextPage, hasNextPage } = useAnimes();

  const fetchedAnimeCount = data?.pages.reduce((acc, page) => acc + page.data.length, 0) ?? 0;

  return (
    <InfiniteScroll
      dataLength={fetchedAnimeCount}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3} padding={2}>
        {isLoading && [...Array(20).keys()].map((key) => <AnimeCardSkeleton key={key} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data?.map((anime) => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default AnimeGrid;
