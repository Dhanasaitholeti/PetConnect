import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";

const SideBar = () => {
  const categories = ["Cats", "Dogs", "Rabbits", "Squirrels", "Others"];
  const prices = ["high-to-low", "low-to-high"];
  return (
    <Flex flexDir={"column"} gap={5} p={4} pos={"fixed"}>
      <Flex flexDir={"column"}>
        <Heading size="md" mb={2}>
          Filter by Category:
        </Heading>
        <List spacing={2} ml={4}>
          {categories.map((category) => (
            <ListItem
              fontWeight={"semibold"}
              key={category}
              _hover={{ cursor: "pointer", color: "gray.500" }}
            >
              {category}
            </ListItem>
          ))}
        </List>
      </Flex>

      <Flex flexDir={"column"}>
        <Heading size="md" mb={2}>
          Filter by Price:
        </Heading>
        <List spacing={2} ml={4}>
          {prices.map((price) => (
            <ListItem
              key={price}
              _hover={{ cursor: "pointer", color: "gray.500" }}
            >
              <Text>{price}</Text>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};

export default SideBar;
