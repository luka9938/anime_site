import { Anime } from "../entities/Anime";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router";

interface Props {
  anime: Anime;
}
function AnimeCard({ anime }: Props) {
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
            <Link to={`/games/${anime.url}`}>{anime.title}</Link>
          </HStack>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default AnimeCard;
