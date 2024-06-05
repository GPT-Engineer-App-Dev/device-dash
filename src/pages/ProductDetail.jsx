import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";

const product = {
  id: 1,
  name: "Smartphone",
  price: "$699",
  description: "A high-end smartphone with a sleek design and powerful features.",
  image: "path/to/smartphone.jpg",
};

const ProductDetail = () => {
  return (
    <Box p={4}>
      <VStack spacing={6} align="start">
        <Image src={product.image} alt={product.name} />
        <Heading as="h2" size="xl">{product.name}</Heading>
        <Text fontSize="2xl" color="teal.600">{product.price}</Text>
        <Text>{product.description}</Text>
        <Button colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;