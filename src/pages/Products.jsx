import { Box, Button, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "path/to/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "path/to/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "path/to/headphones.jpg" },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Products
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <VStack spacing={2} align="start">
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text fontSize="lg" color="teal.600">{product.price}</Text>
              <Button colorScheme="teal">Add to Cart</Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;