import { Box, Flex, Skeleton } from "@chakra-ui/react";

const PetDetailsSkeleton = () => {
  return (
    <Flex justifyContent={"flex-start"} pt={5} gap={5}>
      <Skeleton
        height="250px"
        width={{ base: "100%", md: "400px" }}
        borderRadius="md"
        mb={4}
      />
      <Box>
        <Skeleton height="24px" width="70%" mb={2} />
        <Skeleton height="18px" width="80%" mb={2} />
        <Skeleton height="18px" width="60%" mb={2} />
        <Skeleton height="18px" width="70%" mb={2} />
        <Skeleton height="18px" width="60%" mb={2} />
        <Flex alignItems={"center"} gap={5}>
          <Skeleton height="36px" width="100px" />
          <Skeleton height="36px" width="100px" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default PetDetailsSkeleton;
