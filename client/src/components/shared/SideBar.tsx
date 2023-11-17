import { Button, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import filterHelper from "../../utils/helpers/filterHelper";
import { filtersType } from "../../utils/types";

const categories = ["Cats", "Dogs", "Rabbits", "Squirrels", "Others"];
const prices = ["high-to-low", "low-to-high"];

const SideBar = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<filtersType>({
    category: undefined,
    price: undefined,
  });

  useEffect(() => {
    const filters = filterHelper({ ...filter });
    const stringifiedParams = queryString.stringify(filters);
    navigate(`/?${stringifiedParams}`);
  }, [filter]);

  return (
    <Flex flexDir="column" p={4} pos={{ base: "inherit", xl: "fixed" }}>
      <Flex flexDir="column" mb={4}>
        <Heading size="md" mb={2}>
          Filter by Category:
        </Heading>
        <List spacing={2} ml={4}>
          {categories.map((category) => (
            <ListItem
              onClick={() => setFilter((prev) => ({ ...prev, category }))}
              fontWeight="semibold"
              key={category}
              _hover={{ cursor: "pointer", color: "blue.500" }}
            >
              {category}
            </ListItem>
          ))}
        </List>
      </Flex>

      <Flex flexDir="column" mb={4}>
        <Heading size="md" mb={2}>
          Filter by Price:
        </Heading>
        <List spacing={2} ml={4}>
          {prices.map((price) => (
            <ListItem
              onClick={() => setFilter((prev) => ({ ...prev, price }))}
              fontWeight="semibold"
              key={price}
              _hover={{ cursor: "pointer", color: "blue.500" }}
            >
              <Text>{price}</Text>
            </ListItem>
          ))}
        </List>
      </Flex>

      <Button
        onClick={() =>
          setFilter((prev) => ({
            ...prev,
            category: undefined,
            price: undefined,
          }))
        }
        colorScheme="blue"
      >
        Clear Filters
      </Button>
    </Flex>
  );
};

export default SideBar;

