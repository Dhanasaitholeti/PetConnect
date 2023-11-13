import { Heading, List, ListItem, Text } from "@chakra-ui/react";

const ChatsSidebar = () => {
  return (
    <>
      <Heading mb={4}>Chat List</Heading>
      <List spacing={2} pl={2}>
        <ListItem>
          <Text fontWeight="bold">Chat 1</Text>
        </ListItem>
      </List>
    </>
  );
};

export default ChatsSidebar;
