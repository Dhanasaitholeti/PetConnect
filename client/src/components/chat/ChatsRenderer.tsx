import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

const ChatsRenderer = () => {
  const [messages, setMessages] = useState([
    { id: 1, content: "Hello!", sender: "user" },
    { id: 2, content: "Hi there!", sender: "oppositeParty" },
    // ... more messages
  ]);
  return (
    <Flex flexDir={"column"}>
      {messages.map((message: any) => (
        <Box
          key={message.id}
          p={2}
          borderRadius="md"
          bg={message.sender === "user" ? "teal.200" : "gray.200"}
          alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}
          mb={2}
        >
          {message.content}
        </Box>
      ))}
    </Flex>
  );
};

export default ChatsRenderer;
