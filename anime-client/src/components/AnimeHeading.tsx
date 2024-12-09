import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useAnimeQueryStore from "../store";

const AnimeHeading = () => {
  // Fetch genres using the hook
  const { data: genreData } = useGenres();
  const genres = genreData ?? [];

  // Access selected genre from Zustand store
  const genreId = useAnimeQueryStore((state) => state.animeQuery.genreId);
  const selectedGenre = genres.find((genre) => genre.id === genreId);

  // Access selected type (formerly platform) from Zustand store
  const type = useAnimeQueryStore((state) => state.animeQuery.type);
  const selectedType = type || ""; // Default to empty string if type is undefined

  // Construct the heading dynamically
  const heading = `${selectedType} ${selectedGenre?.name ?? ""} Anime`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default AnimeHeading;
