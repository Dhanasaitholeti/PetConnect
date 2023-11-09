import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Flex flexDir={"column"}>
        <Navbar />
        <Flex>
          <SideBar />
          <Box as="main">{children}</Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
