import {
  Box,
  Button,
  ButtonSpinner,
  Flex,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useReducer } from "react";
import {
  addPetState as State,
  addPetAction as Action,
  commonCreationResponseData,
} from "../utils/types";
import { useMutation } from "@tanstack/react-query";
import { urls } from "../configs/apis";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../services/redux/store";
import useCustomToast from "../hooks/useCustomToast";

interface newPetForm extends State {
  userid: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_BREED":
      return { ...state, breed: action.payload };
    case "SET_IMAGE_URL":
      return { ...state, imageUrl: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "RESET_FORM":
      return {
        ...state,
        category: "",
        breed: "",
        imageUrl: "",
        description: "",
        price: 0,
      };
    default:
      return state;
  }
};

const AddPet = () => {
  const showToast = useCustomToast();
  const user = useSelector((state: RootState) => state.UserReducer.user);

  const { isPending, mutate } = useMutation({
    mutationFn: async (formData: newPetForm) => {
      const response = await axios.post(urls.addPet, formData);
      return response.data as commonCreationResponseData;
    },
  });

  const initialState: State = {
    category: "",
    breed: "",
    imageUrl: "",
    description: "",
    price: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    // Implement your submission logic using the state values
    mutate(
      {
        ...state,
        userid: user!.id,
      },
      {
        onSuccess: () => {
          showToast({
            status: "success",
            title: "Pet added successfully",
          });
          dispatch({ type: "RESET_FORM" });
        },
        onError: (error: Error) => {
          showToast({
            status: "error",
            title: "Error occured",
            description: `${error.message} error has occured, Try Again`,
          });
        },
      }
    );
  };

  return (
    <>
      <Flex
        flexDir={"column"}
        maxW={"2xl"}
        mx={"auto"}
        p={5}
        gap={5}
        dropShadow={"xl"}
      >
        <Heading textAlign={"center"}>Add a New Pet to Store</Heading>
        <Flex gap={5}>
          <Box width={"full"}>
            <FormLabel>Pet Category:</FormLabel>
            <Select
              placeholder="select category"
              variant="filled"
              onChange={(e) =>
                dispatch({ type: "SET_CATEGORY", payload: e.target.value })
              }
              value={state.category}
            >
              <option value="dogs">Dogs</option>
              <option value="cats">Cats</option>
              <option value="rabbits">Rabbits</option>
              <option value="squirrels">Squirrels</option>
              <option value="others">Others</option>
            </Select>
          </Box>
          <Box width={"full"}>
            <FormLabel>Pet Breed:</FormLabel>

            <Input
              type="text"
              placeholder="Enter the breed of the pet"
              variant="filled"
              onChange={(e) =>
                dispatch({ type: "SET_BREED", payload: e.target.value })
              }
              value={state.breed}
            />
          </Box>
        </Flex>
        <Flex flexDir={"column"} gap={5}>
          <Box>
            <FormLabel>Image URL:</FormLabel>
            <Input
              type="text"
              placeholder="Enter the image url of the animal"
              variant="filled"
              onChange={(e) =>
                dispatch({ type: "SET_IMAGE_URL", payload: e.target.value })
              }
              value={state.imageUrl}
            />
          </Box>
          <Box>
            <FormLabel>Description:</FormLabel>
            <Textarea
              placeholder="Enter some Description about the pet"
              variant="filled"
              onChange={(e) =>
                dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
              }
              value={state.description}
            />
          </Box>
          <Box>
            <FormLabel>Price:</FormLabel>
            <Input
              type="number"
              placeholder="Enter price of the pet in $$"
              variant="filled"
              onChange={(e) =>
                dispatch({
                  type: "SET_PRICE",
                  payload: parseFloat(e.target.value),
                })
              }
              value={state.price}
            />
          </Box>
        </Flex>
        <Flex>
          <Button colorScheme="blue" onClick={handleSubmit} w={"30%"}>
            {isPending ? <ButtonSpinner /> : "submit"}
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default AddPet;
