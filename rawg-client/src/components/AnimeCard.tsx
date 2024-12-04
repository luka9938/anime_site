import { Anime } from "../entities/Anime";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router"; // Updated import for react-router

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
      <Image
        src={getCroppedImageUrl(anime.images.webp.large_image_url)}
        alt={anime.images.webp.large_image_url}
      />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <CriticScore score={anime.score} />
        </HStack>
        <Heading fontSize="2xl">
          <HStack>
            <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
          </HStack>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default AnimeCard;
