import { Anime } from "../entities/Anime";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react"; // Import Link from Chakra UI
import CriticScore from "./CriticScore";
import { Link as RouterLink } from "react-router"; // Updated import for react-router

interface Props {
  anime: Anime;
}

function AnimeCard({ anime }: Props) {
  // Check if anime is undefined
  if (!anime) {
    return null; // Or a fallback component like a loading spinner or empty card
  }

  return (
    <Card width="300px">
      <Image src={anime.image_url} alt={anime.image_url} />
      <CardBody>
        <Heading fontSize="2xl">
          <HStack>
            {/* Use Chakra UI's Link component with hover styles */}
            <Link
              as={RouterLink}
              to={`/anime/${anime.id}`}
              _hover={{ textDecoration: "underline", color: "blue.500" }} // Add hover effect here
            >
              {anime.title}
            </Link>
          </HStack>
        </Heading>
        <Text>
          <strong>Status:</strong> {anime.status}
        </Text>
        <HStack justifyContent={"space-between"}>
          <CriticScore score={anime.score} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default AnimeCard;
