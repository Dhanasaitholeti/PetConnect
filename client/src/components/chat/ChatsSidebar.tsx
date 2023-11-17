import { Box, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { Link } from "react-router-dom";

const ChatsSidebar = () => {
  const chatslist = useSelector((state: RootState) => state.ChatReducer.list);

  return (
    <Box py={4} height="100%" bgColor={"#F5F5F5"}>
      <Heading mb={4} fontSize="xl">
        Your Chats:
      </Heading>
      {chatslist?.map((entry) => (
        <Link to={`/chats/?id=${entry.id}`} key={entry.id}>
          <Box
            pl={2}
            py={2}
            borderY={"1px solid #C0C0C0"}
            _hover={{ backgroundColor: "#C0C0C0" }}
          >
            <Text fontWeight="bold" fontSize={"xl"}>
              {entry.partner}
            </Text>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ChatsSidebar;
