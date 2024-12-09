import React from "react";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useAnimes from "../hooks/useAnimes"; // Custom hook for fetching anime data
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeGrid = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useAnimes();

  // Calculate the total number of fetched animes
  const fetchedAnimeCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) ?? 0;

  if (isError) {
    return <Text>An error occurred while fetching anime data.</Text>;
  }

  if (!isLoading && fetchedAnimeCount === 0) {
    return <Text>No anime found with the current filters.</Text>;
  }

  return (
    <InfiniteScroll
      dataLength={fetchedAnimeCount} // Tracks the number of items loaded
      next={fetchNextPage} // Function to load more data
      hasMore={hasNextPage ?? false} // Whether more data is available
      loader={<Spinner />} // Loader displayed during fetching
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {/* Show skeletons while loading */}
        {isLoading &&
          [...Array(20).keys()].map((key) => <AnimeCardSkeleton key={key} />)}

        {/* Render fetched anime data */}
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={`page-${pageIndex}`}>
            {page.results.map((anime, index) => {
              const uniqueKey = anime.id
                ? `${anime.id}-${pageIndex}-${index}`
                : `${pageIndex}-${index}`;
              return <AnimeCard key={uniqueKey} anime={anime} />;
            })}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default AnimeGrid;
