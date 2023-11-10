import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";

import { BsFillHeartFill, BsFillChatRightTextFill } from "react-icons/bs";
import { HiOutlineLogin } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/NavLogo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <Flex
        as={"nav"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={32}
      >
        <Link to={"/"}>
          <Image src={logo} h={20} />
        </Link>

        <HStack gap={10}>
          <Link to={"/favourite"}>
            <BsFillHeartFill size={28} color="red" />
          </Link>

          <Link to={"/messages"}>
            <BsFillChatRightTextFill size={28} color="blue" />
          </Link>
          {
            <Link
              to={
                location.pathname == "/user/login"
                  ? "/user/signup"
                  : "/user/login"
              }
            >
              <Button colorScheme={"blue"} gap={1}>
                <Text fontSize={16}>
                  {location.pathname == "/user/login" ? "signup" : "login"}
                </Text>
                <HiOutlineLogin size={24} />
              </Button>
            </Link>
          }
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
