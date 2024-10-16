// app/page.tsx
"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  Button,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaHeart, FaDonate, FaUser, FaHandsHelping } from "react-icons/fa";
import MaintenancePage from "./components/Maintenance";

export default function Home() {
  return (
    <>
      {/* Main Slider */}
      <Box as="section" bg="gray.100">
        <Container maxW="container.xl" p={0}>
          <Grid templateColumns="repeat(2, 1fr)" gap={0}>
            <Box position="relative">
              <Image src="/uploads/b2.png" alt="Research Center" />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.4)"
              >
                <Box textAlign="center" color="white" py={10}>
                  <Heading as="h3" size="lg">
                    Research Center <span className="border-shape"></span>
                  </Heading>
                  <Heading as="h1" size="2xl">
                    Placing research at the heart of population <br /> health
                    programming.
                  </Heading>
                  <Text fontSize="xl" mt={4}>
                    South Sudan
                  </Text>
                  <Button mt={4} colorScheme="pink" size="lg">
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box position="relative">
              <Image src="/uploads/b1.png" alt="Population excellency" />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.4)"
              >
                <Box textAlign="center" color="white" py={10}>
                  <Heading as="h3" size="lg">
                    Population excellency <span className="border-shape"></span>
                  </Heading>
                  <Heading as="h1" size="2xl">
                    To become a leading centre of excellence in <br />{" "}
                    population health research and development within and beyond
                    South Sudan.
                  </Heading>
                  <Text fontSize="xl" mt={4}>
                    Research
                  </Text>
                  <Button mt={4} colorScheme="pink" size="lg">
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Welcome Section */}
      <Box as="section" py={10}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <Box textAlign="center" shadow="md" p={5} bg="white">
              <Icon as={FaHeart} boxSize={10} color="pink.500" />
              <Heading as="h4" size="md" mt={4}>
                <Link href="/research">Research</Link>
              </Heading>
              <Text mt={2}>
                • Population and reproductive health
                <br />• Maternal and child health
              </Text>
            </Box>
            <Box textAlign="center" shadow="md" p={5} bg="white">
              <Icon as={FaDonate} boxSize={10} color="pink.500" />
              <Heading as="h4" size="md" mt={4}>
                <Link href="#">Donate</Link>
              </Heading>
            </Box>
            <Box textAlign="center" shadow="md" p={5} bg="white">
              <Icon as={FaUser} boxSize={10} color="pink.500" />
              <Heading as="h4" size="md" mt={4}>
                <Link href="/policyengagement">
                  Policy engagement and communication
                </Link>
              </Heading>
              <Text mt={2}>
                • Enhancing Public Private Partnership
                <br />• Advocacy
              </Text>
            </Box>
            <Box textAlign="center" shadow="md" p={5} bg="white">
              <Icon as={FaHandsHelping} boxSize={10} color="pink.500" />
              <Heading as="h4" size="md" mt={4}>
                <Link href="/capacityenhancement">Capacity enhancement</Link>
              </Heading>
              <Text mt={2}>
                • Capacity building of Health Managers
                <br />• Community empowerment
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box as="section" py={10} bg="gray.100">
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Image
              src="/uploads/bg4.jpg"
              alt="Our Partners"
              boxSize="340px"
              objectFit="cover"
            />
            <Box>
              <Heading as="h4" size="lg">
                Our Partners
              </Heading>
              <Heading as="h1" size="2xl">
                We are <span style={{ color: "pink.500" }}>Partners</span>
              </Heading>
              <Text mt={4}>[Additional content can be added here]</Text>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Fact Counter Section */}
      <Box
        as="section"
        py={10}
        bgImage="url('/images/background/1.jpg')"
        bgSize="cover"
        bgPos="center"
      >
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <Box textAlign="center" color="white">
              <Icon as={FaDonate} boxSize={10} />
              <Text mt={2}>Received Donations</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Icon as={FaHandsHelping} boxSize={10} />
              <Text mt={2}>Received Donations</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Icon as={FaUser} boxSize={10} />
              <Text mt={2}>Our Volunteers</Text>
            </Box>
            <Box textAlign="center" color="white">
              <Icon as={FaHeart} boxSize={10} />
              <Text mt={2}>Projects Done</Text>
            </Box>
          </Grid>
          ``
        </Container>
      </Box>
    </>
  );
}
