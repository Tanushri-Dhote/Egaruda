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
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaHeadset,
  FaClock,
  FaRegSmile,
  FaPhone,
  FaMapMarker,
  FaFacebook,
  FaInstagram,
  FaCity,
} from "react-icons/fa";
import { useState } from "react";

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

  const bgGradient = useColorModeValue(
    "linear(to-b, #f0fff4, white)",
    "linear(to-b, gray.900, #1a1a1a)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("orange.500", "orange.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const inputBg = useColorModeValue("gray.50", "gray.700");
  const highlightBg = useColorModeValue("orange.50", "gray.700");
  const gradientBg = "linear(to-r, #f97316, #fb923c, #22c55e, #15803d)";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Our team will get back to you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        variant: "subtle",
      });
      setFormData({ fullName: "", contactNo: "", city: "", emailId: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Box bg={bgGradient} minH="100vh">
      {/* Hero Section */}
      <Box
        bgGradient={gradientBg}
        color="white"
        py={{ base: 16, md: 20 }}
        px={6}
        position="relative"
        bgImage="images/product-image-8.jpeg"
      
        backgroundSize="cover"
        backgroundPosition="center"
        overflow="hidden"
        sx={{
          animation: "gradientShift 12s ease infinite",
          "@keyframes gradientShift": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      >
        {/* Decorative Orbs */}
        <Box
          position="absolute"
          top="-100px"
          right="-100px"
          w="350px"
          h="350px"
          borderRadius="full"
          bg="whiteAlpha.200"
          zIndex={0}
          sx={{ animation: "float 9s ease-in-out infinite" }}
        />
        <Box
          position="absolute"
          bottom="-80px"
          left="-80px"
          w="250px"
          h="250px"
          borderRadius="full"
          bg="whiteAlpha.150"
          zIndex={0}
          sx={{ animation: "float 14s ease-in-out infinite reverse" }}
        />

        <VStack spacing={5} maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
        

          <SlideFade in={true} offsetY="30px">
            <Heading
              as="h3"
              fontSize={{ base: "36px", md: "36px", lg: "48px" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="1.05"
            >
              Contact RMNA E-Mobility
            </Heading>
          </SlideFade>

          <Fade in={true} delay={0.4}>
            <Text fontSize={{ base: "16px", md: "18px" }} opacity={0.9} maxW="560px">
              Have questions about our electric scooters? Our team is ready to help you.
            </Text>
          </Fade>
        </VStack>
      </Box>

      <Container maxW="1100px" py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        {/* Contact Info + Form */}
        <ScaleFade in={true} delay={0.2}>
          <Flex direction={{ base: "column", lg: "row" }} gap={10} mb={12}>
            {/* Left: Contact Information */}
            <Box
              flex="1"
              bg={cardBg}
              borderRadius="3xl"
              border="1px solid"
              borderColor={borderColor}
              overflow="hidden"
              boxShadow="xl"
              _hover={{ transform: "translateY(-6px)", boxShadow: "2xl" }}
              transition="all 0.4s ease"
            >
              <Box h="5px" bgGradient={gradientBg} />

              <Box p={{ base: 8, md: 10 }}>
                <Flex
                  w="70px"
                  h="70px"
                  bgGradient={gradientBg}
                  borderRadius="full"
                  align="center"
                  justify="center"
                  mb={6}
                  boxShadow="lg"
                >
                  <Icon as={FaEnvelope} boxSize={9} color="white" />
                </Flex>

                <Heading as="h2" fontSize={{ base: "28px", md: "32px" }} mb={3} color={headingColor}>
                  Got Queries? We’ve Got Answers!
                </Heading>

                <Text fontSize="15.5px" color={textColor} mb={8} lineHeight="1.7">
                  Whether you're interested in our electric scooters, need support, or want dealer information, feel free to reach out.
                </Text>

                <VStack spacing={6} align="flex-start">
                  {/* Address 1 */}
                  <HStack spacing={4} align="flex-start">
                    <Icon as={FaMapMarker} boxSize={6} color={accentColor} mt={1} />
                    <Box>
                      <Text fontWeight="semibold" color={headingColor} mb={1}>
                        RMNA E-Mobility Services (Bara)
                      </Text>
                      <Text color={textColor} fontSize="14.5px" lineHeight="1.6">
                        Village & Post- Bara, Teh – Haidergarh,<br />
                        Near Neeraj Hotel, Sultanpur Road,<br />
                        Uttar Pradesh - 225126
                      </Text>
                    </Box>
                  </HStack>

                  {/* Address 2 */}
                  <HStack spacing={4} align="flex-start">
                    <Icon as={FaMapMarker} boxSize={6} color={accentColor} mt={1} />
                    <Box>
                      <Text fontWeight="semibold" color={headingColor} mb={1}>
                        RMNA E-Mobility Services (Akbarpur)
                      </Text>
                      <Text color={textColor} fontSize="14.5px" lineHeight="1.6">
                        Ragad Ganj, Police Line, Tanda Road,<br />
                        Akbarpur, Ambedkar Nagar,<br />
                        Uttar Pradesh - 224122
                      </Text>
                    </Box>
                  </HStack>

                  <HStack spacing={4} align="flex-start">
                    <Icon as={FaPhone} boxSize={6} color={accentColor} mt={1} />
                    <Box>
                      <Text fontWeight="semibold" color={headingColor} mb={1}>
                        Phone
                      </Text>
                      <Text color={textColor} fontSize="15px">
                        +91 9695600185<br />
                        +91 9125948111
                      </Text>
                    </Box>
                  </HStack>

                  <HStack spacing={4} align="flex-start">
                    <Icon as={FaEnvelope} boxSize={6} color={accentColor} mt={1} />
                    <Box>
                      <Text fontWeight="semibold" color={headingColor} mb={1}>
                        Email
                      </Text>
                      <Text color={textColor} fontSize="15px">
                        ramnamultiservices@gmail.com
                      </Text>
                    </Box>
                  </HStack>

                  <HStack spacing={4} align="flex-start">
                    <Icon as={FaClock} boxSize={6} color={accentColor} mt={1} />
                    <Box>
                      <Text fontWeight="semibold" color={headingColor} mb={1}>
                        Support Hours
                      </Text>
                      <Text color={textColor} fontSize="14.5px">
                        Monday - Saturday: 10:00 AM - 6:00 PM
                      </Text>
                    </Box>
                  </HStack>
                </VStack>

                <Box mt={8}>
                  <Badge bg={highlightBg} color={accentColor} px={4} py={2} borderRadius="full" fontSize="sm">
                    <HStack>
                      <Icon as={FaRegSmile} />
                      <Text>24/7 Online Support Available</Text>
                    </HStack>
                  </Badge>
                </Box>
              </Box>
            </Box>

            {/* Right: Contact Form */}
            <Box
              flex="1.1"
              bg={cardBg}
              borderRadius="3xl"
              border="1px solid"
              borderColor={borderColor}
              overflow="hidden"
              boxShadow="xl"
              _hover={{ transform: "translateY(-6px)", boxShadow: "2xl" }}
              transition="all 0.4s ease"
            >
              <Box h="5px" bgGradient={gradientBg} />

              <Box p={{ base: 8, md: 10 }}>
                <VStack align="flex-start" spacing={5}>
                  <Box>
                    <Heading as="h2" fontSize={{ base: "26px", md: "30px" }} color={headingColor} mb={2}>
                      Send Us a Message
                    </Heading>
                    <Text color={textColor} fontSize="15px" lineHeight="1.6">
                      Fill the form below and our team will respond as soon as possible.
                    </Text>
                    <Text fontSize="13px" color="red.500" mt={1}>
                      * Required fields
                    </Text>
                  </Box>

                  <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <VStack spacing={6} w="100%">
                      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                        <FormControl isRequired>
                          <FormLabel fontSize="14px" color={headingColor}>Full Name *</FormLabel>
                          <InputGroup>
                            <InputLeftElement>
                              <Icon as={FaUser} color={accentColor} />
                            </InputLeftElement>
                            <Input
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Your full name"
                              bg={inputBg}
                              borderColor={borderColor}
                              _focus={{ borderColor: accentColor }}
                              py={6}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel fontSize="14px" color={headingColor}>Contact No. *</FormLabel>
                          <InputGroup>
                            <InputLeftElement>
                              <Icon as={FaPhone} color={accentColor} />
                            </InputLeftElement>
                            <Input
                              name="contactNo"
                              type="tel"
                              value={formData.contactNo}
                              onChange={handleChange}
                              placeholder="Your phone number"
                              bg={inputBg}
                              borderColor={borderColor}
                              _focus={{ borderColor: accentColor }}
                              py={6}
                            />
                          </InputGroup>
                        </FormControl>
                      </SimpleGrid>

                      <FormControl isRequired>
                        <FormLabel fontSize="14px" color={headingColor}>City *</FormLabel>
                        <InputGroup>
                          <InputLeftElement>
                            <Icon as={FaCity} color={accentColor} />
                          </InputLeftElement>
                          <Input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Your city"
                            bg={inputBg}
                            borderColor={borderColor}
                            _focus={{ borderColor: accentColor }}
                            py={6}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="14px" color={headingColor}>Email Id *</FormLabel>
                        <InputGroup>
                          <InputLeftElement>
                            <Icon as={FaEnvelope} color={accentColor} />
                          </InputLeftElement>
                          <Input
                            name="emailId"
                            type="email"
                            value={formData.emailId}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            bg={inputBg}
                            borderColor={borderColor}
                            _focus={{ borderColor: accentColor }}
                            py={6}
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="14px" color={headingColor}>Message *</FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message here..."
                          rows={6}
                          bg={inputBg}
                          borderColor={borderColor}
                          _focus={{ borderColor: accentColor }}
                          resize="vertical"
                        />
                      </FormControl>

                      <Button
                        type="submit"
                        size="lg"
                        w="full"
                        bgGradient={gradientBg}
                        color="white"
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                        _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
                        leftIcon={<FaPaperPlane />}
                        py={7}
                        fontSize="16px"
                        fontWeight="bold"
                      >
                        Send Message
                      </Button>
                    </VStack>
                  </form>
                </VStack>
              </Box>
            </Box>
          </Flex>
        </ScaleFade>

        {/* Customer Support Section */}
        <ScaleFade in={true} delay={0.3}>
          <Box
            bg={cardBg}
            borderRadius="3xl"
            border="1px solid"
            borderColor={borderColor}
            overflow="hidden"
            boxShadow="xl"
            _hover={{ transform: "translateY(-4px)" }}
            transition="all 0.3s"
          >
            <Box h="5px" bgGradient={gradientBg} />

            <Box p={{ base: 8, md: 10 }}>
              <HStack spacing={4} mb={6}>
                <Flex
                  w="55px"
                  h="55px"
                  bgGradient={gradientBg}
                  borderRadius="full"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaHeadset} boxSize={7} color="white" />
                </Flex>
                <Heading as="h3" fontSize="26px" color={headingColor}>
                  Customer Support
                </Heading>
              </HStack>

              <Divider mb={6} borderColor={borderColor} />

              <Text color={textColor} lineHeight="1.7" mb={8} maxW="700px">
                Have a query about your scooty, warranty, service, or any other assistance? 
                Our dedicated support team is ready to help you with quick and reliable solutions.
              </Text>

              <Box>
                <Text fontWeight="medium" mb={3} color={headingColor}>Follow Us</Text>
                <HStack spacing={4}>
                  <Link href="#" _hover={{ transform: "scale(1.15)" }} transition="0.2s">
                    <Flex
                      w="48px"
                      h="48px"
                      bg={highlightBg}
                      borderRadius="full"
                      align="center"
                      justify="center"
                      _hover={{ bgGradient: gradientBg }}
                    >
                      <Icon as={FaFacebook} boxSize={6} color={accentColor} _hover={{ color: "white" }} />
                    </Flex>
                  </Link>

                  <Link href="#" _hover={{ transform: "scale(1.15)" }} transition="0.2s">
                    <Flex
                      w="48px"
                      h="48px"
                      bg={highlightBg}
                      borderRadius="full"
                      align="center"
                      justify="center"
                      _hover={{ bgGradient: gradientBg }}
                    >
                      <Icon as={FaInstagram} boxSize={6} color={accentColor} _hover={{ color: "white" }} />
                    </Flex>
                  </Link>
                </HStack>
              </Box>
            </Box>
          </Box>
        </ScaleFade>
      </Container>
    </Box>
  );
};

export default Contact;