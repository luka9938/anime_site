import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import useAnimeQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Release Date", value: "start_date" }, // Sort by release date
    { label: "Highest Rated", value: "score" }, // Sort by score
    { label: "Name", value: "title" }, // Sort by title
    { label: "Popularity", value: "popularity" }, // Sort by popularity
  ];

  const sortOrder = useAnimeQueryStore((state) => state.animeQuery.sortOrder);
  const setSortOrder = useAnimeQueryStore((state) => state.setSortOrder);

  const selectedSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {selectedSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
