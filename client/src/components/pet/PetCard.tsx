import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PetType } from "../../utils/types";

interface petCardProps {
  Pet: PetType;
}

const PetCard: React.FC<petCardProps> = ({ Pet }) => {
  return (
    <>
      <Link to={`/pet/${Pet.id}`}>
        <Card _hover={{ boxShadow: "xl" }} maxW={"450px"}>
          <Image
            loading="lazy"
            src={Pet.image_url}
            fallbackSrc="https://placehold.jp/3d4070/ffffff/150x150.png?text=No-Image"
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
                <Text color="red.500">{`$${Pet.price}`}</Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default PetCard;
