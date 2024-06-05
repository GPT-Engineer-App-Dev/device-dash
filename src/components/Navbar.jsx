import { Box, Flex, HStack, IconButton, Link, Spacer, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex alignItems="center">
        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            ElectroShop
          </Link>
          <Link as={RouterLink} to="/products" color="white">
            Products
          </Link>
        </HStack>
        <Spacer />
        <IconButton
          as={RouterLink}
          to="/cart"
          icon={<FaShoppingCart />}
          colorScheme="teal"
          variant="outline"
          aria-label="Cart"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;