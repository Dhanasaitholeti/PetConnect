import { Grid, GridItem } from "@chakra-ui/react";
import ChatsSidebar from "../components/chat/ChatsSidebar";
import ChatsSection from "../components/chat/ChatsSection";
import { useEffect } from "react";
import { InitializeSocket, socket } from "../services/websocket";


const ChatScreen = () => {


  useEffect(() => {
    if (!socket?.connected) {
      InitializeSocket();
    }

    return () => {
      socket?.disconnect();
    };
  }, []);

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
        <GridItem p={4} colSpan={4} overflowY={"scroll"}>
          <ChatsSection />
        </GridItem>
      </Grid>
    </>
  );
};

export default ChatScreen;
