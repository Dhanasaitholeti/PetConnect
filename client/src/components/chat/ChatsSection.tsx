import { Grid, GridItem } from "@chakra-ui/react";
import MessageInputBar from "./MessageInputBar";
import ChatsRenderer from "./ChatsRenderer";

const ChatsSection = () => {
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
