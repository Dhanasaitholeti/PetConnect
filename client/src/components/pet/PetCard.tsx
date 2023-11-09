import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface PetProps {
  Pet: {
    id: string;
    category: string;
    breed: string;
    description: string;
    price: number;
    img_url: string;
  };
}

const PetCard: React.FC<PetProps> = ({ Pet }) => {
  return (
    <>
      <Link to={`/pet/${Pet.id}`}>
        <Card _hover={{ boxShadow: "xl" }}>
          <Image
            src={Pet.img_url}
            alt={Pet.breed}
            height="200px"
            objectFit="cover"
            borderTopRadius={"inherit"}
          />
          <CardBody>
            <Flex justify="space-between" align="center">
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {Pet.breed}
                </Text>
                <Text color="red.500">{`$${Pet.price.toFixed(2)}`}</Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default PetCard;
