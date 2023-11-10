import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
} from "@chakra-ui/react";

const LoginScreen = () => {
  return (
    <>
      <Card maxW={"lg"} mx={"auto"}>
        <CardHeader>
          <Heading textAlign={"center"}>Log into account </Heading>
        </CardHeader>
        <CardBody display={"flex"} flexDir={"column"} gap={5} px={10}>
          <Input
            type="email"
            placeholder="Enter your email"
            variant={"filled"}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            variant={"filled"}
          />
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"center"}>
          <Button w={"50%"} colorScheme="blue">
            login
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginScreen;
