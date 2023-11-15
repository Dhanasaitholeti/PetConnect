import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../services/redux/store";
import { messageType } from "../../utils/types/chatSlice.types";
import { useEffect, useRef } from "react";

const ChatsRenderer = () => {
  const location = useLocation();
  const endRef = useRef<HTMLDivElement>(null);

  const queryParams = new URLSearchParams(location.search);
  const chatId = queryParams.get("id");

  const currentuser = useSelector((state: RootState) => state.UserReducer.user);
  const chats = useSelector(
    (state: RootState) =>
      chatId && state.ChatReducer.chats && state.ChatReducer.chats[chatId!]
  );
  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  if (!chats) {
    return <p>start a conversation....</p>;
  }

  return (
    <Flex flexDir={"column"}>
      {chats?.length! > 0 &&
        chats?.map((message: messageType) => (
          <Box
            key={message.id}
            p={2}
            borderRadius="md"
            bg={message.senderId === currentuser?.id ? "blue.500" : "gray.200"}
            textColor={
              message.senderId === currentuser?.id
                ? "whiteAlpha.800"
                : "blackAlpha.800"
            }
            fontWeight={"semibold"}
            alignSelf={
              message.senderId === currentuser?.id ? "flex-end" : "flex-start"
            }
            mb={2}
          >
            {message.content}
          </Box>
        ))}
      <div ref={endRef}></div>
    </Flex>
  );
};

export default ChatsRenderer;
