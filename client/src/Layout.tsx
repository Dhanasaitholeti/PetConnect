import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/shared/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Flex flexDir={"column"}>
        <Navbar />
        <Box as="main" mt={10}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
