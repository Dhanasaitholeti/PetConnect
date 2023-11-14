import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GetDateTime } from "../../utils/helpers/getDateTime";
import { useState } from "react";
import { newMsgs } from "../../services/redux/slices/chat.slice";
import { emitMessage } from "../../services/websocket";

interface Props {
  defaultmsg?: string;
}

const InputMsg: React.FC<Props> = ({ defaultmsg }) => {
  const [msg, setMsg] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const currentuser = useSelector((state: RootState) => state.UserReducer.user);
  const queryParams = new URLSearchParams(location.search);
  const chatId = queryParams.get("id");

  const createMsgObj = (content?: string) => {
    return {
      id: uuidv4(),
      content: content || msg,
      senderId: currentuser?.id!,
      chatId: chatId!,
      sentTime: GetDateTime(),
    };
  };

  if (defaultmsg) {
    const firstMsg = createMsgObj(defaultmsg);
    dispatch(newMsgs({ message: firstMsg }));
    emitMessage({
      content: defaultmsg,
      senderId: currentuser?.id,
      chatId,
    });
  }

  const handleOnChange = (e: any) => {
    setMsg(e.target.value);
  };

  const handleSendMsg = () => {
    const redmsg = createMsgObj();
    dispatch(newMsgs({ message: redmsg }));
    emitMessage({
      content: msg,
      senderId: currentuser?.id,
      chatId,
    });
    setMsg("");
  };

  return (
    <InputGroup>
      <Input
        onChange={(e) => handleOnChange(e)}
        type="text"
        value={msg}
        placeholder="Type your message..."
        borderRadius="md"
        bg="white"
        borderColor="gray.300"
        _hover={{ borderColor: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "outline" }}
      />
      <InputRightElement width="4.5rem" onClick={handleSendMsg}>
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
