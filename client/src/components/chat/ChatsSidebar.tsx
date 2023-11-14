import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { Link } from "react-router-dom";

const ChatsSidebar = () => {
  const chatslist = useSelector((state: RootState) => state.ChatReducer.list);

  return (
    <Box p={4} height="100%" borderRight={"1px solid gray"}>
      <Heading mb={4} fontSize="xl">
        Chat List
      </Heading>

      <List spacing={2}>
        {chatslist?.map((entry) => (
          <Link to={`/chats/?id=${entry.id}`} key={entry.id}>
            <ListItem
              p={2}
              borderRadius="md"
              _hover={{ backgroundColor: "#89CFF0" }}
            >
              <Text fontWeight="bold">{entry.partner}</Text>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default ChatsSidebar;
