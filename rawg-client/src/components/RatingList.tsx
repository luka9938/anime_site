import { Heading, List, ListItem, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import useAnimeQueryStore from "../store";
import useRating from "../hooks/useRating";

const RatingList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ratings } = useRating();
  const displayedRatings = isExpanded ? ratings : ratings.slice(0, 5);

  const selectedRating = useAnimeQueryStore((state) => state.animeQuery.rating);
  const setSelectedRating = useAnimeQueryStore((state) => state.setRating);

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4}>
        Ratings
      </Heading>
      <List spacing={3}>
        {displayedRatings.map((rating) => (
          <ListItem key={rating.id} paddingY="5px">
            <HStack>
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => setSelectedRating(rating.id)}
                colorScheme={rating.id === selectedRating ? "yellow" : "white"}
              >
                {rating.name}
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

export default RatingList;
