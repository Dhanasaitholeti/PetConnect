import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { urls } from "../configs/apis";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonSpinner,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
} from "@chakra-ui/react";
import { commonCreationResponseData, singupFormData } from "../utils/types";
import useCustomToast from "../hooks/useCustomToast";

const SignupScreen = () => {
  const showToast = useCustomToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { isPending, mutate } = useMutation({
    mutationFn: async (formData: singupFormData) => {
      try {
        // Your login mutation logic using axios or another method
        const response = await axios.post(urls.signup, formData);
        return response.data as commonCreationResponseData;
      } catch (error) {
        // Handle errors, you may want to throw the error here to trigger the `onError` callback
        console.error("Login error:", error);
        throw error;
      }
    },
  });

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      showToast({
        status: "error",
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
      });

      return;
    }

    mutate(formData, {
      onSuccess: () => {
        navigate("/user/login");
        showToast({
          status: "success",
          title: "New user Added",
          description: `Try to Login with credentials`,
        });
      },
      onError: (error: Error) => {
        showToast({
          status: "error",
          title: "Error occured",
          description: `${error.message} error has occured, Try Again`,
        });
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
          <Heading textAlign={"center"}>create new account</Heading>
        </CardHeader>
        <CardBody display={"flex"} flexDir={"column"} gap={5} px={10}>
          <Input
            type="text"
            placeholder="Enter your name"
            variant={"filled"}
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />

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
          <Input
            type="password"
            placeholder="Confirm your password"
            variant={"filled"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange(e)}
          />
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"center"}>
          <Button w={"50%"} colorScheme="blue" onClick={handleSignup}>
            {isPending ? <ButtonSpinner /> : "signup"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupScreen;
