import { Flex } from "@chakra-ui/react";
import InputMsg from "./InputMsg";
import ChatsRenderer from "./ChatsRenderer";

const ChatsSection = () => {
  
  return (
    <Flex flexDir="column" height="100%" justifyContent="space-between">
      <ChatsRenderer />
      <InputMsg />
    </Flex>
  );
};

export default ChatsSection;
