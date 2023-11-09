import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/shared/Navbar";
import SideBar from "./components/shared/SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Flex flexDir={"column"}>
        <Navbar />
        <Box as="main">{children}</Box>
      </Flex>
    </>
  );
};

export default Layout;
