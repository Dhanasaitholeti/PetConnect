import { Flex } from "@chakra-ui/react";
import InputMsg from "./InputMsg";
import ChatsRenderer from "./ChatsRenderer";
import { useLocation } from "react-router-dom";

const ChatsSection = () => {
  const location = useLocation();
  console.log(location.state);
  
  return (
    <Flex flexDir="column" height="100%" justifyContent="space-between">
      <ChatsRenderer />
      <InputMsg defaultmsg={location.state?.defaultmsg} />
    </Flex>
  );
};

export default ChatsSection;
