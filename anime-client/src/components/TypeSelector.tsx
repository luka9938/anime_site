import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";
import useType from "../hooks/useType";

const TypeSelector = () => {
  const { types } = useType();

  const selectedType = useAnimeQueryStore((state) => state.animeQuery.type);
  const setSelectedType = useAnimeQueryStore((state) => state.setType);

  const currentType = types.find((type) => type.id === selectedType);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {currentType ? currentType.name : "Type"}
      </MenuButton>
      <MenuList>
        {types.map((type) => (
          <MenuItem onClick={() => setSelectedType(type.id)} key={type.id}>
            {type.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypeSelector;
