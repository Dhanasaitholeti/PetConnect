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
        maxW={{ base: "95%", "2xl": "90%" }}
        mx={"auto"}
        height="80vh"
        templateColumns={{ base: "1fr", md: "repeat(10,1fr)" }}
        shadow={"md"}
      >
        <GridItem colSpan={{ md: 3, lg: 2 }}>
          <ChatsSidebar />
        </GridItem>
        <GridItem
          p={4}
          colSpan={{ md: 7, lg: 8 }}
          display={{ base: "none", md: "block" }}
          overflowY={"hidden"}
        >
          <ChatsSection />
        </GridItem>
      </Grid>
    </>
  );
};

export default ChatScreen;
