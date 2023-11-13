import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const InputMsg = () => {
  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="Type your message..."
        borderRadius="md"
        bg="white"
        borderColor="gray.300"
        _hover={{ borderColor: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "outline" }}
      />
      <InputRightElement width="4.5rem">
        <IconButton
          colorScheme="teal"
          aria-label="Send message"
          icon={<FaPaperPlane />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default InputMsg;
