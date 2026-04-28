import React, { useState } from 'react';
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
  Badge,
  Avatar,
  Image,
  List,
  ListItem,
  ListIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import {
  FaLeaf,
  FaShieldAlt,
  FaBullseye,
  FaEye,
  FaBriefcase,
  FaBuilding,
  FaQuoteRight,
  FaCheckCircle,
  FaBolt,
  FaHeadset,
  FaGlobe,
  FaHeart,
  FaCogs,
  FaPlug,
  FaRoad,
  FaTachometerAlt,
  FaRocket,
  FaCrown,
  FaHandsHelping,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const bgGradient = useColorModeValue('linear(to-b, #f7fafc, white)', 'linear(to-b, gray.900, #1a1a1a)');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentGreen = useColorModeValue('green.500', 'green.300');
  const accentOrange = useColorModeValue('orange.500', 'orange.300');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const subtleBg = useColorModeValue('gray.50', 'gray.700/50');
  const gradientBadge = 'linear(to-r, green.400, yellow.400, orange.400)';


  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: FaHeart, color: 'red' },
    { label: 'Models Available', value: '7+', icon: FaCrown, color: 'yellow' },
    { label: 'Service Centers', value: '25+', icon: FaHeadset, color: 'blue' },
    { label: 'Years Experience', value: '10+', icon: FaCalendarAlt, color: 'green' },
  ];

  const coreValues = [
    { title: 'Eco-Friendly', icon: FaLeaf, description: 'Zero emission scooters for a greener tomorrow', color: 'green' },
    { title: 'Reliable', icon: FaShieldAlt, description: 'Durable build with consistent performance', color: 'blue' },
    { title: 'Innovation', icon: FaRocket, description: 'Smart features & modern design', color: 'purple' },
    { title: 'Customer First', icon: FaHandsHelping, description: 'Exceptional support & service', color: 'orange' },
  ];

  const models = [
    { name: 'Double Light', image: '/images/Double Light.jpeg', tag: 'Premium', icon: FaStar, color: 'yellow' },
    { name: 'Legendre LD', image: '/images/Legender- LD.jpeg', tag: 'Performance', icon: FaTachometerAlt, color: 'orange' },
    { name: 'Mini Activa (CS)', image: '/images/Mini Activa (CS).jpeg', tag: 'Compact', icon: FaBolt, color: 'blue' },
    { name: 'Big Daddy - CS3', image: '/images/Big Daddy- CS3.jpeg', tag: 'Power', icon: FaShieldAlt, color: 'green' },
    { name: 'THAR - E4', image: '/images/THAR- E4.jpeg', tag: 'Adventure', icon: FaRoad, color: 'red' },
    { name: 'Momentum Q7', image: '/images/Momentum- Q7.jpeg', tag: 'Smart', icon: FaPlug, color: 'teal' },
    { name: 'Luxury - CS2', image: '/images/Luxury- CS2.jpeg', tag: 'Luxury', icon: FaCrown, color: 'purple' },
    { name: 'Rider - FH', image: '/images/Rider - FH.jpeg', tag: 'Comfort', icon: FaHandsHelping, color: 'pink' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <Box bg={bgGradient} minH="100vh" position="relative" overflow="hidden">
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-10%"
        right="-10%"
        width="600px"
        height="600px"
        borderRadius="full"
        bg="green.50"
        opacity="0.5"
        filter="blur(100px)"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        width="500px"
        height="500px"
        borderRadius="full"
        bg="orange.50"
        opacity="0.4"
        filter="blur(100px)"
        zIndex="0"
      />

      <Container maxW="1200px" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }} position="relative" zIndex="1">

        {/* ===== OUR STORY HERO SECTION ===== */}
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          mb={20}
        >
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={0}
            align="center"
            bg={cardBg}
            borderRadius="3xl"
            overflow="hidden"
            boxShadow="xl"
            border="1px solid"
            borderColor={borderColor}
          >
            <Box flex="1" w="100%" minH={{ base: '300px', md: '450px' }} position="relative" overflow="hidden">
              <Image
                src="/images/ashish-rajdev.webp"
                alt="RMNA Journey"
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.5s ease"
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-r, transparent 20%, rgba(0,0,0,0.05) 100%)"
              />
            </Box>

            <Box flex="1" p={{ base: 8, md: 10 }}>
              <VStack spacing={6} align="flex-start">
                <MotionBox variants={itemVariants}>
                  <Badge
                    bgGradient={gradientBadge}
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="semibold"
                  >
                    <HStack spacing={2}>
                      <Icon as={FaRocket} />
                      <Text>RMNA E-Mobility Services</Text>
                    </HStack>
                  </Badge>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Heading
                    as="h1"
                    fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="1.1"
                    color={headingColor}
                  >
                    Our Story
                  </Heading>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="bold"
                    bgGradient="linear(to-r, green.500, green.700, orange.500, orange.400)"
                    bgClip="text"
                    mb={4}
                  >
                    Redefining Urban Commuting
                  </Heading>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} lineHeight="tall">
                    At <Text as="span" fontWeight="bold" color="green.500">RMNA E-Mobility Services</Text>, we're driven by a single mission — to transform urban transportation with smart, sustainable, and stylish electric vehicles. We believe the future of mobility is green, connected, and intelligent.
                  </Text>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} lineHeight="tall">
                    Every ride with RMNA isn't just a journey — it's a step towards a cleaner, smarter, and better tomorrow. Our electric scooters are designed with precision, powered by innovation, and built for performance.
                  </Text>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <HStack spacing={4}>
                    <Button
                      size="lg"
                      bgGradient="linear(to-r, green.500, green.600)"
                      color="white"
                      px={8}
                      _hover={{
                        transform: "translateY(-3px)",
                        boxShadow: "xl",
                      }}
                      transition="all 0.3s ease"
                      rightIcon={<Icon as={FaRocket} />}
                      onClick={() => navigate("/gallery")}
                    >
                      Explore Models
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      borderColor="green.500"
                      color="green.500"
                      px={8}
                      _hover={{
                        bg: "green.50",
                        transform: "translateY(-3px)",
                      }}
                      transition="all 0.3s ease"
                      onClick={() => navigate("/contact")}
                    >
                      Contact Us
                    </Button>
                  </HStack>
                </MotionBox>
              </VStack>
            </Box>
          </Flex>
        </MotionBox>

        {/* ===== STATS SECTION ===== */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          mb={20}
        >
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
            {stats.map((stat, idx) => (
              <MotionBox key={idx} variants={itemVariants}>
                <Box
                  bg={cardBg}
                  p={6}
                  borderRadius="2xl"
                  textAlign="center"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor={borderColor}
                  position="relative"
                  overflow="hidden"
                  _hover={{ transform: 'translateY(-6px)', boxShadow: 'xl' }}
                  transition="all 0.3s ease"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="4px"
                    bgGradient={gradientBadge}
                  />
                  <Flex
                    w="60px"
                    h="60px"
                    bg={`${stat.color}.100`}
                    borderRadius="full"
                    align="center"
                    justify="center"
                    mx="auto"
                    mb={4}
                  >
                    <Icon as={stat.icon} boxSize={6} color={`${stat.color}.500`} />
                  </Flex>
                  <Stat>
                    <StatNumber fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={headingColor}>
                      {stat.value}
                    </StatNumber>
                    <StatLabel fontSize="sm" color={textColor} fontWeight="medium">
                      {stat.label}
                    </StatLabel>
                  </Stat>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* ===== MISSION & VISION + FOUNDER ===== */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={20}>
          {/* Mission & Vision */}
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <Box bg={cardBg} p={8} borderRadius="2xl" border="1px solid" borderColor={borderColor} boxShadow="sm" h="100%">
              <Tabs variant="soft-rounded" colorScheme="green" onChange={(index) => setActiveTab(index)}>
                <TabList mb={6} bg={subtleBg} p={1} borderRadius="full" w="fit-content">
                  <Tab
                    _selected={{ bg: 'green.500', color: 'white', fontWeight: 'semibold' }}
                    borderRadius="full"
                    px={6}
                    py={2}
                    fontWeight="medium"
                  >
                    Mission
                  </Tab>
                  <Tab
                    _selected={{ bg: 'green.500', color: 'white', fontWeight: 'semibold' }}
                    borderRadius="full"
                    px={6}
                    py={2}
                    fontWeight="medium"
                  >
                    Vision
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel px={0} pt={2}>
                    <VStack spacing={5} align="flex-start">
                      <Flex w="56px" h="56px" bg="green.100" borderRadius="xl" align="center" justify="center">
                        <Icon as={FaBullseye} boxSize={7} color="green.600" />
                      </Flex>
                      <Heading as="h3" fontSize="xl" color={headingColor}>Our Mission</Heading>
                      <Text color={textColor} lineHeight="tall" fontSize="md">
                        To provide reliable, eco-friendly, and cost-effective electric mobility solutions that make sustainable transportation accessible to everyone, while delivering exceptional service and support across Uttar Pradesh and beyond.
                      </Text>
                      <HStack spacing={2} pt={2} bg="green.50" px={4} py={2} borderRadius="lg">
                        <Icon as={FaCheckCircle} color="green.500" boxSize={5} />
                        <Text fontSize="sm" color="green.700" fontWeight="semibold">Driving Green Mobility</Text>
                      </HStack>
                    </VStack>
                  </TabPanel>
                  <TabPanel px={0} pt={2}>
                    <VStack spacing={5} align="flex-start">
                      <Flex w="56px" h="56px" bg="orange.100" borderRadius="xl" align="center" justify="center">
                        <Icon as={FaEye} boxSize={7} color="orange.600" />
                      </Flex>
                      <Heading as="h3" fontSize="xl" color={headingColor}>Our Vision</Heading>
                      <Text color={textColor} lineHeight="tall" fontSize="md">
                        To become a leading provider of electric mobility solutions across India, creating a robust network of dealerships and service centers that bring green transportation to every corner of the country.
                      </Text>
                      <HStack spacing={2} pt={2} bg="orange.50" px={4} py={2} borderRadius="lg">
                        <Icon as={FaGlobe} color="orange.500" boxSize={5} />
                        <Text fontSize="sm" color="orange.700" fontWeight="semibold">Expanding Across India</Text>
                      </HStack>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </MotionBox>

          {/* Founder Profile */}
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <Box bg={cardBg} p={8} borderRadius="2xl" border="1px solid" borderColor={borderColor} textAlign="center" h="100%">
              <Avatar
                size="2xl"
                name="Abhishek Verma"
                src="/images/ashish-rajdev.webp"
                mb={4}
                mx="auto"
                boxSize="120px"
                border="4px solid"
                borderColor="green.500"
              />
              <Heading as="h3" fontSize="2xl" color={headingColor} mb={2}>
                Abhishek Verma
              </Heading>
              <Badge colorScheme="green" mb={4} fontSize="md" px={3} py={1}>
                Founder & Director
              </Badge>
              <VStack spacing={2} align="center" mb={4}>
                <HStack>
                  <Icon as={FaBriefcase} color="green.500" />
                  <Text fontSize="sm" color={textColor}>10+ Years in E-Mobility</Text>
                </HStack>
                <HStack>
                  <Icon as={FaBuilding} color="green.500" />
                  <Text fontSize="sm" color={textColor}>Founder of RMNA E-Mobility</Text>
                </HStack>
              </VStack>
              <Box bg={subtleBg} p={4} borderRadius="xl" position="relative">
                <Icon as={FaQuoteRight} position="absolute" top={2} left={2} color="green.200" boxSize={4} />
                <Text fontSize="sm" fontStyle="italic" color={textColor} pl={4}>
                  Our goal is to make electric mobility accessible to everyone. With reliable products, affordable pricing, and dedicated service, we're building a greener future one ride at a time.
                </Text>
              </Box>
            </Box>
          </MotionBox>
        </SimpleGrid>

        {/* ===== CORE VALUES ===== */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          mb={20}
        >
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} textAlign="center" mb={10} color={headingColor}>
            Our Core Values
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
            {coreValues.map((value, idx) => (
              <Box
                key={idx}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                textAlign="center"
                border="1px solid"
                borderColor={borderColor}
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg', borderColor: `${value.color}.300` }}
                transition="all 0.2s"
              >
                <Flex
                  w="60px"
                  h="60px"
                  bg={`${value.color}.100`}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  mx="auto"
                  mb={4}
                >
                  <Icon as={value.icon} boxSize={7} color={`${value.color}.600`} />
                </Flex>
                <Heading as="h4" fontSize="lg" mb={2} color={headingColor}>
                  {value.title}
                </Heading>
                <Text fontSize="sm" color={textColor}>
                  {value.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* ===== MODELS SECTION ===== */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          mb={20}
        >
          <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} textAlign="center" mb={4} color={headingColor}>
            Our Electric Scooter Models
          </Heading>
          <Text textAlign="center" color={textColor} mb={10} maxW="2xl" mx="auto">
            Discover our range of premium electric scooters designed for every need
          </Text>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
            {models.map((model, idx) => (
              <Box
                key={idx}
                bg={cardBg}
                borderRadius="xl"
                overflow="hidden"
                border="1px solid"
                borderColor={borderColor}
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
                transition="all 0.2s"
              >
                <Box h="180px" overflow="hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
                <Box p={4}>
                  <Flex align="center" justify="space-between" mb={2}>
                    <Heading as="h4" fontSize="md" fontWeight="semibold" color={headingColor}>
                      {model.name}
                    </Heading>
                    <Badge colorScheme={model.color} fontSize="xs" px={2} py={1}>
                      {model.tag}
                    </Badge>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* ===== SERVICES & SPARE PARTS ===== */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          mb={20}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box bg={cardBg} p={6} borderRadius="2xl" border="1px solid" borderColor={borderColor}>
              <HStack mb={4}>
                <Icon as={FaHeadset} boxSize={6} color="green.500" />
                <Heading as="h3" fontSize="xl" color={headingColor}>Services We Offer</Heading>
              </HStack>
              <SimpleGrid columns={2} spacing={3}>
                {['Retail & Wholesale Supply', 'Dealership Support', 'After-Sales Service', 'Spare Parts Availability'].map((service, idx) => (
                  <HStack key={idx} spacing={2}>
                    <Icon as={FaCheckCircle} color="green.500" boxSize={3} />
                    <Text fontSize="sm" color={textColor}>{service}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>

            <Box bg={cardBg} p={6} borderRadius="2xl" border="1px solid" borderColor={borderColor}>
              <HStack mb={4}>
                <Icon as={FaCogs} boxSize={6} color="orange.500" />
                <Heading as="h3" fontSize="xl" color={headingColor}>Spare Parts</Heading>
              </HStack>
              <SimpleGrid columns={3} spacing={4}>
                <Box>
                  <Text fontWeight="bold" fontSize="sm" color={headingColor} mb={2}>Electrical</Text>
                  <List spacing={1}>
                    {['Controller', 'Motor', 'Wiring Kit', 'Throttle', 'Display'].map((part, idx) => (
                      <ListItem key={idx} fontSize="xs" color={textColor}>
                        <ListIcon as={FaCheckCircle} color="green.500" boxSize={2} />
                        {part}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="sm" color={headingColor} mb={2}>Mechanical</Text>
                  <List spacing={1}>
                    {['Brake Pads', 'Suspension', 'Tires', 'Wheels', 'Bearings'].map((part, idx) => (
                      <ListItem key={idx} fontSize="xs" color={textColor}>
                        <ListIcon as={FaCheckCircle} color="green.500" boxSize={2} />
                        {part}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="sm" color={headingColor} mb={2}>Accessories</Text>
                  <List spacing={1}>
                    {['Mobile Holder', 'USB Port', 'Side Box', 'LED Lights', 'Charger'].map((part, idx) => (
                      <ListItem key={idx} fontSize="xs" color={textColor}>
                        <ListIcon as={FaCheckCircle} color="green.500" boxSize={2} />
                        {part}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </MotionBox>

        {/* ===== CTA SECTION ===== */}
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <Box
            bgGradient="linear(to-r, #22c55e, #15803d)"
            borderRadius="3xl"
            p={{ base: 8, md: 12 }}
            textAlign="center"
            color="white"
          >
            <Heading as="h2" fontSize={{ base: '2xl', md: '3xl' }} mb={4}>
              Ready to Go Green?
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} maxW="2xl" mx="auto" opacity={0.9}>
              Join the electric revolution with RMNA. Contact us for a test ride or dealership inquiry.
            </Text>
            <HStack spacing={4} justify="center" wrap="wrap">
              <Button bg="white" color="green.600" size="lg" _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }} transition="all 0.2s">
                <Icon as={FaPhoneAlt} mr={2} /> Call Now
              </Button>
              <Button
                as="a"
                href="mailto:info@rmnaemobility.com"
                variant="outline"
                borderColor="white"
                color="white"
                size="lg"
                _hover={{
                  bg: "whiteAlpha.200",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                <Icon as={FaEnvelope} mr={2} />
                Email Us
              </Button>
            </HStack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AboutSection;