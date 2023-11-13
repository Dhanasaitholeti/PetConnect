import { useToast, UseToastOptions } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();

  const showToast = (options: UseToastOptions) => {
    toast({
      isClosable: true,
      duration: 3000,
      position: "top",
      variant: "solid",
      ...options,
    });
  };

  return showToast;
};

export default useCustomToast;
