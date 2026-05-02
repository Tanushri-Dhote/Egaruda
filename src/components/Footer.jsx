import {
  Box,
  Text,
  Flex,
  Grid,
  Link,
  Image,
  useColorModeValue,
  Icon,
  HStack,
  VStack,
  Badge,
  ScaleFade,
  SlideFade,
  Container,
  Divider,
} from "@chakra-ui/react";

import {
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMotorcycle,
  FaBolt,
  FaLeaf,
  FaExternalLinkAlt,
  FaCode,
  FaLock,
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const linkHoverColor = useColorModeValue("green.500", "green.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");

  const products = [
    { name: "Single Light", slug: "single-light", icon: FaStar },
    { name: "Double Light", slug: "double-light", icon: FaStar },
    { name: "Legendre LD", slug: "legendre-ld", icon: FaStar },
    { name: "Mini Activa (CS)", slug: "mini-activa-cs", icon: FaBolt },
    { name: "Big Daddy - CS3", slug: "big-daddy-cs3", icon: FaShieldAlt },
    { name: "THAR - E4", slug: "thar-e4", icon: FaBolt },
    { name: "BMW", slug: "bmw", icon: FaStar },
    { name: "Momentum Q7", slug: "momentum-q7", icon: FaCheckCircle },
    { name: "Ola Model", slug: "ola-pro", icon: FaStar },
  ];

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      bg={bg}
      color={textColor}
      py={{ base: 10, md: 14 }}
      px={5}
      borderTop="1px solid"
      borderColor={borderColor}
      position="relative"
    >
      {/* Subtle Background Gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(135deg, rgba(34,197,94,0.02) 0%, rgba(249,115,22,0.02) 100%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          gap={{ base: 12, md: 8 }}
        >
          {/* LEFT SECTION - Brand */}
          <Box flex={1.2}>
            <HStack
              spacing={4}
              mb={6}
              cursor="pointer"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              _hover={{ transform: "scale(1.02)" }}
              transition="all 0.3s ease"
            >
              <Image
                src="/images/RMNA-without-bg.png"
                boxSize={{ base: "90px", md: "110px" }}
                fallbackSrc="https://via.placeholder.com/85x85?text=RMNA"
              />
              <Box>
                <HStack spacing={0} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="900" letterSpacing="-0.5px">
                  <Text as="span" color="#f97316">RM</Text>
                  <Text as="span" color="#22c55e">NA</Text>
                </HStack>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  color={useColorModeValue('black', 'white')}
                  fontWeight="bold"
                  letterSpacing="1px"
                >
                  E-MOBILITY SERVICES
                </Text>
              </Box>
            </HStack>

            <Text fontSize="sm" lineHeight="1.7" maxW="300px" color={textColor} mb={6}>
              Reliable • Eco-Friendly • Cost-Effective Solutions. Driving the future with smart, sustainable, and stylish electric scooters.
            </Text>

            <HStack spacing={3} mb={6}>
              <Badge
                bg="#22c55e"
                color="white"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="xs"
              >
                <HStack spacing={1}>
                  <Icon as={FaLeaf} boxSize={2.5} />
                  <Text>Eco-Friendly</Text>
                </HStack>
              </Badge>
              <Badge
                bg={useColorModeValue("gray.100", "gray.700")}
                color={textColor}
                borderRadius="full"
                px={3}
                py={1}
                fontSize="xs"
              >
                <HStack spacing={1}>
                  <Icon as={FaBolt} boxSize={2.5} color="#22c55e" />
                  <Text>Zero Emission</Text>
                </HStack>
              </Badge>
            </HStack>

            <HStack spacing={4}>
              {[
                { icon: FaFacebookF, color: "#1877f2" },
                { icon: FaInstagram, color: "#e4405f" },
              ].map((social, idx) => (
                <Box
                  key={idx}
                  w="38px"
                  h="38px"
                  borderRadius="full"
                  bg={useColorModeValue("gray.100", "gray.700")}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ bg: social.color, color: "white", transform: "translateY(-3px)" }}
                >
                  <Icon as={social.icon} boxSize={4} />
                </Box>
              ))}
            </HStack>
          </Box>

          {/* MIDDLE SECTION - Models */}
          <Box flex={1.5}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={headingColor}
              mb={6}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaMotorcycle} color="#22c55e" boxSize={5} />
              E-Scooty Models
              <Box h="2px" flex={1} bg="#22c55e" opacity={0.2} borderRadius="full" />
            </Text>

            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
              gap={4}
            >
              {products.map((product, i) => (
                <HStack
                  key={i}
                  spacing={3}
                  p={2}
                  borderRadius="lg"
                  cursor="pointer"
                  transition="all 0.2s"
                  onClick={() => handleProductClick(product.slug)}
                  _hover={{ bg: useColorModeValue("gray.50", "gray.800"), transform: "translateX(5px)" }}
                >
                  <Icon as={product.icon} boxSize={3} color="#f97316" />
                  <Text fontSize="sm" fontWeight="500">{product.name}</Text>
                </HStack>
              ))}
            </Grid>
          </Box>

          {/* RIGHT SECTION - Contact */}
          <Box flex={1.3}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={headingColor}
              mb={6}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaMapMarkerAlt} color="#22c55e" boxSize={5} />
              Contact Us
              <Box h="2px" flex={1} bg="#22c55e" opacity={0.2} borderRadius="full" />
            </Text>

            <VStack align="flex-start" spacing={5}>
              <HStack spacing={3} align="flex-start">
                <Icon as={FaMapMarkerAlt} color="#22c55e" boxSize={4} mt={1} />
                <Text fontSize="sm" lineHeight="1.6">
                  1. Village & Post- Bara, Teh - Haidergarh,<br />
                  Near Neeraj Hotel, Sultanpur Road,<br />
                  Uttar Pradesh - 225126
                </Text>
              </HStack>

              <HStack spacing={3} align="flex-start">
                <Icon as={FaMapMarkerAlt} color="#22c55e" boxSize={4} mt={1} />
                <Text fontSize="sm" lineHeight="1.6">
                  2. Ragad Ganj, Police Line, Tanda Road,<br />
                  Akbarpur, Ambedkar Nagar,<br />
                  Uttar Pradesh - 224122
                </Text>
              </HStack>

              <HStack spacing={3}>
                <Icon as={FaPhoneAlt} color="#22c55e" boxSize={4} />
                <Text fontSize="sm" fontWeight="bold">
                  +91 96956 00185 / +91 91259 48111
                </Text>
              </HStack>

              <HStack spacing={3}>
                <Icon as={FaEnvelope} color="#22c55e" boxSize={4} />
                <Text fontSize="sm">ramnamultiservices@gmail.com</Text>
              </HStack>

              <HStack spacing={3}>
                <Icon as={FaClock} color="#22c55e" boxSize={4} />
                <Text fontSize="sm">Mon-Sat: 10:00 AM - 7:00 PM</Text>
              </HStack>
            </VStack>

            {/* Trust Badges */}
            <Box
              mt={8}
              p={4}
              borderRadius="xl"
              bg={cardBg}
              border="1px solid"
              borderColor={borderColor}
            >
              <HStack justify="space-between" spacing={2} wrap="wrap">
                <HStack spacing={2}>
                  <Icon as={FaLock} boxSize={3} color="#22c55e" />
                  <Text fontSize="xs" fontWeight="bold">Reliable Service</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaLeaf} boxSize={3} color="#22c55e" />
                  <Text fontSize="xs" fontWeight="bold">Eco-Friendly</Text>
                </HStack>
                <HStack spacing={2}>
                  <Icon as={FaHeart} boxSize={3} color="red.500" />
                  <Text fontSize="xs" fontWeight="bold">Cost-Effective</Text>
                </HStack>
              </HStack>
            </Box>

            <Text fontSize="xs" textAlign="center" mt={4} color={textColor} fontStyle="italic">
              Few More Outlets will be open soon. Thanks for your support!
            </Text>
          </Box>
        </Flex>

        <Divider my={10} borderColor={borderColor} />

        {/* BOTTOM BAR */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
          textAlign="center"
        >
          <Text fontSize="xs" fontWeight="medium">
            © {new Date().getFullYear()} {" "}
            <Box as="span" fontWeight="bold">
              <Text as="span" color="#f97316">RM</Text>
              <Text as="span" color="#22c55e">NA</Text>
              <Text as="span" color={useColorModeValue('black', 'white')} ml={1}>E-Mobility Services</Text>
            </Box>{" "}
            | Reliable • Eco-Friendly • Cost-Effective Solutions
          </Text>

          <HStack spacing={2}>
            <Icon as={FaCode} boxSize={3} color="#22c55e" />
            <Text fontSize="xs">
              Developed by{" "}
              <Link
                href="https://rssctech.com/"
                isExternal
                fontWeight="bold"
                color="red.500"
                _hover={{ color: "red.600", textDecoration: "underline" }}
              >
                RSSC Technologies Pvt. Ltd
                <Icon as={FaExternalLinkAlt} boxSize={2} ml={1} />
              </Link>
            </Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;