import { Grid, GridItem, Show, Box, HStack } from "@chakra-ui/react";
import AnimeGrid from "../components/AnimeGrid";
import AnimeHeading from "../components/AnimeHeading";
import PlatformSelector from "../components/TypeSelector";
import SortSelector from "../components/SortSelector";
import GenreList from "../components/GenreList";
import RatingList from "../components/RatingList";
const HomePage = () => {
  return (
    <Grid
      padding={4}
      templateAreas={{
        lg: `"aside main"`,
        base: "main",
      }}
      templateColumns={{
        lg: "200px 1fr",
        base: "1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList />
          <RatingList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <AnimeHeading />
          <HStack spacing="5" marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <AnimeGrid />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
