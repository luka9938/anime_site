import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        colorScheme="green"
        isChecked={colorMode === "dark"}
      ></Switch>
      <Text whiteSpace="nowrap">Dark mode</Text>
    </HStack>
  );
};

export default ColorMode;
