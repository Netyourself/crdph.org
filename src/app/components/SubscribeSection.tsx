import { Box, Container, Heading, Flex, Input, Button } from "@chakra-ui/react";

export const SubscribeSection = () => (
  <Box
    bgImage="url('/images/background/4.jpg')"
    bgPos="center"
    bgSize="cover"
    py={16}
  >
    <Container>
      <Flex align="center" justify="space-between">
        <Heading size="lg" color="white">
          Subscribe to Newsletter
        </Heading>
        <Flex
          as="form"
          method="post"
          action="http://html.commonsupport.xyz/2018/charitemax/contact.html"
        >
          <Input
            type="email"
            placeholder="Your email..."
            required
            bg="white"
            color="black"
          />
          <Button type="submit" colorScheme="pink" ml={2}>
            <span className="fa fa-paper-plane" />
          </Button>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
