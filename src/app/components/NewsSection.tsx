import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";

const newsItems = [
  {
    id: 1,
    date: "31 JULY",
    title: "Feeding the poor people",
    image: "/images/resource/news-1.jpg",
    link: "/blog-details/1",
  },
  {
    id: 2,
    date: "25 AUG",
    title: "Take care of children",
    image: "/images/resource/news-2.jpg",
    link: "/blog-details/2",
  },
  {
    id: 3,
    date: "18 SEP",
    title: "Take care of children",
    image: "/images/resource/news-3.jpg",
    link: "/blog-details/3",
  },
];

export const NewsSection = () => (
  <Box py={16} display="none">
    <Container>
      <Flex direction="column" align="center" textAlign="center" mb={12}>
        <Image src="/images/icons/sec-title.png" alt="Section Icon" mb={4} />
        <Heading size="2xl">
          What’s{" "}
          <Text as="span" color="pink.500">
            Happening
          </Text>
        </Heading>
        <Text fontSize="lg" mt={4}>
          Poor people are at high risk of severe malnutrition & no education
        </Text>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {newsItems.map((news) => (
          <GridItem key={news.id}>
            <Box bg="gray.100" borderRadius="md" overflow="hidden">
              <Image src={news.image} alt={news.title} />
              <Box p={6}>
                <Text fontWeight="bold" fontSize="lg" color="pink.500">
                  {news.date}
                </Text>
                <Text color="gray.600" mt={2}>
                  By: ChariteMax
                </Text>
                <Heading size="md" mt={4}>
                  <a href={news.link}>{news.title}</a>
                </Heading>
                <Text mt={4}>
                  Auisy nostrud exercitation ullamc laboris aliquip ex bea sed
                  consequat duis autese dolore magna aliqua nim.
                </Text>
                <Button
                  mt={4}
                  as="a"
                  href={news.link}
                  colorScheme="pink"
                  variant="outline"
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  </Box>
);
