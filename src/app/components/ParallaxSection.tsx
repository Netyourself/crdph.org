import { Box, Container, Heading, Text } from "@chakra-ui/react";

export const ParallaxSection = () => (
  <Box
    bgImage="url('/images/background/3.jpg')"
    bgPos="center"
    bgSize="cover"
    py={20}
    display="none" // Adjust or remove display property based on need
  >
    <Container>
      <Heading size="2xl" color="white" mb={4}>
        We help thousands of children, <br />
        arrange food & build houses for them
      </Heading>
      <Heading size="lg" color="white">
        Join us & Become a Volunteer{" "}
        <Box
          as="span"
          display="inline-block"
          bg="white"
          height="2px"
          width="50px"
          ml={2}
        />
      </Heading>
    </Container>
  </Box>
);
