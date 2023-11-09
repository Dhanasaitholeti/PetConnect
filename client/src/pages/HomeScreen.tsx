import { Box, Grid, GridItem } from "@chakra-ui/react";
import MainSection from "../components/pet/MainSection";
import SideBar from "../components/shared/SideBar";

const HomeScreen = () => {
  return (
    <Box px={16}>
      <Grid templateColumns={"repeat(6,1fr)"}>
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
