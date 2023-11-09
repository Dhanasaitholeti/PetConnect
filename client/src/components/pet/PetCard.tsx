import { Card, CardBody } from "@chakra-ui/react";

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
      <Card>
        <CardBody>{Pet.description}</CardBody>
      </Card>
    </>
  );
};

export default PetCard;
