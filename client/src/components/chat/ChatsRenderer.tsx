import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../services/redux/store";
import { messageType } from "../../utils/types/chatSlice.types";

const ChatsRenderer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const chatId = queryParams.get("id");

  const currentuser = useSelector((state: RootState) => state.UserReducer.user);
  const chats = useSelector(
    (state: RootState) =>
      chatId && state.ChatReducer.chats && state.ChatReducer.chats[chatId!]
  );


  if (!chats) {
    return <p>welcome to chat screen</p>;
  }

  return (
    <Flex flexDir={"column"}>
      {chats?.length! > 0 ? (
        chats?.map((message: messageType) => (
          <Box
            key={message.id}
            p={2}
            borderRadius="md"
            bg={message.senderId === currentuser?.id ? "teal.200" : "gray.200"}
            alignSelf={
              message.senderId === currentuser?.id ? "flex-end" : "flex-start"
            }
            mb={2}
          >
            {message.content}
          </Box>
        ))
      ) : (
        <p>start a conversation....</p>
      )}
    </Flex>
  );
};

export default ChatsRenderer;
