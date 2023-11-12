import {
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { BsFillHeartFill, BsFillChatRightTextFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/NavLogo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    Cookies.remove("authToken");
    navigate("/");
    toast({
      title: "logged out",
      status: "info",
      isClosable: true,
      duration: 3000,
      position: "top",
    });
  };

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

        <HStack gap={10} alignItems={"center"}>
          <Link to={"/favourite"}>
            <BsFillHeartFill size={28} color="red" />
          </Link>

          <Link to={"/chats"}>
            <BsFillChatRightTextFill size={28} color="blue" />
          </Link>

          {Cookies.get("authToken") ? (
            <Menu>
              <MenuButton>
                <FaUserAlt size={28} color="blue" />
              </MenuButton>
              <MenuList>
                <Link to={"/user/profile"}>
                  <MenuItem>
                    <Text fontWeight={"semibold"}>Profile</Text>
                  </MenuItem>
                </Link>
                <Link to={"/pet/add"}>
                  <MenuItem>
                    <Text fontWeight={"semibold"}>Add a Pet</Text>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>
                  <Text fontWeight={"semibold"} color={"red.500"}>
                    logout
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
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
          )}
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
