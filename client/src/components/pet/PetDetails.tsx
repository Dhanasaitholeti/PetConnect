import { Container } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const PetDetails = () => {
  const location = useLocation();
  return (
    <>
      <Container maxW={"4xl"} bgColor={"red.100"}>
        <h1>pet Details will appear here</h1>
        <h2>{"the path is " + location.pathname}</h2>
      </Container>
    </>
  );
};

export default PetDetails;
