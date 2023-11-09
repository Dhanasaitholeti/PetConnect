import { Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Flex as={"nav"}>
        <Heading as={"h3"} fontSize={32}>
          This is navbar
        </Heading>
      </Flex>
    </>
  );
};

export default Navbar;
