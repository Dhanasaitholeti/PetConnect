import { Image, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../services/redux/store";
import { useMutation } from "@tanstack/react-query";
import { urls } from "../configs/apis";
import axios from "axios";
import { EnquirePetType, commonCreationResponseData } from "../utils/types";
import useCustomToast from "../hooks/useCustomToast";

interface enquirePetResponseType extends commonCreationResponseData {
  chatid: string;
}

const PetDetails = () => {
  const showToast = useCustomToast();
  const navigate = useNavigate();
  const location = useLocation();
  const idFromUrl = location.pathname.split("/")[2];
  const pet = useSelector((state: RootState) =>
    state.PetReducer.pets?.find((entry) => entry.id === idFromUrl)
  );
  const currentUser = useSelector((state: RootState) => state.UserReducer.user);

  const { mutate: enquire } = useMutation({
    mutationFn: async (formData: EnquirePetType) => {
      try {
        const response = await axios.post(urls.Enquire, formData);
        return response.data as enquirePetResponseType;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
  });

  const { mutate: starit } = useMutation({
    mutationFn: async (data: { userId: string; petId: string }) => {
      try {
        const response = await axios.post(urls.starpet, data);
        return response.data as commonCreationResponseData;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
  });

  const handleEnquire = (sellerId: string, buyerId: string) => {
    enquire(
      {
        user1Id: sellerId,
        user2Id: buyerId,
      },
      {
        onSuccess: (data) => {
          console.log(data.chatid);
          showToast({
            status: "success",
            title: "Enquiry creation successful",
          });
          navigate(`/chats/?id=${data.chatid}`, {
            state: {
              defaultmsg:
                "I am intrested in buying this pet, let's discuss further",
            },
          });
        },
        onError: () => {
          showToast({
            status: "error",
            title: "Enquiry creation failed",
          });
        },
      }
    );
  };

  const handleStarIt = () => {
    if (currentUser)
      starit({
        userId: currentUser?.id,
        petId: idFromUrl,
      });
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
            <Button colorScheme="pink" mt={4} onClick={handleStarIt}>
              Favourite
            </Button>
            <Button
              onClick={() => handleEnquire(pet!.userid, currentUser!.id)}
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
