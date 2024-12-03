import { Grid, GridItem, Show, Box, HStack } from "@chakra-ui/react";
import GameGrid from "../components/AnimeGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
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
        <GridItem area={"aside"}></GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing="5" marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
