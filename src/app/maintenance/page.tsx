"use client"; // Making this page a client component since App router in NEXTJS use server components by default
import { Box, Text, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaX } from "react-icons/fa6";

// Extend Chakra theme to include the Poppins font
const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      blue: "#007BFF",
      green: "#28A745",
    },
  },
});

const MaintenancePage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={4}
        bgImage="url('/images/main-slider/image-4.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        color="white"
      >
        <Box bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="lg">
          <VStack spacing={6} textAlign="center">
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              color="brand.blue"
            >
              Center for Research and Development in Population Health (CRDPH)
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              color="brand.green"
            >
              “Improving Health and Transforming Health Systems”
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }}>
              Our site is currently under maintenance. We’ll be back shortly.
              Thank you for your understanding!
            </Text>
            <Text fontSize="md">
              For inquiries, contact us at: <br />
              Email:{" "}
              <Link href="mailto:info@crdph.org" color="brand.blue">
                info@crdph.org
              </Link>{" "}
              <br />
              Phone:{" "}
              <Link href="tel:+211926726783" color="brand.blue">
                +211926726783
              </Link>
              <br />
              {/* Visit us at:{" "}
              <Link href="https://www.crdph.org" color="brand.blue" isExternal>
                www.crdph.org
              </Link> */}
            </Text>
            <HStack spacing={4} justify="center">
              <Link href="https://facebook.com/crdphsouthsudan" isExternal>
                <Icon as={FaFacebookF} boxSize={6} color="brand.blue" />
              </Link>
              <Link href="https://x.com/crdphsouthsudan" isExternal>
                <Icon as={FaX} boxSize={6} color="brand.blue" />
              </Link>
              <Link
                href="https://linkedin.com/company/crdphsouthsudan"
                isExternal
              >
                <Icon as={FaLinkedinIn} boxSize={6} color="brand.blue" />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default MaintenancePage;
