import { SimpleGrid } from "@chakra-ui/react";
import PetCard from "./PetCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { urls } from "../../configs/apis";
import { PetType } from "../../utils/types";
import { updatePets } from "../../services/redux/slices/pet.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { useLocation } from "react-router-dom";

const MainSection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get("price");
  const category = queryParams.get("category");

  const dispatch = useDispatch();
  const { error, pets } = useSelector((state: RootState) => state.PetReducer);

  let filteredPets;

  if (category) {
    filteredPets =
      pets &&
      pets?.filter((pet) => pet.category === category.toLocaleLowerCase());
  } else {
    filteredPets = pets;
  }

  if (price) {
    let sortedPets = filteredPets && [...filteredPets]; // Create a copy of the array

    if (price === "low-to-high") {
      sortedPets?.sort((a, b) => a.price - b.price);
    } else if (price === "high-to-low") {
      sortedPets?.sort((a, b) => b.price - a.price);
    }

    filteredPets = sortedPets; // Assign the sorted array back to filteredPets
  }

  useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      try {
        const response = await axios.get(urls.getPets);
        dispatch(updatePets({ pets: response.data, error: false }));
        return response.data as PetType[];
      } catch (error) {
        dispatch(updatePets({ pets: null, error: true }));
        console.error("Login error:", error);
        throw error;
      }
    },
  });

  return (
    <>
      <SimpleGrid columns={[2, null, 3, 3, 4]} gap={3}>
        {error ? (
          <h1>error occuredd</h1>
        ) : pets ? (
          filteredPets?.map((entry: PetType) => (
            <PetCard Pet={entry} key={entry.id} />
          ))
        ) : (
          <h1>Loading.....</h1>
        )}
      </SimpleGrid>
    </>
  );
};

export default MainSection;
