"use client";

import { Box, Text, Button, VStack, Link, Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
      bgImage="url('/images/not-found-background.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
    >
      <Box bg="rgba(0, 0, 0, 0.7)" p={8} borderRadius="lg" textAlign="center">
        <VStack spacing={4}>
          <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            404 - Page Not Found
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }}>
            Oops! The page you are looking for does not exist.
          </Text>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button colorScheme="teal" leftIcon={<Icon as={FaHome} />}>
              Go to Home
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
