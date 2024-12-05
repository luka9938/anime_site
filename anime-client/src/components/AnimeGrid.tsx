import React from "react";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useAnimes from "../hooks/useAnimes"; // Assuming you have this custom hook
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeGrid = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useAnimes();

  const fetchedAnimeCount =
    data?.pages.reduce((acc, page) => acc + page.data.length, 0) ?? 0;

  if (!isLoading && fetchedAnimeCount === 0) {
    return <Text>No anime found with the current filters.</Text>;
  }

  if (!isLoading && fetchedAnimeCount === 0) {
    return <Text>No anime found with the current filters.</Text>;
  }

  return (
    <InfiniteScroll
      dataLength={fetchedAnimeCount}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isLoading &&
          [...Array(20).keys()].map((key) => <AnimeCardSkeleton key={key} />)}

        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={`page-${pageIndex}`}>
            {page.data.map((anime, index) => {
              // Ensure key is unique across all pages
              const uniqueKey = anime.mal_id
                ? `${anime.mal_id}-${pageIndex}-${index}`
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
