import {
  Button,
  ButtonSpinner,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { urls } from "../configs/apis";
import axios from "axios";
import { LoginFormData, LoginResponseData } from "../utils/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { updateuser } from "../services/redux/slices/user.slice";

const LoginScreen = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (formData: LoginFormData) => {
      try {
        // Your login mutation logic using axios or another method
        const response = await axios.post(urls.login, formData);
        return response.data as LoginResponseData;
      } catch (error) {
        // Handle errors, you may want to throw the error here to trigger the `onError` callback
        console.error("Login error:", error);
        throw error;
      }
    },
  });

  const handleLogin = () => {
    // Call the mutation function with the form data
    mutate(formData, {
      onSuccess: (data) => {
        toast({
          isClosable: true,
          duration: 3000,
          status: "success",
          position: "top",
          variant: "solid",
          title: "Loggedin successfully",
        });
        Cookies.set("authToken", data.token);
        disptach(updateuser({ user: data.user, error: false }));
        navigate("/");
      },
      onError: (error) => {
        toast({
          isClosable: true,
          duration: 3000,
          status: "error",
          position: "top",
          variant: "solid",
          title: "Error occured",
          description: `${error.message} error has occured, Try Again`,
        });
        disptach(updateuser({ user: null, error: true }));
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            variant={"filled"}
            name="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e)}
          />
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"center"}>
          <Button w={"40%"} colorScheme="blue" onClick={handleLogin}>
            {isPending ? <ButtonSpinner /> : "login"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginScreen;
