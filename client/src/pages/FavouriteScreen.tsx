import axios from "axios";
import Cookies from "js-cookie";
import { urls } from "../configs/apis";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { updateFavoritePets } from "../services/redux/slices/favourites.slice";
import { PetType } from "../utils/types";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import PetCard from "../components/pet/PetCard";
import { RootState } from "../services/redux/store";

const FavouriteScreen = () => {
  const { pets, error: Err } = useSelector(
    (state: RootState) => state.FavouritesReducer
  );
  const dispatch = useDispatch();

  const { data, error } = useQuery({
    queryKey: ["favs"],
    queryFn: async () => {
      try {
        const response = await axios.get(urls.favourites, {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        });
        return response.data as { data: { favourites: PetType[] } };
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    },
  });

  if (data) {
    const formattedData = data?.data.favourites;
    dispatch(updateFavoritePets({ pets: formattedData, error: false }));
  }
  if (error) {
    dispatch(updateFavoritePets({ pets: null, error: true }));
  }

  return (
    <Box maxW={"80%"} mx={"auto"}>
      <SimpleGrid columns={[2, null, 3]} gap={10}>
        {Err ? (
          <Heading>error occuredd</Heading>
        ) : pets ? (
          pets.map((entry: PetType) => <PetCard Pet={entry} key={entry.id} />)
        ) : (
          <h1>Loading.....</h1>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default FavouriteScreen;
