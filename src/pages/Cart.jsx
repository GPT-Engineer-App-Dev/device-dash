import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

const cartItems = [
  { id: 1, name: "Smartphone", price: "$699", quantity: 1 },
  { id: 2, name: "Laptop", price: "$999", quantity: 1 },
];

const Cart = () => {
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Shopping Cart
      </Heading>
      <VStack spacing={4} align="start">
        {cartItems.map((item) => (
          <HStack key={item.id} justify="space-between" w="100%">
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </HStack>
        ))}
        <HStack justify="space-between" w="100%" pt={4} borderTop="1px" borderColor="gray.200">
          <Heading as="h3" size="lg">Total</Heading>
          <Text fontSize="2xl" color="teal.600">${totalPrice.toFixed(2)}</Text>
        </HStack>
        <Button colorScheme="teal" size="lg" w="100%">Proceed to Checkout</Button>
      </VStack>
    </Box>
  );
};

export default Cart;