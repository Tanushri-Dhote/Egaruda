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
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaStar,
  FaBatteryFull,
  FaPlug,
  FaCogs,
  FaToolbox,
  FaHeadset,
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

  // Product list based on RMNA E-Mobility PDF
  const products = [
    { name: "Double Light", slug: "double-light", category: "E-Scooty", icon: FaStar },
    { name: "Legendre LD", slug: "legendre-ld", category: "E-Scooty", icon: FaStar },
    { name: "Mini Activa (CS)", slug: "mini-activa-cs", category: "E-Scooty", icon: FaBolt },
    { name: "Big Daddy - CS3", slug: "big-daddy-cs3", category: "E-Scooty", icon: FaShieldAlt },
    { name: "THAR - E4", slug: "thar-e4", category: "E-Scooty", icon: FaBolt },
    { name: "BMW", slug: "bmw", category: "E-Scooty", icon: FaStar },
    { name: "Momentum Q7", slug: "momentum-q7", category: "E-Scooty", icon: FaCheckCircle },
  ];

  // Battery options from PDF
  const batteryOptions = [
    { type: "Lithium-ion Battery", voltages: ["48V", "60V", "72V"], life: "2-3 years", feature: "Fast charging, Lightweight" },
    { type: "Budget-friendly Battery", voltages: ["48V", "60V"], life: "1 year", feature: "Cost-effective" },
  ];

  // Charger options from PDF
  const chargerOptions = [
    { name: "Standard Charger", compatibility: "48V & 60V", time: "5-7 hours", feature: "Auto cut feature" },
    { name: "Fast Charger", compatibility: "All voltages", time: "Reduced by 30-40%", feature: "Advanced safety, Ideal for commercial use" },
  ];

  // Spare parts categories from PDF
  const spareParts = {
    electrical: ["Controller", "Motor (Hub Motor)", "Wiring Kit", "Throttle", "Display Meter"],
    mechanical: ["Brake Shoes / Disc Pads", "Suspension", "Tires & Tubes", "Alloy Wheels"],
    accessories: ["Mobile Holder", "USB Charger Port", "Side Box", "LED Lights"],
  };

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getIconColor = (category) => {
    switch (category) {
      case "E-Scooty": return "yellow.500";
      default: return "green.500";
    }
  };

  return (
    <Box
      bg={bg}
      color={textColor}
      py={{ base: 8, md: 12 }}
      px={5}
      borderTop="1px solid"
      borderColor={borderColor}
      position="relative"
    >
      {/* Simple Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(135deg, rgba(72,187,120,0.03) 0%, rgba(128,90,213,0.03) 100%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          gap={{ base: 10, md: 8 }}
        >
          {/* LEFT SECTION - Brand */}
          <ScaleFade in={true} initialScale={0.9} delay={0.1}>
            <Box flex={1.2}>
              <HStack
                spacing={4}
                mb={4}
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
                  boxSize={{ base: "70px", md: "100px" }}
                  fallbackSrc="https://via.placeholder.com/85x85?text=RMNA"
                />
                <Box>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="bold"
                    bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                    bgClip="text"
                    lineHeight="1.2"
                  >
                    RMNA
                  </Text>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                    bgClip="text"
                    fontWeight="semibold"
                  >
                    E-MOBILITY SERVICES
                  </Text>
                </Box>
              </HStack>

              <Text fontSize="sm" lineHeight="1.7" maxW="300px" color={textColor} mb={4}>
                Reliable • Eco-Friendly • Cost-Effective Solutions. Driving the future with smart, sustainable, and stylish electric scooters.
              </Text>

              {/* Eco Badges */}
              <HStack spacing={3} mb={4}>
                <Badge
                  bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
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
                    <Icon as={FaBolt} boxSize={2.5} color="green.500" />
                    <Text>Zero Emission</Text>
                  </HStack>
                </Badge>
              </HStack>

              {/* Social Links */}
              <HStack spacing={3}>
                {[
                  { icon: FaFacebookF, color: "#1877f2" },
                  { icon: FaInstagram, color: "#e4405f" },
                ].map((social, idx) => (
                  <Box
                    key={idx}
                    w="35px"
                    h="35px"
                    borderRadius="full"
                    bg={useColorModeValue("gray.100", "gray.700")}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    transition="all 0.2s"
                    _hover={{
                      bg: social.color,
                      color: "white",
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Icon as={social.icon} boxSize={4} />
                  </Box>
                ))}
              </HStack>
            </Box>
          </ScaleFade>

          {/* PRODUCTS & SERVICES SECTION */}
          <SlideFade in={true} offsetY="20px" delay={0.2}>
            <Box flex={2}>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={headingColor}
                mb={4}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Icon as={FaMotorcycle} color="green.500" boxSize={5} />
                E-Scooty Models
                <Box
                  h="2px"
                  flex={1}
                  bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                  borderRadius="full"
                />
              </Text>

              <Grid
                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
                gap={3}
                mb={6}
              >
                {products.map((product, i) => (
                  <Link
                    key={i}
                    onClick={() => handleProductClick(product.slug)}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Box
                      p={2}
                      borderRadius="md"
                      transition="all 0.2s"
                      cursor="pointer"
                      _hover={{
                        transform: "translateX(5px)",
                        bg: useColorModeValue("gray.50", "gray.800"),
                      }}
                    >
                      <HStack spacing={2}>
                        <Icon
                          as={product.icon}
                          boxSize={3}
                          color={getIconColor(product.category)}
                        />
                        <Text fontSize="sm" _hover={{ color: linkHoverColor }}>
                          {product.name}
                        </Text>
                      </HStack>
                    </Box>
                  </Link>
                ))}
              </Grid>
            </Box>
          </SlideFade>

          {/* VENUE & CONTACT SECTION - Exactly as per PDF */}
          <SlideFade in={true} offsetY="20px" delay={0.3}>
            <Box flex={1.2}>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={headingColor}
                mb={4}
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Icon as={FaMapMarkerAlt} color="green.500" boxSize={5} />
                Contact Us
                <Box
                  h="2px"
                  flex={1}
                  bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                  borderRadius="full"
                />
              </Text>

              <VStack align="flex-start" spacing={4}>
                <HStack spacing={3} align="flex-start">
                  <Icon as={FaMapMarkerAlt} color="green.500" boxSize={4} mt={0.5} />
                  <Text fontSize="sm" lineHeight="1.6">
                    1. Village & Post- Bara, Teh - Haidergarh,<br />
                    Near Neeraj Hotel, Sultanpur Road,<br />
                    Uttar Pradesh - 225126
                  </Text>
                </HStack>

                <HStack spacing={3} align="flex-start">
                  <Icon as={FaMapMarkerAlt} color="green.500" boxSize={4} mt={0.5} />
                  <Text fontSize="sm" lineHeight="1.6">
                    2. Ragad Ganj, Police Line, Tanda Road,<br />
                    Akbarpur, Ambedkar Nagar,<br />
                    Uttar Pradesh - 224122
                  </Text>
                </HStack>

                <HStack spacing={3}>
                  <Icon as={FaPhoneAlt} color="green.500" boxSize={4} />
                  <Text fontSize="sm">
                    <Link href="tel:+919695600185" _hover={{ color: linkHoverColor }}>
                      +91 96956 00185
                    </Link>
                    {" / "}
                    <Link href="tel:+919125948111" _hover={{ color: linkHoverColor }}>
                      +91 91259 48111
                    </Link>
                  </Text>
                </HStack>

                <HStack spacing={3}>
                  <Icon as={FaEnvelope} color="green.500" boxSize={4} />
                  <Text fontSize="sm" wordBreak="break-all">
                    <Link href="mailto:ramnamultiservices@gmail.com" _hover={{ color: linkHoverColor }}>
                      ramnamultiservices@gmail.com
                    </Link>
                  </Text>
                </HStack>

                <HStack spacing={3}>
                  <Icon as={FaClock} color="green.500" boxSize={4} />
                  <Text fontSize="sm">Mon-Sat: 10:00 AM - 7:00 PM</Text>
                </HStack>
              </VStack>

              {/* Trust Badges */}
              <Box
                mt={6}
                p={4}
                borderRadius="lg"
                bg={cardBg}
                border="1px solid"
                borderColor={borderColor}
              >
                <HStack spacing={4} justify="space-between" flexWrap="wrap" gap={2}>
                  <HStack spacing={2}>
                    <Icon as={FaLock} boxSize={4} color="green.500" />
                    <Text fontSize="xs">Reliable Service</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaLeaf} boxSize={4} color="green.500" />
                    <Text fontSize="xs">Eco-Friendly</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaHeart} boxSize={4} color="red.500" />
                    <Text fontSize="xs">Cost-Effective</Text>
                  </HStack>
                </HStack>
              </Box>

              <Text fontSize="xx-small" textAlign="center" mt={3} color={textColor}>
                Few More Outlets will be open soon. Thanks for your support!
              </Text>
            </Box>
          </SlideFade>
        </Flex>

        {/* BOTTOM BAR */}
        <ScaleFade in={true} delay={0.4}>
          <Box mt={10} pt={6} borderTop="1px solid" borderColor={borderColor}>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              gap={4}
              flexWrap="wrap"
            >
              <Text fontSize="xs" textAlign="center">
                © {new Date().getFullYear()}{" "}
                <Text
                  as="span"
                  bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                  bgClip="text"
                  fontWeight="bold"
                >
                  RMNA E-Mobility Services
                </Text>{" "}
                | Reliable • Eco-Friendly • Cost-Effective Solutions
              </Text>
              <HStack spacing={2}>
                <Icon as={FaCode} boxSize={3} color="green.500" />
                <Text fontSize="xs">
                  Developed by{" "}
                  <Link
                    href="https://rssctech.com/"
                    isExternal
                    fontWeight="bold"
                    bgGradient="linear(to-r, red.400, blue.500)"
                    bgClip="text"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, blue.600)",
                    }}
                  >
                    RSSC Technologies Pvt. Ltd
                    <Icon as={FaExternalLinkAlt} boxSize={2} ml={1} />
                  </Link>
                </Text>
              </HStack>
            </Flex>
          </Box>
        </ScaleFade>
      </Container>
    </Box>
  );
};

export default Footer;