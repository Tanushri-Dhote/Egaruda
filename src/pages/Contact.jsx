import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Container,
  Link,
  Badge,
  useToast,
  ScaleFade,
  SlideFade,
  Fade,
  Divider,
  Wrap,
  WrapItem,
  Tooltip,
  Image,
  Tag,
  TagLeftIcon,
  TagLabel
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaUser,
  FaHeadset,
  FaClock,
  FaRegSmile,
  FaPhone,
  FaMapMarker,
  FaFacebook,
  FaInstagram,
  FaCity,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
  FaRegHandshake,
  FaStar,
  FaLeaf,
  FaBolt,
  FaRegHeart,
  FaShieldAlt,
  FaGlobe,
  FaRocket,
  FaBuilding,
  FaComments
} from "react-icons/fa";
import { MdOutlineSupportAgent, MdVerified, MdEmail, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    city: "",
    emailId: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "We're Just a Message Away";

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  const bgColor = useColorModeValue('#f9fafb', '#0f172a');
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.95)", "rgba(30, 41, 59, 0.95)");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = "#22c55e";
  const accentGradient = "linear(to-r, #22c55e, #16a34a, #15803d)";
  const borderColor = useColorModeValue("rgba(0,0,0,0.08)", "rgba(255,255,255,0.08)");
  const inputBg = useColorModeValue("white", "rgba(51, 65, 85, 0.8)");
  const highlightBg = useColorModeValue("rgba(34, 197, 94, 0.08)", "rgba(34, 197, 94, 0.12)");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "✨ Message Delivered!",
        description: "Thank you for reaching out. Our team will respond within 24 hours.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
      setFormData({ fullName: "", contactNo: "", city: "", emailId: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const supportFeatures = [
    { icon: FaRocket, title: "Quick Response", desc: "Within 24 hours", color: "#22c55e" },
    { icon: FaShieldAlt, title: "Expert Support", desc: "Trained technicians", color: "#3b82f6" },
    { icon: FaGlobe, title: "Pan India Service", desc: "Available everywhere", color: "#f59e0b" },
  ];

  return (
    <Box bg={bgColor} minH="100vh" overflowX="hidden" position="relative">
      {/* Premium Hero Section with Banner Image */}
      <Box position="relative" pt={{ base: 12, md: 20 }} pb={{ base: 12, md: 20 }}>
        {/* Hero Banner Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
        >
          <Image
            src="./images/product-image-8.jpeg"
            alt="Electric scooter banner"
            objectFit="cover"
            w="100%"
            h="80%"
            opacity={0.8}
            filter="blur(3px)"
            fallbackSrc="https://via.placeholder.com/1920x600?text=RMNA+E-Mobility"
          />
          {/* Dark Overlay for better text readability */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(34,197,94,0.3))"
          />
        </Box>

        {/* Gradient Orbs */}
        <Box
          position="absolute"
          top="-150px"
          left="-100px"
          w="400px"
          h="400px"
          bg="radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)"
          borderRadius="full"
          filter="blur(60px)"
          zIndex={1}
        />
        <Box
          position="absolute"
          bottom="-100px"
          right="-50px"
          w="350px"
          h="350px"
          bg="radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)"
          borderRadius="full"
          filter="blur(60px)"
          zIndex={1}
        />

        <Container maxW="1200px" position="relative" zIndex={2}>
          <VStack spacing={{ base: 5, md: 8 }} textAlign="center">
            <ScaleFade in={true} initialScale={0.9}>
              <Badge
                bg="rgba(255,255,255,0.2)"
                backdropFilter="blur(10px)"
                color="white"
                px={5}
                py={2.5}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
                border="1px solid"
                borderColor="rgba(255,255,255,0.3)"
              >
                <HStack spacing={2}>
                  <Icon as={FaRegHandshake} />
                  <Text letterSpacing="wider">⭐ 4.9/5 Customer Satisfaction</Text>
                </HStack>
              </Badge>
            </ScaleFade>

            <SlideFade in={true} offsetY="30px">
              <Heading
                fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
                fontWeight="800"
                letterSpacing="-0.02em"
                lineHeight="1.2"
                color="white"
              >
                <Text as="span" display="inline">
                  Let's Connect &
                </Text>
                <br />
                <Text
                  as="span"
                  bgClip="text"
                  color="#4ade80"
                  position="relative"
                  display="inline-block"
                >
                  {typedText}
                  <Box
                    as="span"
                    w="2px"
                    h="0.8em"
                    bg="white"
                    display="inline-block"
                    ml={1}
                    animation="blink 1s infinite"
                    sx={{
                      "@keyframes blink": {
                        "0%, 100%": { opacity: 1 },
                        "50%": { opacity: 0 },
                      },
                    }}
                  />
                </Text>
              </Heading>
            </SlideFade>

            <Fade in={true} delay={0.4}>
              <Text fontSize="lg" color="white" maxW="650px" lineHeight="1.7" opacity={0.95}>
                Experience the future of mobility with RMNA. Whether you're looking to buy, need support,
                or want to become a dealer — we're here to help you every step of the way.
              </Text>
            </Fade>

            {/* Floating Stats - Lightened for banner visibility */}
            <HStack spacing={{ base: 4, md: 8 }} pt={4} wrap="wrap" justify="center">
              {[
                { label: "Happy Customers", value: "10K+", icon: FaRegSmile },
                { label: "Cities Served", value: "50+", icon: FaCity },
                { label: "Scooters Sold", value: "5K+", icon: FaBolt },
              ].map((stat, idx) => (
                <ScaleFade in={true} delay={0.2 + idx * 0.1} key={idx}>
                  <HStack spacing={3} bg="rgba(0,0,0,0.5)" backdropFilter="blur(10px)" px={4} py={2} borderRadius="full">
                    <Icon as={stat.icon} color="#22c55e" boxSize={5} />
                    <Box>
                      <Text fontWeight="bold" fontSize="lg" color="white">
                        {stat.value}
                      </Text>
                      <Text fontSize="xs" color="white" opacity={0.8}>
                        {stat.label}
                      </Text>
                    </Box>
                  </HStack>
                </ScaleFade>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1200px" py={16} px={{ base: 4, md: 6 }}>
        {/* Modern Contact Cards Grid - Different Design */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={16}>
          {[
            {
              icon: FaPhone,
              title: "Call Support",
              details: ["+91 96956 00185"],
              sub: "Mon-Sat, 10AM-6PM",
              gradient: '#22c55e',
              delay: 0.1
            },
            {
              icon: FaWhatsapp,
              title: "WhatsApp Chat",
              details: ["+91 9125948111"],
              sub: "Quick response within minutes",
              gradient: '#25D366',
              delay: 0.2
            },
            {
              icon: MdEmail,
              title: "Email Support",
              details: ["ramnamultiservices@gmail.com"],
              sub: "24/7 online support",
              gradient: '#3b82f6',
              delay: 0.3
            },
          ].map((item, idx) => (
            <ScaleFade in={true} delay={item.delay} key={idx}>
              <Box
                bg={cardBg}
                borderRadius="2xl"
                p={6}
                textAlign="center"
                border="1px solid"
                borderColor={borderColor}
                transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                _hover={{
                  transform: "translateY(-5px) scale(1.02)",
                  boxShadow: "xl",
                  borderColor: accentColor
                }}
              >
                <Flex
                  w="70px"
                  h="70px"
                  bg={item.gradient}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  mx="auto"
                  mb={4}
                  boxShadow="lg"
                >
                  <Icon as={item.icon} boxSize={8} color="white" />
                </Flex>
                <Text fontWeight="bold" fontSize="lg" color={headingColor} mb={2}>
                  {item.title}
                </Text>
                {item.details.map((detail, i) => (
                  <Text key={i} fontSize="md" fontWeight="600" color={accentColor} mb={1}>
                    {detail}
                  </Text>
                ))}
                <Text fontSize="xs" color={textColor} mt={2}>
                  {item.sub}
                </Text>
              </Box>
            </ScaleFade>
          ))}
        </SimpleGrid>

        {/* Main Contact Section - Horizontal Split Layout */}
        <Flex direction={{ base: "column", lg: "row" }} gap={8} mb={16}>
          {/* Left: Locations with Timeline Design */}
          <Box flex="1.2">
            <SlideFade in={true} delay={0.2} offsetY="30px">
              <Box
                bg={cardBg}
                borderRadius="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor={borderColor}
              >
                <Box bg={accentColor} px={6} py={4}>
                  <HStack spacing={3}>
                    <Icon as={FaBuilding} boxSize={6} color="white" />
                    <Text color="white" fontWeight="bold" fontSize="lg">
                      Our Experience Centers
                    </Text>
                  </HStack>
                </Box>

                <Box p={6}>
                  {/* Timeline Style Locations */}
                  <VStack spacing={6} align="stretch" position="relative">
                    <Box position="relative" pl={8}>
                      <Box
                        position="absolute"
                        left={0}
                        top={0}
                        w="12px"
                        h="12px"
                        bg={accentColor}
                        borderRadius="full"
                        border="2px solid"
                        borderColor={cardBg}
                        boxShadow="0 0 0 3px rgba(34,197,94,0.2)"
                      />
                      <Box
                        position="absolute"
                        left="5px"
                        top="20px"
                        w="2px"
                        h="calc(100% + 20px)"
                        bg={`${accentColor}30`}
                      />
                      <Text fontWeight="bold" fontSize="md" color={headingColor} mb={3}>
                        Bara Showroom
                      </Text>
                      <HStack spacing={3} align="flex-start" mb={2}>
                        <Icon as={MdLocationOn} boxSize={4} color={accentColor} mt={1} />
                        <Text fontSize="13px" color={textColor} lineHeight="1.5">
                          Village & Post- Bara, Teh – Haidergarh
                          <br />
                          Near Neeraj Hotel, Sultanpur Road
                          <br />
                          <Text as="span" fontWeight="500">Uttar Pradesh - 225126</Text>
                        </Text>
                      </HStack>
                      <HStack spacing={2} mt={2}>
                        <Icon as={FaClock} boxSize={3} color={accentColor} />
                        <Text fontSize="11px" color={textColor}>Mon-Sat: 10AM - 7PM</Text>
                      </HStack>
                    </Box>

                    <Box position="relative" pl={8}>
                      <Box
                        position="absolute"
                        left={0}
                        top={0}
                        w="12px"
                        h="12px"
                        bg={accentColor}
                        borderRadius="full"
                        border="2px solid"
                        borderColor={cardBg}
                        boxShadow="0 0 0 3px rgba(34,197,94,0.2)"
                      />
                      <Text fontWeight="bold" fontSize="md" color={headingColor} mb={3}>
                        Akbarpur Showroom
                      </Text>
                      <HStack spacing={3} align="flex-start" mb={2}>
                        <Icon as={MdLocationOn} boxSize={4} color={accentColor} mt={1} />
                        <Text fontSize="13px" color={textColor} lineHeight="1.5">
                          Ragad Ganj, Police Line, Tanda Road
                          <br />
                          Akbarpur, Ambedkar Nagar
                          <br />
                          <Text as="span" fontWeight="500">Uttar Pradesh - 224122</Text>
                        </Text>
                      </HStack>
                      <HStack spacing={2} mt={2}>
                        <Icon as={FaClock} boxSize={3} color={accentColor} />
                        <Text fontSize="11px" color={textColor}>Mon-Sat: 10AM - 6PM</Text>
                      </HStack>
                    </Box>
                  </VStack>

                  <Divider my={6} borderColor={borderColor} />

                  <Wrap spacing={3}>
                    <WrapItem>
                      <Tag size="lg" bg={highlightBg} color={accentColor} borderRadius="full">
                        <TagLeftIcon as={MdVerified} />
                        <TagLabel>Authorized Dealer</TagLabel>
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag size="lg" bg={highlightBg} color={accentColor} borderRadius="full">
                        <TagLeftIcon as={FaStar} />
                        <TagLabel>4.9 ★ Rating</TagLabel>
                      </Tag>
                    </WrapItem>
                    <WrapItem>
                      <Tag size="lg" bg={highlightBg} color={accentColor} borderRadius="full">
                        <TagLeftIcon as={FaShieldAlt} />
                        <TagLabel>Warranty Support</TagLabel>
                      </Tag>
                    </WrapItem>
                  </Wrap>
                </Box>
              </Box>
            </SlideFade>
          </Box>

          {/* Right: Modern Contact Form */}
          <Box flex="1.6">
            <ScaleFade in={true} delay={0.3}>
              <Box
                bg={cardBg}
                borderRadius="2xl"
                border="1px solid"
                borderColor={borderColor}
                overflow="hidden"
              >
                <Box px={8} pt={8} pb={6}>
                  <VStack align="flex-start" spacing={2} mb={6}>
                    <Badge bg={highlightBg} color={accentColor} px={3} py={1.5} borderRadius="full">
                      <HStack spacing={1}>
                        <Icon as={FaComments} boxSize={3} />
                        <Text fontSize="xs">Get in Touch</Text>
                      </HStack>
                    </Badge>
                    <Heading fontSize="2xl" color={headingColor}>
                      Send us a message
                    </Heading>
                    <Text fontSize="sm" color={textColor}>
                      Fill out the form and we'll get back to you within <strong>24 hours</strong>
                    </Text>
                  </VStack>

                  <form onSubmit={handleSubmit}>
                    <VStack spacing={5}>
                      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                        <FormControl isRequired>
                          <FormLabel fontSize="sm" color={headingColor} fontWeight="500">
                            Full Name
                          </FormLabel>
                          <InputGroup>
                            <InputLeftElement>
                              <Icon as={FaUser} size="14px" color={accentColor} />
                            </InputLeftElement>
                            <Input
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="John Doe"
                              bg={inputBg}
                              borderColor={borderColor}
                              _focus={{ borderColor: accentColor, boxShadow: `0 0 0 3px ${accentColor}20` }}
                              borderRadius="lg"
                              size="lg"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel fontSize="sm" color={headingColor} fontWeight="500">
                            Contact Number
                          </FormLabel>
                          <InputGroup>
                            <InputLeftElement>
                              <Icon as={FaPhone} size="14px" color={accentColor} />
                            </InputLeftElement>
                            <Input
                              name="contactNo"
                              type="tel"
                              value={formData.contactNo}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              bg={inputBg}
                              borderColor={borderColor}
                              _focus={{ borderColor: accentColor, boxShadow: `0 0 0 3px ${accentColor}20` }}
                              borderRadius="lg"
                              size="lg"
                            />
                          </InputGroup>
                        </FormControl>
                      </SimpleGrid>

                      <FormControl isRequired>
                        <FormLabel fontSize="sm" color={headingColor} fontWeight="500">
                          City
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement>
                            <Icon as={FaCity} size="14px" color={accentColor} />
                          </InputLeftElement>
                          <Input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Your city"
                            bg={inputBg}
                            borderColor={borderColor}
                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 3px ${accentColor}20` }}
                            borderRadius="lg"
                            size="lg"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="sm" color={headingColor} fontWeight="500">
                          Email Address
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement>
                            <Icon as={FaEnvelope} size="14px" color={accentColor} />
                          </InputLeftElement>
                          <Input
                            name="emailId"
                            type="email"
                            value={formData.emailId}
                            onChange={handleChange}
                            placeholder="hello@example.com"
                            bg={inputBg}
                            borderColor={borderColor}
                            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 3px ${accentColor}20` }}
                            borderRadius="lg"
                            size="lg"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="sm" color={headingColor} fontWeight="500">
                          Message
                        </FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          bg={inputBg}
                          borderColor={borderColor}
                          _focus={{ borderColor: accentColor, boxShadow: `0 0 0 3px ${accentColor}20` }}
                          borderRadius="lg"
                          resize="vertical"
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        size="lg"
                        w="full"
                        bg={accentColor}
                        color="white"
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                        _hover={{ bg: "#16a34a", transform: "translateY(-2px)", boxShadow: "lg" }}
                        _active={{ transform: "translateY(0)" }}
                        rightIcon={<FaArrowRight />}
                        borderRadius="lg"
                        fontWeight="600"
                        transition="all 0.2s"
                      >
                        Send Message
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </Box>
            </ScaleFade>
          </Box>
        </Flex>

        {/* Support Section - Different Design */}
        <ScaleFade in={true} delay={0.4}>
          <Box
            bg={useColorModeValue("#f7fafc", "#1a202c")}
            borderRadius="2xl"
            p={6}
            border="1px solid"
            borderColor={borderColor}
          >
            <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={4}>
              <HStack spacing={4}>
                <Flex
                  w="50px"
                  h="50px"
                  bg={accentColor}
                  borderRadius="full"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaHeadset} boxSize={6} color="white" />
                </Flex>
                <Box>
                  <Text fontWeight="bold" color={headingColor}>
                    24/7 Customer Support
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    Need immediate assistance? We're here for you
                  </Text>
                </Box>
              </HStack>

              <HStack spacing={3}>
                <Link href="tel:+919695600185">
                  <Button size="md" variant="outline" borderColor={accentColor} color={accentColor}>
                    Call Now
                  </Button>
                </Link>
                <Link href="https://wa.me/919125948111" isExternal>
                  <Button size="md" bg="#25D366" color="white" _hover={{ bg: "#128C7E" }}>
                    <Icon as={FaWhatsapp} mr={2} />
                    WhatsApp
                  </Button>
                </Link>
              </HStack>
            </Flex>
          </Box>
        </ScaleFade>
      </Container>

    </Box>
  );
};

export default Contact;