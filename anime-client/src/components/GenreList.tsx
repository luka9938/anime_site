import { Button, Heading, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { useState } from "react";
import useAnimeQueryStore from "../store";

const GenreList = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data, error, isLoading } = useGenres();
  const genres = data ?? []; // Ensure `genres` is an empty array if `data` is undefined

  const displayedGenres = isExpanded ? genres : genres.slice(0, 5);

  const selectedGenreId = useAnimeQueryStore((state) => state.animeQuery.genreId);
  const setSelectedGenreId = useAnimeQueryStore((state) => state.setGenreId);

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4} marginTop={10}>
        Genres
      </Heading>
      <List spacing={3}>
        {displayedGenres.map((genre) => (
          <ListItem key={genre.mal_id} paddingY="5px">
            <HStack>
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => setSelectedGenreId(genre.mal_id)}
                colorScheme={selectedGenreId === genre.mal_id ? "yellow" : "white"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <Button onClick={() => setIsExpanded(!isExpanded)} marginTop={4}>
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </List>
    </>
  );
};

export default GenreList;
