import { SimpleGrid } from "@chakra-ui/react";
import { petsData } from "../../utils/Data";
import PetCard from "./PetCard";

const MainSection = () => {
  return (
    <>
      <SimpleGrid columns={[2, null, 3]} gap={10}>
        {petsData.map((entry) => (
          <PetCard Pet={entry} key={entry.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainSection;
