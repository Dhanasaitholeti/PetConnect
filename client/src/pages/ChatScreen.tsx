import {
  Box,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

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
        <GridItem p={4} bgColor={"gray.200"}>
          <Heading mb={4}>Chat List</Heading>
          <List spacing={2}>
            <ListItem>
              <Text fontWeight="bold">Chat 1</Text>
            </ListItem>
          </List>
        </GridItem>

        <GridItem p={4} colSpan={4}>
          <p>
            render chats Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Officia quas totam mollitia, vel eius tempore non consectetur
            quia minima ducimus error facilis debitis quos at cum inventore sunt
            itaque. Atque.
          </p>
        </GridItem>
      </Grid>
    </>
  );
};

export default ChatScreen;
