import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

function AnimeCardContainer({ children }: Props) {
  return (
    <Box
      overflow="hidden"
      borderRadius={10}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.2s ease-in",
      }}
    >
      {children}
    </Box>
  );
}

export default AnimeCardContainer;
