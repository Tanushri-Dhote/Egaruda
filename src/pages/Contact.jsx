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
  Select,
  SimpleGrid,
  Container,
  Link,
  Badge,
  useToast,
  ScaleFade,
  SlideFade,
  Fade,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaHeart,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaRegSmile,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bgGradient = useColorModeValue(
    "linear(to-b, #fff5f7, white)",
    "linear(to-b, gray.900, #1a1a1a)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const inputBg = useColorModeValue("gray.50", "gray.700");
  const highlightBg = useColorModeValue("pink.50", "gray.700");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        variant: "subtle",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Box bg={bgGradient} minH="100vh">
      {/* Hero Section */}
      <Box
        bg={useColorModeValue("pink.500", "pink.600")}
        color="white"
        py={{ base: 16, md: 20 }}
        px={6}
        position="relative"
        overflow="hidden"
        sx={{
          animation: "gradientShift 10s ease infinite",
          "@keyframes gradientShift": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      >
        {/* Decorative elements */}
        <Box
          position="absolute"
          top="-80px"
          right="-80px"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="whiteAlpha.200"
          zIndex={0}
          sx={{
            animation: "float 8s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
              "50%": { transform: "translate(-20px, 20px) rotate(5deg)" },
              "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
            },
          }}
        />
        <Box
          position="absolute"
          bottom="-50px"
          left="-50px"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="whiteAlpha.100"
          zIndex={0}
          sx={{
            animation: "float 12s ease-in-out infinite reverse",
          }}
        />

        <VStack spacing={5} maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <ScaleFade initialScale={0.9} in={true}>
            <Badge
              bg="whiteAlpha.300"
              color="white"
              fontSize={{ base: "sm", md: "md" }}
              px={4}
              py={2}
              borderRadius="full"
              mb={2}
              _hover={{ transform: "scale(1.05)", bg: "whiteAlpha.400" }}
              transition="all 0.3s"
            >
              <HStack spacing={2}>
                <Icon as={FaHeart} />
                <Text>📞 Contact Us</Text>
              </HStack>
            </Badge>
          </ScaleFade>
          
          <SlideFade in={true} offsetY="20px">
            <Heading
              as="h1"
              fontSize={{ base: "40px", md: "52px", lg: "64px" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="1.1"
            >
              Contact Us
            </Heading>
          </SlideFade>
          
          {/* <Fade in={true} delay={0.2}>
            <Text fontSize={{ base: "18px", md: "20px", lg: "22px" }} opacity={0.9} maxW="600px" lineHeight="1.6">
              Have questions or need assistance? Our support team is here to help you anytime.
            </Text>
          </Fade> */}
          
          <Fade in={true} delay={0.3}>
            <Text fontSize={{ base: "16px", md: "17px" }} opacity={0.8} maxW="550px">
              Feel free to reach out to us via email and we'll get back to you as soon as possible.
            </Text>
          </Fade>
        </VStack>
      </Box>

      <Container maxW="1000px" py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        {/* Email Support Card */}
        <ScaleFade in={true} delay={0.2}>
          <Box
            bg={cardBg}
            borderRadius="2xl"
            border="1px solid"
            borderColor={borderColor}
            overflow="hidden"
            boxShadow="2xl"
            mb={12}
            position="relative"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              height="4px"
              bgGradient="linear(to-r, pink.500, purple.500)"
            />
            
            <Flex
              direction="column"
              gap={8}
            >
              {/* Left Side - Email Info */}
              <Box
                flex="1"
                bg={useColorModeValue("pink.50", "gray.700")}
                p={{ base: 8, md: 10 }}
                textAlign="center"
              >
                <Flex
                  w={{ base: "100px", md: "120px" }}
                  h={{ base: "100px", md: "120px" }}
                  bg="white"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  mx="auto"
                  mb={6}
                  boxShadow="xl"
                  sx={{
                    animation: "floatIcon 3s ease-in-out infinite",
                    "@keyframes floatIcon": {
                      "0%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-8px)" },
                      "100%": { transform: "translateY(0px)" },
                    },
                  }}
                >
                  <Icon as={FaEnvelope} boxSize={{ base: 10, md: 12 }} color={accentColor} />
                </Flex>
                
                <Heading 
                  as="h2"
                  fontSize={{ base: "28px", md: "32px" }}
                  fontWeight="bold"
                  color={headingColor}
                  mb={3}
                >
                  📧 Email Support
                </Heading>
                
                <Link
                  href="mailto:support@delbaram.com"
                  fontSize={{ base: "20px", md: "24px" }}
                  fontWeight="bold"
                  color={accentColor}
                  _hover={{ 
                    textDecoration: "underline",
                    transform: "scale(1.02)",
                  }}
                  transition="all 0.2s"
                  display="inline-block"
                  mb={4}
                >
                  support@delbaram.com
                </Link>
                
                <HStack spacing={1} justify="center" mb={4}>
                  <Icon as={FaClock} boxSize={4} color={accentColor} />
                  <Text fontSize="14px" color={textColor}>
                    Response time: Within 24 hours
                  </Text>
                </HStack>
                
                <Text fontSize="15px" color={textColor} maxW="400px" mx="auto">
                  Send us an email anytime and our support team will get back to you promptly.
                </Text>
              </Box>

              {/* Right Side - Contact Form - COMMENTED OUT */}
              {/* <Box flex={1.5} p={{ base: 6, md: 8 }}>
                <VStack align="flex-start" spacing={6}>
                  <Box>
                    <Heading 
                      as="h2"
                      fontSize={{ base: "24px", md: "28px" }}
                      fontWeight="bold"
                      color={headingColor}
                      mb={2}
                      lineHeight="1.2"
                    >
                      Send Us a Message
                    </Heading>
                    <Text 
                      fontSize={{ base: "15px", md: "16px" }}
                      color={textColor}
                      lineHeight="1.6"
                    >
                      Fill out the form below and we'll get back to you as soon as possible.
                    </Text>
                  </Box>

                  <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <VStack spacing={5} w="100%">
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="100%">
                        <FormControl isRequired>
                          <FormLabel fontSize="14px" fontWeight="medium" color={headingColor}>
                            Your Name
                          </FormLabel>
                          <InputGroup>
                            <InputLeftElement>
                              <Icon as={FaUser} color={accentColor} />
                            </InputLeftElement>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              bg={inputBg}
                              border="1px solid"
                              borderColor={borderColor}
                              _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                              fontSize="16px"
                              py={6}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel fontSize="14px" fontWeight="medium" color={headingColor}>
                            Email Address
                          </FormLabel>
                          <InputGroup>
                            <InputLeftElement>
                              <Icon as={FaEnvelope} color={accentColor} />
                            </InputLeftElement>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              bg={inputBg}
                              border="1px solid"
                              borderColor={borderColor}
                              _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                              fontSize="16px"
                              py={6}
                            />
                          </InputGroup>
                        </FormControl>
                      </SimpleGrid>

                      <FormControl isRequired>
                        <FormLabel fontSize="14px" fontWeight="medium" color={headingColor}>
                          Subject
                        </FormLabel>
                        <Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Select a subject"
                          bg={inputBg}
                          border="1px solid"
                          borderColor={borderColor}
                          _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                          fontSize="16px"
                          py={2}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="account">Account Issues</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </Select>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="14px" fontWeight="medium" color={headingColor}>
                          Message
                        </FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Type your message here..."
                          rows={6}
                          bg={inputBg}
                          border="1px solid"
                          borderColor={borderColor}
                          _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                          fontSize="16px"
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
                        _hover={{ 
                          transform: { md: "scale(1.02)" }, 
                          bg: useColorModeValue("pink.600", "pink.400"),
                          boxShadow: "lg",
                        }}
                        leftIcon={<FaPaperPlane />}
                        fontSize="16px"
                        fontWeight="bold"
                        py={7}
                        transition="all 0.3s"
                      >
                        Send Message
                      </Button>
                    </VStack>
                  </form>
                </VStack>
              </Box> */}
            </Flex>
          </Box>
        </ScaleFade>

        {/* Quick Support Section */}
        <ScaleFade in={true} delay={0.4}>
          <Box
            bg={highlightBg}
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            border="1px solid"
            borderColor={borderColor}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
              gap={6}
            >
              <HStack spacing={4}>
                <Flex
                  w={{ base: "50px", md: "60px" }}
                  h={{ base: "50px", md: "60px" }}
                  bg="white"
                  borderRadius="full"
                  align="center"
                  justify="center"
                >
                  <Icon as={FaHeadset} boxSize={{ base: 6, md: 7 }} color={accentColor} />
                </Flex>
                <Box>
                  <Heading 
                    as="h3"
                    fontSize={{ base: "18px", md: "20px" }}
                    fontWeight="bold"
                    color={headingColor}
                    mb={1}
                  >
                    Need Immediate Assistance?
                  </Heading>
                  <Text fontSize={{ base: "14px", md: "15px" }} color={textColor}>
                    Our support team is ready to help you with any questions
                  </Text>
                </Box>
              </HStack>

              <Link
                href="mailto:support@delbaram.com"
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  size="lg"
                  bg={accentColor}
                  color="white"
                  _hover={{ 
                    transform: { md: "scale(1.05)" },
                    boxShadow: "lg",
                  }}
                  borderRadius="full"
                  px={8}
                  rightIcon={<FaArrowRight />}
                  fontSize="15px"
                  fontWeight="bold"
                >
                  Email Support Now
                </Button>
              </Link>
            </Flex>
          </Box>
        </ScaleFade>

        {/* Response Time Badge */}
        <ScaleFade in={true} delay={0.6}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            bg={accentColor}
            color="white"
            borderRadius="xl"
            p={6}
            mt={8}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={-10}
              right={-10}
              w="120px"
              h="120px"
              borderRadius="full"
              bg="whiteAlpha.200"
              sx={{
                animation: "rotate 20s linear infinite",
                "@keyframes rotate": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />
            
            <HStack spacing={4} zIndex={1}>
              <Icon 
                as={FaCheckCircle} 
                boxSize={{ base: 8, md: 10 }}
                sx={{
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", opacity: 1 },
                    "50%": { transform: "scale(1.1)", opacity: 0.8 },
                    "100%": { transform: "scale(1)", opacity: 1 },
                  },
                }}
              />
              <Box textAlign="center">
                <Heading 
                  as="h3"
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight="bold"
                >
                  Quick Response Time
                </Heading>
                <Text fontSize={{ base: "13px", md: "14px" }} opacity={0.9}>
                  We typically respond within 24 hours
                </Text>
              </Box>
            </HStack>
          </Flex>
        </ScaleFade>

        {/* Footer Note */}
        <Text 
          fontSize={{ base: "13px", md: "14px" }} 
          color={textColor} 
          textAlign="center" 
          mt={8} 
          opacity={0.7}
        >
          We value your feedback and look forward to hearing from you!
        </Text>
      </Container>
    </Box>
  );
};

export default Contact;