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
import { useState, useEffect } from "react";
import { newMsgs } from "../../services/redux/slices/chat.slice";
import { emitMessage } from "../../services/websocket";

const MessageInputBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentuser = useSelector((state: RootState) => state.UserReducer.user);
  const queryParams = new URLSearchParams(location.search);
  const chatId = queryParams.get("id");

  const chats = useSelector(
    (state: RootState) =>
      chatId && state.ChatReducer.chats && state.ChatReducer.chats[chatId!]
  );

  console.log(chats);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (chats && chats.length === 0) {
      setMsg("I am interested in buying this pet,let's discuss further");
    }
  }, [chatId]);

  const createMsgObj = () => {
    return {
      id: uuidv4(),
      content: msg,
      senderId: currentuser?.id!,
      chatId: chatId!,
      sentTime: GetDateTime(),
    };
  };

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
    <InputGroup pos={"relative"} zIndex={10}>
      <Input
        variant={"filled"}
        onChange={(e) => handleOnChange(e)}
        type="text"
        value={msg}
        placeholder="Type your message..."
        borderRadius="md"
        borderColor="gray.300"
      />
      <InputRightElement width="4.5rem" onClick={handleSendMsg} pos={"inherit"}>
        <IconButton
          colorScheme="blue"
          aria-label="Send message"
          icon={<FaPaperPlane />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default MessageInputBar;
