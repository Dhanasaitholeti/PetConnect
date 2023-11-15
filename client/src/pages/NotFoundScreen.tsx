import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading fontSize="6xl" color="red.500">
        404
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Page Not Found
      </Text>
      <Text fontSize="lg" mb={8}>
        The page you are looking for might be in another universe.
      </Text>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Text color="blue.500" fontSize="lg" fontWeight="bold">
          Go back home
        </Text>
      </Link>
    </Box>
  );
};

export default NotFoundScreen;
