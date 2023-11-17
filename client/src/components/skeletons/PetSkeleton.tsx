import { Skeleton } from "@chakra-ui/react";

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PetSkeleton = () => {
  return (
    <>
      {arr.map((entry) => (
        <Skeleton
          aspectRatio={1 / 0.7}
          width="100%"
          my={2}
          key={entry}
          borderRadius="md"
        />
      ))}
    </>
  );
};

export default PetSkeleton;
