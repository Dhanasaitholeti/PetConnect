import { Grid, GridItem } from "@chakra-ui/react";
import ChatsSidebar from "../components/chat/ChatsSidebar";
import ChatsSection from "../components/chat/ChatsSection";

const ChatScreen = () => {
  return (
    <>
      <Grid
        maxW={"80%"}
        mx={"auto"}
        height="80vh"
        templateColumns={"repeat(5,1fr)"}
        shadow={"md"}
      >
        <GridItem>
          <ChatsSidebar />
        </GridItem>

        <GridItem p={4} colSpan={4} overflow={"scroll"}>
          <ChatsSection />
        </GridItem>
      </Grid>
    </>
  );
};

export default ChatScreen;
