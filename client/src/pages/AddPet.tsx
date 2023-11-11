import {
  Box,
  Button,
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
    default:
      return state;
  }
};

const AddPet = () => {
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
    mutate({
      ...state,
      userid: "safm",
    });
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
          <Button colorScheme="blue">submit</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default AddPet;

// id          String @id @default(uuid())
// category    String
// breed       String
// description String
// image_url   String
// price       Float
// seller      user   @relation(fields: [userid], references: [id])
// userid      String