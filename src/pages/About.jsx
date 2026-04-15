import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  Button,
  useColorModeValue,
  SimpleGrid,
  Container,
  Divider,
  Badge,
  Avatar,
  ScaleFade,
  SlideFade,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Collapse,
  useDisclosure,
  Image,
  List,
  ListItem,
  ListIcon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaRocket,
  FaShieldAlt,
  FaLock,
  FaGlobe,
  FaQuoteRight,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaStar,
  FaBolt,
  FaLeaf,
  FaEye,
  FaBullseye,
  FaUserTie,
  FaBriefcase,
  FaMotorcycle,
  FaTachometerAlt,
  FaBatteryFull,
  FaRoad,
  FaCrown,
  FaAward,
  FaChartLine,
  FaHandsHelping,
  FaBuilding,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPlug,
  FaCogs,
  FaToolbox,
  FaHeadset,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const { isOpen: isMissionOpen, onToggle: onMissionToggle } = useDisclosure({ defaultIsOpen: true });
  const { isOpen: isVisionOpen, onToggle: onVisionToggle } = useDisclosure({ defaultIsOpen: false });

  const bgGradient = useColorModeValue(
    "linear(to-b, #f0fff4, white)",
    "linear(to-b, gray.900, #1a1a1a)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("green.500", "green.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const quoteBg = useColorModeValue("green.50", "gray.800");
  const subtleBg = useColorModeValue("gray.50", "gray.700");

  // RMNA E-Scooty Models
  const rmnaModels = [
    { name: "Double Light", icon: FaStar, color: "yellow" },
    { name: "Legendre LD", icon: FaStar, color: "orange" },
    { name: "Mini Activa (CS)", icon: FaBolt, color: "blue" },
    { name: "Big Daddy - CS3", icon: FaShieldAlt, color: "green" },
    { name: "THAR - E4", icon: FaBolt, color: "red" },
    { name: "BMW", icon: FaCrown, color: "purple" },
    { name: "Momentum Q7", icon: FaCheckCircle, color: "teal" },
  ];

  // Battery Options
  const batteryOptions = [
    { type: "Lithium-ion Battery", voltages: "48V / 60V / 72V", life: "2-3 years", features: "Fast charging, Lightweight" },
    { type: "Budget-friendly Battery", voltages: "48V / 60V", life: "1 year", features: "Cost-effective" },
  ];

  // Charger Options
  const chargerOptions = [
    { name: "Standard Charger", compatibility: "48V & 60V", time: "5-7 hours", feature: "Auto cut feature" },
    { name: "Fast Charger", compatibility: "All voltages", time: "Reduced by 30-40%", feature: "Advanced safety, Ideal for commercial use" },
  ];

  // Spare Parts Categories
  const spareParts = {
    electrical: ["Controller", "Motor (Hub Motor)", "Wiring Kit", "Throttle", "Display Meter"],
    mechanical: ["Brake Shoes / Disc Pads", "Suspension", "Tires & Tubes", "Alloy Wheels"],
    accessories: ["Mobile Holder", "USB Charger Port", "Side Box", "LED Lights"],
  };

  // Services Offered
  const servicesOffered = [
    "Retail & Wholesale Supply",
    "Dealership Support",
    "After-Sales Service",
    "Spare Parts Availability",
  ];

  // RMNA Addresses
  const addresses = [
    {
      line1: "Village & Post- Bara, Teh - Haidergarh",
      line2: "Near Neeraj Hotel, Sultanpur Road",
      city: "Uttar Pradesh - 225126"
    },
    {
      line1: "Ragad Ganj, Police Line, Tanda Road",
      line2: "Akbarpur, Ambedkar Nagar",
      city: "Uttar Pradesh - 224122"
    }
  ];

  const handleMissionClick = () => {
    if (!isMissionOpen) {
      onMissionToggle();
      if (isVisionOpen) onVisionToggle();
    }
  };

  const handleVisionClick = () => {
    if (!isVisionOpen) {
      onVisionToggle();
      if (isMissionOpen) onMissionToggle();
    }
  };

  const totalSlides = 2;

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Best Picks Items for RMNA
  const bestPicksItems = [
    {
      title: "Reliable Performance",
      icon: FaShieldAlt,
      description: "Dependable and consistent performance with robust build quality for daily commuting needs",
      stat: "✅ 2-3 Year Battery Life",
      gradient: "linear(135deg, #4299e1, #2b6cb0)",
      color: "blue"
    },
    {
      title: "Eco-Friendly",
      icon: FaLeaf,
      description: "Zero emission electric scooters that help reduce carbon footprint and promote green mobility",
      stat: "🌿 Zero Emission",
      gradient: "linear(135deg, #48bb78, #276749)",
      color: "green"
    },
    {
      title: "Cost Effective",
      icon: FaChartLine,
      description: "Budget-friendly solutions with low maintenance costs and excellent value for money",
      stat: "💰 Affordable Pricing",
      gradient: "linear(135deg, #ed8936, #c05621)",
      color: "orange"
    },
    {
      title: "Fast Charging",
      icon: FaPlug,
      description: "Quick charging technology that gets you back on the road in no time",
      stat: "⚡ 30-40% Faster Charging",
      gradient: "linear(135deg, #9f7aea, #6b46c0)",
      color: "purple"
    }
  ];

  return (
    <Box bg={bgGradient} minH="100vh">
      <Container maxW="1200px" py={{ base: 12, md: 16, lg: 20 }} px={{ base: 4, md: 6 }}>

        {/* Hero Section - RMNA Brand Story */}
        <SlideFade in={true} offsetY="20px" delay={0.1}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 8, md: 12 }}
            align="center"
            mb={{ base: 12, md: 16 }}
            bg={useColorModeValue("green.50", "gray.800")}
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={-50}
              right={-50}
              w="200px"
              h="200px"
              borderRadius="full"
              bg="whiteAlpha.300"
              zIndex={0}
            />
            <Box
              position="absolute"
              bottom={-30}
              left={-30}
              w="150px"
              h="150px"
              borderRadius="full"
              bg="whiteAlpha.200"
              zIndex={0}
            />

            {/* Left Side - Images Section */}
            <Box
              flex={{ base: "1", md: "0.4" }}
              position="relative"
              zIndex={1}
              w={{ base: "100%", md: "auto" }}
            >
              <SimpleGrid columns={2} spacing={4}>
                <Box
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="xl"
                  transform="rotate(-2deg)"
                  transition="all 0.3s ease"
                  _hover={{ transform: "rotate(0deg) scale(1.02)" }}
                >
                  <Image
                    src="/images/product-image-1.jpg"
                    alt="RMNA Electric Scooter"
                    w="100%"
                    h={{ base: "340px", md: "360px" }}
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/400x360?text=RMNA+E-Scooty"
                  />
                </Box>

                <Box
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="xl"
                  transform="rotate(2deg)"
                  transition="all 0.3s ease"
                  _hover={{ transform: "rotate(0deg) scale(1.02)" }}
                  mt={{ base: 0, md: 8 }}
                >
                  <Image
                    src="/images/product-image-2.jpg"
                    alt="RMNA Electric Scooter"
                    w="100%"
                    h={{ base: "300px", md: "320px" }}
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/400x320?text=RMNA+E-Scooty"
                  />
                </Box>
              </SimpleGrid>

              <Box
                position="absolute"
                bottom={-10}
                right={-10}
                bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                borderRadius="full"
                p={3}
                boxShadow="lg"
                sx={{
                  animation: "floatIcon 3s ease-in-out infinite",
                  "@keyframes floatIcon": {
                    "0%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-8px)" },
                    "100%": { transform: "translateY(0px)" },
                  },
                }}
              >
                <Icon as={FaRocket} color="white" boxSize={6} />
              </Box>
            </Box>

            {/* Right Side - Content Section */}
            <Box
              flex={{ base: "1", md: "0.6" }}
              position="relative"
              zIndex={1}
              w={{ base: "100%", md: "auto" }}
            >
              <VStack spacing={{ base: 4, md: 6 }} align="flex-start">
                <Badge
                  bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                  color="white"
                  fontSize={{ base: "sm", md: "md" }}
                  px={4}
                  py={2}
                  borderRadius="full"
                >
                  <HStack spacing={2}>
                    <Icon as={FaBolt} />
                    <Text>RMNA E-Mobility Services</Text>
                  </HStack>
                </Badge>

                <Text
                  fontSize={{ base: "16px", md: "17px", lg: "18px" }}
                  color={textColor}
                  lineHeight="1.7"
                >
                  At <strong>RMNA E-Mobility Services</strong>, we are driven by a single mission — to <strong>redefine urban commuting</strong> with <strong>smart, sustainable, and stylish</strong> electric scooters. We believe the future of mobility is <strong>green, connected, and intelligent</strong>, and we are here to lead the change.
                </Text>

                <Text
                  fontSize={{ base: "16px", md: "17px", lg: "18px" }}
                  color={textColor}
                  lineHeight="1.7"
                >
                  Our electric scooters are <strong>designed with precision, powered by innovation, and built for performance.</strong> We offer <strong>Reliable, Eco-Friendly, and Cost-Effective Solutions</strong> for all your mobility needs. Every ride you take with <strong>RMNA</strong> isn't just a journey — it's a <strong>step towards a cleaner, smarter, and better tomorrow.</strong>
                </Text>

                {/* Feature highlights */}
                <HStack spacing={4} pt={4} wrap="wrap">
                  <HStack spacing={2}>
                    <Icon as={FaLeaf} color="green.500" />
                    <Text fontSize="14px" color={textColor}>Eco-Friendly</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaShieldAlt} color="orange.500" />
                    <Text fontSize="14px" color={textColor}>Reliable</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaChartLine} color="yellow.500" />
                    <Text fontSize="14px" color={textColor}>Cost-Effective</Text>
                  </HStack>
                </HStack>
              </VStack>
            </Box>
          </Flex>
        </SlideFade>

        {/* Mission & Vision | Director Profile Section */}
        <SlideFade in={true} offsetY="20px" delay={0.2}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={{ base: 12, md: 16 }}>

            {/* Left Side - Mission & Vision Accordion */}
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "28px" }}
                fontWeight="bold"
                color={headingColor}
                mb={6}
                textAlign="center"
              >
                Mission & Vision
              </Heading>

              <VStack spacing={4} align="stretch">
                {/* Mission Section */}
                <Box
                  bg={cardBg}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={borderColor}
                  overflow="hidden"
                  boxShadow={isMissionOpen ? "xl" : "md"}
                  transition="all 0.3s"
                >
                  <Button
                    w="100%"
                    justifyContent="space-between"
                    rightIcon={<Icon as={isMissionOpen ? FaChevronUp : FaChevronDown} />}
                    onClick={handleMissionClick}
                    bg={isMissionOpen ? "green.500" : cardBg}
                    color={isMissionOpen ? "white" : headingColor}
                    _hover={{ bg: isMissionOpen ? "green.600" : useColorModeValue("gray.100", "gray.700") }}
                    borderRadius="xl"
                    p={6}
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    <HStack spacing={3}>
                      <Icon as={FaBullseye} boxSize={6} />
                      <Text>Our Mission</Text>
                    </HStack>
                  </Button>

                  <Collapse in={isMissionOpen} animateOpacity>
                    <Box p={6} pt={2}>
                      <Divider mb={4} />
                      <Text fontSize="md" color={textColor} lineHeight="1.7">
                        To provide reliable, eco-friendly, and cost-effective electric mobility solutions that make sustainable transportation accessible to everyone, while delivering exceptional service and support.
                      </Text>
                      <HStack spacing={2} mt={4}>
                        <Icon as={FaRocket} color="green.500" />
                        <Text fontSize="sm" color="green.500" fontWeight="medium">Driving Green Mobility</Text>
                      </HStack>
                    </Box>
                  </Collapse>
                </Box>

                {/* Vision Section */}
                <Box
                  bg={cardBg}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={borderColor}
                  overflow="hidden"
                  boxShadow={isVisionOpen ? "xl" : "md"}
                  transition="all 0.3s"
                >
                  <Button
                    w="100%"
                    justifyContent="space-between"
                    rightIcon={<Icon as={isVisionOpen ? FaChevronUp : FaChevronDown} />}
                    onClick={handleVisionClick}
                    bg={isVisionOpen ? "purple.500" : cardBg}
                    color={isVisionOpen ? "white" : headingColor}
                    _hover={{ bg: isVisionOpen ? "purple.600" : useColorModeValue("gray.100", "gray.700") }}
                    borderRadius="xl"
                    p={6}
                    fontSize="xl"
                    fontWeight="bold"
                  >
                    <HStack spacing={3}>
                      <Icon as={FaEye} boxSize={6} />
                      <Text>Our Vision</Text>
                    </HStack>
                  </Button>

                  <Collapse in={isVisionOpen} animateOpacity>
                    <Box p={6} pt={2}>
                      <Divider mb={4} />
                      <Text fontSize="md" color={textColor} lineHeight="1.7">
                        To become a leading provider of electric mobility solutions across Uttar Pradesh and beyond, creating a network of dealerships and service centers that bring green transportation to every corner.
                      </Text>
                      <HStack spacing={2} mt={4}>
                        <Icon as={FaGlobe} color="purple.500" />
                        <Text fontSize="sm" color="purple.500" fontWeight="medium">Expanding Across India</Text>
                      </HStack>
                    </Box>
                  </Collapse>
                </Box>
              </VStack>
            </Box>

            {/* Right Side - Director / Owner Profile */}
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "28px" }}
                fontWeight="bold"
                color={headingColor}
                mb={6}
                textAlign="center"
              >
                Founder's Profile
              </Heading>

              <Flex justify="center">
                <Box
                  w="100%"
                  textAlign="center"
                  p={6}
                  bg={cardBg}
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor={borderColor}
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "2xl", borderColor: accentColor }}
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="100px"
                    bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                    opacity={0.1}
                  />

                  <Avatar
                    size="2xl"
                    name="Abhishek Verma"
                    src="/images/abhishek-verma.jpg"
                    mb={4}
                    mx="auto"
                    boxSize={{ base: "120px", md: "130px" }}
                  />

                  <Heading as="h3" fontSize={{ base: "24px", md: "28px" }} fontWeight="bold" color={headingColor} mb={2}>
                    ABHISHEK VERMA
                  </Heading>

                  <Badge
                    bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontSize="md"
                    mb={4}
                    display="inline-block"
                  >
                    <HStack spacing={2}>
                      <Icon as={FaUserTie} />
                      <Text>Founder & Director</Text>
                    </HStack>
                  </Badge>

                  <VStack spacing={2} align="center" mb={4}>
                    <HStack spacing={2}>
                      <Icon as={FaBriefcase} color="green.500" />
                      <Text fontSize="md" fontWeight="medium" color={textColor}>
                        10+ Years of Experience in E-Mobility
                      </Text>
                    </HStack>

                    <HStack spacing={2}>
                      <Icon as={FaBuilding} color="purple.500" />
                      <Text fontSize="md" color={textColor}>
                        Founder of RMNA E-Mobility Services
                      </Text>
                    </HStack>
                  </VStack>

                  <Divider borderColor={borderColor} my={4} />

                  <Box mt={5} p={4} bg={subtleBg} borderRadius="xl">
                    <Text fontSize="sm" color={textColor} fontStyle="italic">
                      "Our goal is to make electric mobility accessible to everyone in Uttar Pradesh. With reliable products, affordable pricing, and dedicated service, we're building a greener future one ride at a time."
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </SlideFade>

        {/* Spare Parts & Accessories Section */}
        <SlideFade in={true} offsetY="20px" delay={0.35}>
          <Box mb={{ base: 12, md: 16 }}>
            <Heading as="h2" fontSize={{ base: "28px", md: "32px" }} fontWeight="bold" color={headingColor} mb={6} textAlign="center">
              <Icon as={FaCogs} mr={2} /> Spare Parts & Accessories
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {/* Electrical Parts */}
              <Box bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                <HStack mb={3}>
                  <Icon as={FaBolt} color="blue.500" boxSize={5} />
                  <Heading as="h4" fontSize="lg" fontWeight="bold" color={headingColor}>Electrical Parts</Heading>
                </HStack>
                <List spacing={2}>
                  {spareParts.electrical.map((part, idx) => (
                    <ListItem key={idx} fontSize="sm" color={textColor}>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      {part}
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Mechanical Parts */}
              <Box bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                <HStack mb={3}>
                  <Icon as={FaToolbox} color="orange.500" boxSize={5} />
                  <Heading as="h4" fontSize="lg" fontWeight="bold" color={headingColor}>Mechanical Parts</Heading>
                </HStack>
                <List spacing={2}>
                  {spareParts.mechanical.map((part, idx) => (
                    <ListItem key={idx} fontSize="sm" color={textColor}>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      {part}
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Accessories */}
              <Box bg={cardBg} p={5} borderRadius="xl" border="1px solid" borderColor={borderColor}>
                <HStack mb={3}>
                  <Icon as={FaHeart} color="red.500" boxSize={5} />
                  <Heading as="h4" fontSize="lg" fontWeight="bold" color={headingColor}>Accessories</Heading>
                </HStack>
                <List spacing={2}>
                  {spareParts.accessories.map((item, idx) => (
                    <ListItem key={idx} fontSize="sm" color={textColor}>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SimpleGrid>
          </Box>
        </SlideFade>

        {/* Services Offered Section */}
        <SlideFade in={true} offsetY="20px" delay={0.4}>
          <Box mb={{ base: 12, md: 16 }}>
            <Heading as="h2" fontSize={{ base: "28px", md: "32px" }} fontWeight="bold" color={headingColor} mb={6} textAlign="center">
              <Icon as={FaHeadset} mr={2} /> Services Offered
            </Heading>

            <Wrap spacing={4} justify="center">
              {servicesOffered.map((service, idx) => (
                <WrapItem key={idx}>
                  <Badge
                    bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)"
                    color="white"
                    px={6}
                    py={3}
                    borderRadius="full"
                    fontSize="md"
                  >
                    <HStack spacing={2}>
                      <Icon as={FaCheckCircle} />
                      <Text>{service}</Text>
                    </HStack>
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </SlideFade>

        {/* Best Picks Slider Section */}
        <Box mb={{ base: 12, md: 16 }}>
          <VStack spacing={4} textAlign="center" mb={{ base: 6, md: 8 }}>
            <Heading as="h2" fontSize={{ base: "28px", md: "32px", lg: "36px" }} fontWeight="bold" color={headingColor}>
              Why Choose{' '}
              <Box as="span" bgGradient="linear(to-r, #f97316, #fb923c, #22c55e, #15803d)" bgClip="text" display="inline-block">
                RMNA
              </Box>
            </Heading>
            <Text fontSize={{ base: "14px", md: "16px" }} color={textColor}>
              Reliable • Eco-Friendly • Cost-Effective Solutions
            </Text>
          </VStack>

          <Box
            position="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HStack justify="space-between" position="absolute" top="50%" w="100%" transform="translateY(-50%)" zIndex={2} px={{ base: 2, md: 4 }}>
              <Button
                onClick={prevSlide}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bg: accentColor, color: "white", transform: "scale(1.1)" }}
                size="sm"
              >
                <Icon as={FaArrowLeft} boxSize={3} />
              </Button>
              <Button
                onClick={nextSlide}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bg: accentColor, color: "white", transform: "scale(1.1)" }}
                size="sm"
              >
                <Icon as={FaArrowRight} boxSize={3} />
              </Button>
            </HStack>

            <Box overflow="hidden" borderRadius="xl">
              <Flex transition="transform 0.5s ease-in-out" transform={`translateX(-${currentSlide * 100}%)`}>
                {/* Slide 1 */}
                <Flex minW="100%" gap={{ base: 3, md: 4 }} px={{ base: 1, md: 2 }}>
                  {bestPicksItems.slice(0, 2).map((item, idx) => (
                    <Box
                      key={idx}
                      flex={1}
                      bg={cardBg}
                      p={{ base: 4, md: 5 }}
                      borderRadius="xl"
                      boxShadow="md"
                      border="1px solid"
                      borderColor={borderColor}
                      _hover={{
                        transform: "translateY(-5px) scale(1.01)",
                        boxShadow: "lg",
                        borderColor: accentColor,
                      }}
                      transition="all 0.3s ease"
                      textAlign="center"
                    >
                      <Flex justify="center" mb={3}>
                        <Flex
                          w={{ base: "60px", md: "70px" }}
                          h={{ base: "60px", md: "70px" }}
                          bgGradient={item.gradient}
                          borderRadius="full"
                          align="center"
                          justify="center"
                          boxShadow="md"
                        >
                          <Icon as={item.icon} boxSize={{ base: 6, md: 7 }} color="white" />
                        </Flex>
                      </Flex>

                      <Heading as="h3" fontSize={{ base: "18px", md: "20px" }} fontWeight="bold" color={headingColor} mb={2}>
                        {item.title}
                      </Heading>

                      <Text fontSize={{ base: "12px", md: "13px" }} color={textColor} lineHeight="1.5" mb={3}>
                        {item.description}
                      </Text>

                      <Badge
                        bgGradient={`linear(to-r, ${item.color}.500, ${item.color}.600)`}
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        {item.stat}
                      </Badge>
                    </Box>
                  ))}
                </Flex>

                {/* Slide 2 */}
                <Flex minW="100%" gap={{ base: 3, md: 4 }} px={{ base: 1, md: 2 }}>
                  {bestPicksItems.slice(2, 4).map((item, idx) => (
                    <Box
                      key={idx}
                      flex={1}
                      bg={cardBg}
                      p={{ base: 4, md: 5 }}
                      borderRadius="xl"
                      boxShadow="md"
                      border="1px solid"
                      borderColor={borderColor}
                      _hover={{
                        transform: "translateY(-5px) scale(1.01)",
                        boxShadow: "lg",
                        borderColor: accentColor,
                      }}
                      transition="all 0.3s ease"
                      textAlign="center"
                    >
                      <Flex justify="center" mb={3}>
                        <Flex
                          w={{ base: "60px", md: "70px" }}
                          h={{ base: "60px", md: "70px" }}
                          bgGradient={item.gradient}
                          borderRadius="full"
                          align="center"
                          justify="center"
                          boxShadow="md"
                        >
                          <Icon as={item.icon} boxSize={{ base: 6, md: 7 }} color="white" />
                        </Flex>
                      </Flex>

                      <Heading as="h3" fontSize={{ base: "18px", md: "20px" }} fontWeight="bold" color={headingColor} mb={2}>
                        {item.title}
                      </Heading>

                      <Text fontSize={{ base: "12px", md: "13px" }} color={textColor} lineHeight="1.5" mb={3}>
                        {item.description}
                      </Text>

                      <Badge
                        bgGradient={`linear(to-r, ${item.color}.500, ${item.color}.600)`}
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                      >
                        {item.stat}
                      </Badge>
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Box>

            <HStack justify="center" mt={5} spacing={2}>
              {[0, 1].map((index) => (
                <Box
                  key={index}
                  w={currentSlide === index ? "30px" : "8px"}
                  h="6px"
                  borderRadius="full"
                  bg={currentSlide === index ? accentColor : borderColor}
                  cursor="pointer"
                  onClick={() => goToSlide(index)}
                  transition="all 0.3s ease"
                />
              ))}
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;