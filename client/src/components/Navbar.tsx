import { Flex, HStack, Image } from "@chakra-ui/react";
import { BsFillHeartFill, BsFillChatRightTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/images/NavLogo.png";

const Navbar = () => {
  return (
    <>
      <Flex
        as={"nav"}
        alignItems={"center"}
        justifyContent={"space-between"}
        // py={3}
        px={32}
        shadow={"lg"}
      >
        <Image src={logo} h={20} />

        <HStack gap={10}>
          <Link to={"/favourite"}>
            <BsFillHeartFill size={28} color="red" />
          </Link>

          <Link to={"/messages"}>
            <BsFillChatRightTextFill size={28} color="blue" />
          </Link>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
