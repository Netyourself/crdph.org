import { Box, Container, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

export const TestimonialSection = () => (
  <Box py={16} display="none">
    <Container>
      <Swiper spaceBetween={30} slidesPerView={1}>
        {[...Array(2)].map((_, i) => (
          <SwiperSlide key={i}>
            <Flex direction="column" align="center" textAlign="center">
              <Image
                src="/images/resource/author.jpg"
                alt="Author"
                borderRadius="full"
                boxSize="150px"
                mb={4}
              />
              <Text fontSize="lg" mb={4}>
                Since vindictively over agile the some far well besides
                constructively well airy...
              </Text>
              <Heading size="md">
                Sande Well{" "}
                <Text as="span" fontSize="sm" color="gray.500">
                  ChariteMax Donator
                </Text>
              </Heading>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </Box>
);
