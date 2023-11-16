import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";

interface ErrorProps {
  errorMessage: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent={"center"}
      maxWidth={"md"}
      w="100%"
      h="25vh"
      mt={4}
    >
      <Alert status="error" borderRadius="md">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle> 500 Server Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Box>
      </Alert>
    </Flex>
  );
};

export default ErrorComponent;
