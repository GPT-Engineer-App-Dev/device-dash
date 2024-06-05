import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to ElectroShop
          </Heading>
          <Text fontSize="lg" mb={6}>
            Your one-stop shop for the latest and greatest in electronics.
          </Text>
          <Button as={Link} to="/products" colorScheme="teal" size="lg">
            Shop Now
          </Button>
        </Box>
        <Box w="100%" py={10} px={6} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="xl" mb={4} textAlign="center">
            Featured Products
          </Heading>
          {/* Placeholder for featured products */}
          <Text textAlign="center">Featured products will be displayed here.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;