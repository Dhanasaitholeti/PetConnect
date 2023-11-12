import { Image, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../services/redux/store";

const PetDetails = () => {
  const location = useLocation();
  const idFromUrl = location.pathname.split("/")[2];
  const pet = useSelector((state: RootState) =>
    state.PetReducer.pets?.find((entry) => entry.id === idFromUrl)
  );

  const handleEnquire = () => {
    console.log("looged data");
  };

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        gap={10}
        p={4}
        boxShadow="lg"
        maxW={"60%"}
        margin="auto"
        flexDirection={{ base: "column", md: "row" }}
        mb={8}
      >
        <Image
          src={pet?.image_url}
          fallbackSrc={
            "https://placehold.jp/3d4070/ffffff/150x150.png?text=No-Image"
          }
          alt={pet?.breed}
          boxSize={{ base: "100%", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
        />

        <Flex flexDir={"column"}>
          <Heading as="h2" size="lg" mb={2}>
            {pet?.breed}
          </Heading>
          <Text fontSize="md" mb={2}>
            {pet?.description}
          </Text>
          <Text>
            <strong>Category:</strong> {pet?.category}
          </Text>
          <Text>
            <strong>Price:</strong> ${pet?.price}
          </Text>
          <Text>
            <strong>Seller ID:</strong> {pet?.userid}
          </Text>
          <Flex alignItems={"center"} gap={5}>
            <Button onClick={handleEnquire} colorScheme="pink" mt={4}>
              Favourite
            </Button>
            <Button onClick={handleEnquire} colorScheme="teal" mt={4}>
              Enquire
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PetDetails;
