import { Badge } from "@chakra-ui/layout";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 7.9 ? "green" : score > 5.9 ? "yellow" : "red";
  return (
    <Badge
      colorScheme={color}
      variant={"outline"}
      borderRadius={"4px"}
      paddingX={2}
      border={"1px solid"}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
