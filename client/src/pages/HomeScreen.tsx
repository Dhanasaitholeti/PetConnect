import { Box, Grid, GridItem } from "@chakra-ui/react";
import MainSection from "../components/pet/MainSection";
import SideBar from "../components/shared/SideBar";

const HomeScreen = () => {
  return (
    <Box px={{ base: 0, md: 2, "2xl": 16 }}>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(6,1fr)" }}>
        <GridItem as="div">
          <SideBar />
        </GridItem>
        <GridItem as="div" colSpan={5}>
          <MainSection />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomeScreen;
