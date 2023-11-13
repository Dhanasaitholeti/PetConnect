import { Image, Heading, Text, Button, Flex, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../services/redux/store";
import { useMutation } from "@tanstack/react-query";
import { urls } from "../configs/apis";
import axios from "axios";
import { EnquirePetType, commonCreationResponseData } from "../utils/types";

const PetDetails = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const idFromUrl = location.pathname.split("/")[2];
  const pet = useSelector((state: RootState) =>
    state.PetReducer.pets?.find((entry) => entry.id === idFromUrl)
  );
  const currUser = useSelector((state: RootState) => state.UserReducer.user);
  console.log(currUser);

  const { mutate: enquire } = useMutation({
    mutationFn: async (formData: EnquirePetType) => {
      console.log("working");
      try {
        const response = await axios.post(urls.Enquire, formData);
        return response.data as commonCreationResponseData;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
  });

  const handleEnquire = (sellerId: string, buyerId: string) => {
    console.log("working");

    enquire(
      {
        user1Id: sellerId,
        user2Id: buyerId,
      },
      {
        onSuccess: () => {
          toast({
            isClosable: true,
            duration: 3000,
            status: "success",
            position: "top",
            variant: "solid",
            title: "chat creation successful",
          });
          navigate("/chats");
        },
        onError: () => {
          toast({
            isClosable: true,
            duration: 3000,
            status: "error",
            position: "top",
            variant: "solid",
            title: "chat creation failed",
          });
        },
      }
    );
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
            <Button colorScheme="pink" mt={4}>
              Favourite
            </Button>
            <Button
              onClick={() => handleEnquire(pet!.userid, currUser!.id)}
              colorScheme="teal"
              mt={4}
            >
              Enquire
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PetDetails;
