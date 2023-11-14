import { Flex, Grid, GridItem } from "@chakra-ui/react";
import InputMsg from "./InputMsg";
import ChatsRenderer from "./ChatsRenderer";

const ChatsSection = () => {
  return (
    <Grid templateRows={"repeat(16,1fr)"} height="100%">
      <GridItem rowSpan={15} overflowY={"scroll"}>
        <ChatsRenderer />
      </GridItem>
      <GridItem rowSpan={1}>
        <InputMsg />
      </GridItem>
    </Grid>
  );
};

export default ChatsSection;
