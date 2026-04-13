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
} from "@chakra-ui/react";
import {
  FaHeart,
  FaRocket,
  FaShieldAlt,
  FaCommentDots,
  FaLock,
  FaSmile,
  FaGlobe,
  FaQuoteRight,
  FaCheckCircle,
  FaComments,
  FaArrowLeft,
  FaArrowRight,
  FaUsers,
  FaStar,
  FaRegClock,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  
  const bgGradient = useColorModeValue(
    "linear(to-b, #fff5f7, white)",
    "linear(to-b, gray.900, #1a1a1a)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const quoteBg = useColorModeValue("pink.50", "gray.800");
  const subtleBg = useColorModeValue("gray.50", "gray.700");

  const features = [
    {
      icon: FaComments,
      title: "Real-Time Chatting",
      description: "Smooth and fast messaging with instant delivery for uninterrupted conversations",
      color: "blue.400",
      stats: "< 100ms latency",
    },
    {
      icon: FaLock,
      title: "User Privacy First",
      description: "End-to-end encryption and strong privacy controls for secure communication",
      color: "green.400",
      stats: "100% encrypted",
    },
    {
      icon: FaSmile,
      title: "Simple & Friendly Interface",
      description: "Intuitive design that's easy to navigate for users of all ages",
      color: "purple.400",
      stats: "4.8/5 rating",
    },
    {
      icon: FaShieldAlt,
      title: "Safe Community",
      description: "24/7 moderation and AI-powered systems for respectful interactions",
      color: "red.400",
      stats: "Active moderation",
    },
    {
      icon: FaGlobe,
      title: "24/7 Connectivity",
      description: "Global availability with reliable servers across multiple continents",
      color: "orange.400",
      stats: "99.9% uptime",
    },
    {
      icon: FaHeart,
      title: "Meaningful Connections",
      description: "Smart matching algorithms to help you find like-minded people",
      color: "pink.400",
      stats: "10k+ matches",
    },
    {
      icon: FaUsers,
      title: "Active Community",
      description: "Join millions of active users engaging in real conversations daily",
      color: "teal.400",
      stats: "1M+ users",
    },
    {
      icon: FaStar,
      title: "Premium Features",
      description: "Exclusive features for enhanced chatting experience",
      color: "yellow.400",
      stats: "Free tier available",
    },
    {
      icon: FaRegClock,
      title: "Instant Responses",
      description: "Quick reply suggestions and smart notifications",
      color: "cyan.400",
      stats: "< 1s response",
    },
  ];

  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const totalSlides = Math.ceil(features.length / slidesPerView);

  useEffect(() => {
    let interval;
    if (!isHovered && !isTransitioning) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, isTransitioning, totalSlides]);

  return (
    <Box bg={bgGradient} minH="100vh">
      <Container maxW="1200px" py={{ base: 12, md: 16, lg: 20 }} px={{ base: 4, md: 6 }}>
        {/* About Delbaram */}
        <VStack 
          spacing={{ base: 4, md: 6 }} 
          align="flex-start" 
          mb={{ base: 12, md: 16 }}
          sx={{
            animation: "fadeInLeft 0.8s ease-out",
            "@keyframes fadeInLeft": {
              "0%": { transform: "translateX(-30px)", opacity: 0 },
              "100%": { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          <Badge
            colorScheme="pink"
            fontSize={{ base: "sm", md: "md" }}
            px={4}
            py={1}
            borderRadius="full"
            alignSelf="flex-start"
            mb={2}
          >
            Welcome to Delbaram
          </Badge>
          <Heading 
            as="h1"
            fontSize={{ base: "36px", md: "42px", lg: "48px" }}
            fontWeight="bold"
            color={headingColor}
            lineHeight="1.2"
            letterSpacing="tight"
          >
            About Delbaram
          </Heading>
          <Text 
            fontSize={{ base: "18px", md: "20px", lg: "22px" }}
            color={accentColor}
            fontWeight="medium"
            lineHeight="1.4"
          >
            Where Real Conversations Begin
          </Text>
          <Text 
            fontSize={{ base: "16px", md: "17px", lg: "18px" }} 
            color={textColor} 
            lineHeight="1.7"
            maxW="800px"
          >
            Delbaram is more than just an online chatting platform—it's a space where real conversations begin, 
            meaningful connections grow, and people feel truly heard.
          </Text>
          <Text 
            fontSize={{ base: "15px", md: "16px", lg: "17px" }} 
            color={textColor} 
            lineHeight="1.7"
            maxW="800px"
          >
            In today's fast-paced digital world, finding genuine communication can be difficult. Delbaram was created 
            with a simple yet powerful vision: to bring people closer through safe, engaging, and authentic conversations.
          </Text>
        </VStack>

        {/* Mission & Vision */}
        <Flex 
          direction={{ base: "column", md: "row" }} 
          gap={{ base: 4, md: 6 }} 
          mb={{ base: 12, md: 16 }}
          sx={{
            animation: "fadeInRight 0.8s ease-out",
            "@keyframes fadeInRight": {
              "0%": { transform: "translateX(30px)", opacity: 0 },
              "100%": { transform: "translateX(0)", opacity: 1 },
            },
          }}
        >
          {[
            {
              icon: FaRocket,
              title: "Our Mission",
              description: "Create a secure environment where users can chat freely and connect without barriers.",
              gradient: "linear(to-r, pink.500, purple.500)",
            },
            {
              icon: FaGlobe,
              title: "Our Vision",
              description: "A global platform where conversations are honest, respectful, and every voice is valued.",
              gradient: "linear(to-r, blue.500, teal.500)",
            },
          ].map((item, index) => (
            <Box
              key={index}
              flex={1}
              bg={cardBg}
              p={{ base: 5, md: 6 }}
              borderRadius="2xl"
              boxShadow="xl"
              border="1px solid"
              borderColor={borderColor}
              _hover={{ 
                transform: { md: "translateY(-8px)" }, 
                boxShadow: "2xl",
                borderColor: accentColor,
              }}
              transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="4px"
                bgGradient={item.gradient}
              />
              <HStack spacing={4} mb={4}>
                <Flex
                  w={{ base: "45px", md: "50px" }}
                  h={{ base: "45px", md: "50px" }}
                  bg={useColorModeValue("pink.50", "gray.700")}
                  borderRadius="lg"
                  align="center"
                  justify="center"
                >
                  <Icon as={item.icon} boxSize={{ base: 5, md: 6 }} color={accentColor} />
                </Flex>
                <Heading 
                  as="h2"
                  fontSize={{ base: "22px", md: "24px" }}
                  fontWeight="semibold"
                  color={headingColor}
                >
                  {item.title}
                </Heading>
              </HStack>
              <Text 
                fontSize={{ base: "15px", md: "16px" }}
                color={textColor}
                lineHeight="1.6"
                pl={{ base: 0, md: "60px" }}
              >
                {item.description}
              </Text>
            </Box>
          ))}
        </Flex>

        {/* What Makes Delbaram Special - Fixed Slider */}
        <Box mb={{ base: 12, md: 16 }}>
          <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 10 }}>
            <Heading 
              as="h2"
              fontSize={{ base: "32px", md: "38px", lg: "42px" }}
              fontWeight="bold"
              color={headingColor}
              lineHeight="1.2"
              letterSpacing="tight"
            >
              What Makes Delbaram{' '}
              <Box as="span" color={accentColor} display="inline-block">
                Special?
              </Box>
            </Heading>
            <Text 
              fontSize={{ base: "16px", md: "18px" }}
              color={textColor}
              maxW="600px"
              lineHeight="1.6"
            >
              Features designed to make your chatting experience extraordinary
            </Text>
          </VStack>

          <Box 
            position="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slider Navigation */}
            <HStack 
              justify="space-between" 
              position="absolute" 
              top="50%" 
              w="100%" 
              transform="translateY(-50%)" 
              zIndex={2}
              px={{ base: 2, md: 4 }}
            >
              <Button
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide((prev) => {
                    const newVal = (prev - 1 + totalSlides) % totalSlides;
                    setTimeout(() => setIsTransitioning(false), 500);
                    return newVal;
                  });
                }}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bg: accentColor, color: "white", transform: "scale(1.1)" }}
                size={{ base: "sm", md: "md" }}
                transition="all 0.2s"
                isDisabled={isTransitioning}
              >
                <Icon as={FaArrowLeft} />
              </Button>
              <Button
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide((prev) => {
                    const newVal = (prev + 1) % totalSlides;
                    setTimeout(() => setIsTransitioning(false), 500);
                    return newVal;
                  });
                }}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bg: accentColor, color: "white", transform: "scale(1.1)" }}
                size={{ base: "sm", md: "md" }}
                transition="all 0.2s"
                isDisabled={isTransitioning}
              >
                <Icon as={FaArrowRight} />
              </Button>
            </HStack>

            {/* Slider Content */}
            <Box overflow="hidden" borderRadius="2xl" ref={sliderRef}>
              <Flex
                transition={isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none"}
                transform={`translateX(-${currentSlide * 100}%)`}
                gap={{ base: 3, md: 4 }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <Flex
                    key={slideIndex}
                    minW="100%"
                    gap={{ base: 3, md: 4 }}
                    px={{ base: 1, md: 2 }}
                  >
                    {features
                      .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                      .map((feature, index) => (
                        <Box
                          key={`${feature.title}-${index}`}
                          flex={1}
                          bg={cardBg}
                          p={{ base: 4, md: 5, lg: 6 }}
                          borderRadius="xl"
                          boxShadow="lg"
                          border="1px solid"
                          borderColor={borderColor}
                          _hover={{
                            transform: { md: "translateY(-8px) scale(1.02)" },
                            boxShadow: "2xl",
                            borderColor: accentColor,
                          }}
                          transition="all 0.3s ease"
                          position="relative"
                          overflow="hidden"
                        >
                          {/* Top gradient bar */}
                          <Box
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            height="3px"
                            bgGradient={`linear(to-r, ${feature.color}, ${accentColor})`}
                          />

                          <Flex direction="column" height="100%">
                            <Flex
                              w={{ base: "45px", md: "50px" }}
                              h={{ base: "45px", md: "50px" }}
                              bg={`${feature.color}15`}
                              borderRadius="lg"
                              align="center"
                              justify="center"
                              mb={4}
                              sx={{
                                animation: "floatIcon 3s ease-in-out infinite",
                                "@keyframes floatIcon": {
                                  "0%": { transform: "translateY(0px)" },
                                  "50%": { transform: "translateY(-5px)" },
                                  "100%": { transform: "translateY(0px)" },
                                },
                              }}
                            >
                              <Icon 
                                as={feature.icon} 
                                boxSize={{ base: 5, md: 6 }} 
                                color={feature.color}
                              />
                            </Flex>
                            
                            <Heading 
                              as="h3"
                              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                              fontWeight="semibold"
                              color={headingColor}
                              mb={2}
                              lineHeight="1.4"
                            >
                              {feature.title}
                            </Heading>
                            
                            <Text 
                              fontSize={{ base: "13px", md: "14px", lg: "15px" }}
                              color={textColor}
                              lineHeight="1.6"
                              mb={3}
                              flex="1"
                            >
                              {feature.description}
                            </Text>
                            
                            <Badge
                              colorScheme="pink"
                              variant="subtle"
                              alignSelf="flex-start"
                              px={2}
                              py={1}
                              borderRadius="md"
                              fontSize="xs"
                            >
                              {feature.stats}
                            </Badge>
                          </Flex>
                        </Box>
                      ))}
                  </Flex>
                ))}
              </Flex>
            </Box>

            {/* Slider Dots */}
            <HStack justify="center" mt={6} spacing={2}>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Box
                  key={index}
                  w={currentSlide === index ? "32px" : "8px"}
                  h="8px"
                  borderRadius="full"
                  bg={currentSlide === index ? accentColor : borderColor}
                  cursor="pointer"
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }}
                  transition="all 0.3s ease"
                  _hover={{ bg: accentColor, opacity: 0.8 }}
                />
              ))}
            </HStack>
          </Box>
        </Box>

        {/* Join Community Section */}
        <Box
          bg={quoteBg}
          borderRadius="2xl"
          p={{ base: 6, md: 8, lg: 10 }}
          position="relative"
          boxShadow="2xl"
          sx={{
            animation: "zoomIn 0.8s ease-out",
            "@keyframes zoomIn": {
              "0%": { transform: "scale(0.95)", opacity: 0 },
              "100%": { transform: "scale(1)", opacity: 1 },
            },
          }}
        >
          <Icon
            as={FaQuoteRight}
            position="absolute"
            top={{ base: 4, md: 6 }}
            right={{ base: 4, md: 6 }}
            boxSize={{ base: 12, md: 16 }}
            color={accentColor}
            opacity={0.1}
          />
          
          <VStack spacing={{ base: 5, md: 6 }} align="flex-start" maxW="900px">
            <Heading 
              as="h2"
              fontSize={{ base: "28px", md: "32px", lg: "36px" }}
              fontWeight="bold"
              color={headingColor}
              lineHeight="1.2"
            >
              Join the Delbaram Community
            </Heading>
            
            <Text 
              fontSize={{ base: "16px", md: "17px", lg: "18px" }}
              color={textColor}
              lineHeight="1.7"
            >
              At Delbaram, we believe conversations have the power to change moods, build relationships, 
              and create lasting bonds.
            </Text>
            
            <Text 
              fontSize={{ base: "16px", md: "17px", lg: "18px" }}
              color={textColor}
              lineHeight="1.7"
            >
              We're constantly improving our platform to make your chatting experience smoother, safer, 
              and more enjoyable.
            </Text>
            
            <Divider borderColor={borderColor} my={2} />
            
            <VStack align="flex-start" spacing={4} w="100%">
              <Heading 
                as="h3"
                fontSize={{ base: "20px", md: "22px" }}
                fontWeight="semibold"
                color={headingColor}
              >
                Why join us?
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
                {[
                  "Real conversations with real people",
                  "Safe and moderated environment",
                  "No judgment, just genuine connections",
                  "Available 24/7 worldwide",
                  "Free to join and use",
                  "Active community support",
                ].map((reason, i) => (
                  <HStack 
                    key={i} 
                    spacing={3}
                    p={3}
                    bg={subtleBg}
                    borderRadius="lg"
                    sx={{
                      animation: `fadeInRight 0.5s ease-out ${i * 0.1}s both`,
                      "@keyframes fadeInRight": {
                        "0%": { opacity: 0, transform: "translateX(-10px)" },
                        "100%": { opacity: 1, transform: "translateX(0)" },
                      },
                    }}
                  >
                    <Icon as={FaCheckCircle} color="green.400" boxSize={4} />
                    <Text fontSize={{ base: "14px", md: "15px" }} color={textColor}>
                      {reason}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>

            <HStack spacing={4} mt={4} wrap="wrap" gap={3}>
              <Button
                size={{ base: "md", md: "lg" }}
                bg="pink.500"
                color="white"
                _hover={{ 
                  bg: "pink.600", 
                  transform: { md: "scale(1.05) translateY(-2px)" },
                  boxShadow: "xl",
                }}
                borderRadius="full"
                px={{ base: 6, md: 8 }}
                leftIcon={<FaCommentDots />}
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="semibold"
                transition="all 0.3s"
              >
                Start Chatting
              </Button>
              <Button
                size={{ base: "md", md: "lg" }}
                variant="ghost"
                color={accentColor}
                _hover={{ bg: "whiteAlpha.200", transform: { md: "scale(1.05)" } }}
                fontSize={{ base: "15px", md: "16px" }}
                fontWeight="medium"
              >
                Learn More →
              </Button>
            </HStack>

            <Text 
              fontSize={{ base: "14px", md: "15px" }}
              color={textColor} 
              fontStyle="italic"
              opacity={0.8}
            >
              "Start chatting. Start connecting. Welcome to Delbaram."
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

// Helper hook for responsive breakpoints
function useBreakpointValue(values) {
  const [value, setValue] = useState(values.base);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && values.lg) {
        setValue(values.lg);
      } else if (window.innerWidth >= 768 && values.md) {
        setValue(values.md);
      } else {
        setValue(values.base);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [values]);
  
  return value;
}

export default About;