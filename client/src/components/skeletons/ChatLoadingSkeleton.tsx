import { Skeleton, VStack } from "@chakra-ui/react";

const ListLoadingSkeleton = ({ itemCount = 10 }) => {
  return (
    <VStack spacing={4} align="stretch" p={5}>
      {[...Array(itemCount)].map((_, index) => (
        <Skeleton key={index} height="40px" />
      ))}
    </VStack>
  );
};

export default ListLoadingSkeleton;
