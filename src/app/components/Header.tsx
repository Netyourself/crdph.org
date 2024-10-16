// components/Header.tsx

import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaGooglePlusG,
  FaPhoneAlt,
  FaPinterestP,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Box>
      {/* Preloader (Optional) */}
      {/* <Box className="preloader"></Box> */}

      {/* Main Header */}
      <Box className="main-header">
        {/* Header Top */}
        <Box className="header-top" py={2}>
          <Container>
            <Flex justify="space-between" align="center">
              {/* Top Left */}
              <Flex>
                <Text mr={4}>
                  <FaPhoneAlt /> Call Us Now{" "}
                  <strong>
                    <Link href="tel:+211916726783">+211-916-726-783</Link>
                  </strong>
                </Text>
                <Text>
                  <FaEnvelopeOpen /> Send Us Email{" "}
                  <strong>info@crdph.org</strong>
                </Text>
              </Flex>
              {/* Top Right */}
              <Flex>
                <Button as={Link} href="/login" variant="outline" mr={4}>
                  <BsFillPersonFill /> Login
                </Button>
                <Flex>
                  <Link href="#">
                    <FaTwitter />
                  </Link>
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                  <Link href="#">
                    <FaGooglePlusG />
                  </Link>
                  <Link href="#">
                    <FaYoutube />
                  </Link>
                  <Link href="#">
                    <FaPinterestP />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Header Upper */}
        <Box className="header-upper" py={4}>
          <Container>
            <Flex justify="space-between" align="center">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/uploads/logo.png"
                  alt="Logo"
                  width={200}
                  height={60}
                />
              </Link>

              {/* Navigation */}
              <Flex>
                {/* Main Menu */}
                <Flex
                  direction="column"
                  align="center"
                  display={{ base: "none", md: "flex" }}
                >
                  <Link href="/" mr={4}>
                    Home
                  </Link>
                  <Box position="relative">
                    <Link href="#" mr={4}>
                      About Us
                    </Link>
                    {/* Dropdown */}
                    <Box
                      position="absolute"
                      display="none"
                      bg="white"
                      p={4}
                      borderRadius="md"
                    >
                      <Link href="/what-we-do">What We Do</Link>
                      <Link href="/background">Background</Link>
                      <Link href="/vision">Vision</Link>
                      <Link href="/mission">Mission</Link>
                      <Link href="/core-values">Core Values</Link>
                      <Link href="/our-board">Our Board</Link>
                      <Link href="/our-team">Our Team</Link>
                      <Link href="/our-impact">Our Impact</Link>
                      <Link href="/funders-partners">Funders and Partners</Link>
                    </Box>
                  </Box>
                  <Link href="/events" mr={4}>
                    Events
                  </Link>
                  <Link href="/gallery" mr={4}>
                    Gallery
                  </Link>
                  <Box position="relative">
                    <Link href="#" mr={4}>
                      What we Do
                    </Link>
                    {/* Dropdown */}
                    <Box
                      position="absolute"
                      display="none"
                      bg="white"
                      p={4}
                      borderRadius="md"
                    >
                      <Link href="/what-we-do">What we do</Link>
                      <Link href="/health-programming">Health programming</Link>
                      <Link href="/nutrition-programming">
                        Nutrition programming
                      </Link>
                      <Link href="/child-protection">Child protection</Link>
                      <Link href="/wash-programming">WASH programming</Link>
                      <Link href="/family-strengthening">
                        Family strengthening
                      </Link>
                      <Link href="/operational-research">
                        Operational Research
                      </Link>
                      <Link href="/capacity-enhancement">
                        Capacity enhancement
                      </Link>
                    </Box>
                  </Box>
                  <Link href="/contact">Contact</Link>
                </Flex>

                {/* Search Box and Donate Button */}
                <Flex align="center">
                  <Button as="button" variant="outline" ml={4}>
                    <FaSearch />
                  </Button>
                  <Button as={Link} href="#" colorScheme="teal" ml={4}>
                    Donate Now
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Sticky Header */}
        <Box className="sticky-header" py={2} bg="white" boxShadow="md">
          <Container>
            <Flex justify="space-between" align="center">
              <Link href="/">
                <Image
                  src="/uploads/logo.png"
                  alt="Logo"
                  width={200}
                  height={60}
                />
              </Link>
              <Flex>
                <Link href="/" mr={4}>
                  Home
                </Link>
                <Box position="relative">
                  <Link href="#" mr={4}>
                    About Us
                  </Link>
                  {/* Dropdown */}
                  <Box
                    position="absolute"
                    display="none"
                    bg="white"
                    p={4}
                    borderRadius="md"
                  >
                    <Link href="/background">Background</Link>
                    <Link href="/vision">Vision</Link>
                    <Link href="/mission">Mission</Link>
                    <Link href="/core-values">Core Values</Link>
                    <Link href="/our-board">Our Board</Link>
                    <Link href="/our-team">Our Team</Link>
                    <Link href="/our-impact">Our Impact</Link>
                    <Link href="/funders-partners">Funders and Partners</Link>
                  </Box>
                </Box>
                <Link href="/events" mr={4}>
                  Events
                </Link>
                <Link href="/gallery" mr={4}>
                  Gallery
                </Link>
                <Box position="relative">
                  <Link href="#" mr={4}>
                    What we Do
                  </Link>
                  {/* Dropdown */}
                  <Box
                    position="absolute"
                    display="none"
                    bg="white"
                    p={4}
                    borderRadius="md"
                  >
                    <Link href="/what-we-do">What we do</Link>
                    <Link href="/health-programming">Health programming</Link>
                    <Link href="/nutrition-programming">
                      Nutrition programming
                    </Link>
                    <Link href="/child-protection">Child protection</Link>
                    <Link href="/wash-programming">WASH programming</Link>
                    <Link href="/family-strengthening">
                      Family strengthening
                    </Link>
                    <Link href="/operational-research">
                      Operational Research
                    </Link>
                    <Link href="/capacity-enhancement">
                      Capacity enhancement
                    </Link>
                  </Box>
                </Box>
                <Link href="/contact">Contact</Link>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
