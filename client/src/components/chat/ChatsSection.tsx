import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import MessageInputBar from "./MessageInputBar";
import ChatsRenderer from "./ChatsRenderer";
import { useLocation } from "react-router-dom";

const ChatsSection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const chatId = queryParams.get("id");
  console.log(chatId);

  if (!chatId) {
    return (
      <Box
        h={"50vh"}
        w={"100%"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading color={"blue.600"}>Pet Connect</Heading>
        <Text>Chat with seller</Text>
      </Box>
    );
  }

  return (
    <Grid templateRows={"repeat(16,1fr)"} height="100%" maxW={"inherit"}>
      <GridItem rowSpan={15} overflowY={"scroll"}>
        <ChatsRenderer />
      </GridItem>
      <GridItem rowSpan={1}>
        <MessageInputBar />
      </GridItem>
    </Grid>
  );
};

export default ChatsSection;
