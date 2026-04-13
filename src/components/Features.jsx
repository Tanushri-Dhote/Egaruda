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
  Badge,
  Container,
} from "@chakra-ui/react";
import { 
  FiUsers, 
  FiUserPlus, 
  FiEye, 
  FiHeart, 
  FiStar, 
  FiMessageCircle,
  FiArrowLeft,
  FiArrowRight,
  FiShield,
  FiLock,
  FiSmile,
  FiGlobe,
  FiClock
} from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const FeatureCard = ({ icon: IconComponent, title, description, color, stats }) => {
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const accentColor = useColorModeValue("pink.500", "pink.300");

  return (
    <Box
      flex={1}
      bg={bg}
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
      height="100%"
    >
      {/* Top gradient bar */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="3px"
        bgGradient={`linear(to-r, ${color}, ${accentColor})`}
      />

      <Flex direction="column" height="100%">
        <Flex
          w={{ base: "45px", md: "50px" }}
          h={{ base: "45px", md: "50px" }}
          bg={`${color}15`}
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
            as={IconComponent} 
            boxSize={{ base: 5, md: 6 }} 
            color={color}
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
          {title}
        </Heading>
        
        <Text 
          fontSize={{ base: "13px", md: "14px", lg: "15px" }}
          color={textColor}
          lineHeight="1.6"
          mb={3}
          flex="1"
        >
          {description}
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
          {stats}
        </Badge>
      </Flex>
    </Box>
  );
};

const FeaturesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const sectionBg = useColorModeValue("#fff5f7", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("pink.500", "pink.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const featuresData = [
    {
      icon: FiUsers,
      title: "Online Users",
      description: "See who is online and ready to connect instantly with real-time updates.",
      color: "green.400",
      stats: "2.5k+ active",
    },
    {
      icon: FiUserPlus,
      title: "New Members",
      description: "Discover newly joined members near you and expand your network.",
      color: "blue.400",
      stats: "500+ daily",
    },
    {
      icon: FiEye,
      title: "They Viewed You",
      description: "Check who has visited your profile and shown interest in you.",
      color: "purple.400",
      stats: "Real-time",
    },
    {
      icon: FiHeart,
      title: "Your Likes",
      description: "Track people you liked and those who liked you back.",
      color: "pink.400",
      stats: "Mutual Match",
    },
    {
      icon: FiStar,
      title: "Recommended Matches",
      description: "Smart matching algorithms that help you find like-minded people.",
      color: "orange.400",
      stats: "AI Powered",
    },
    {
      icon: FiMessageCircle,
      title: "Real-Time Chatting",
      description: "Smooth and fast messaging with instant delivery for uninterrupted conversations.",
      color: "teal.400",
      stats: "Instant",
    },
    {
      icon: FiLock,
      title: "User Privacy First",
      description: "End-to-end encryption and strong privacy controls for secure communication.",
      color: "cyan.400",
      stats: "100% Secure",
    },
    {
      icon: FiShield,
      title: "Safe Community",
      description: "Active moderation and AI-powered systems for respectful interactions.",
      color: "red.400",
      stats: "Moderated",
    },
    {
      icon: FiSmile,
      title: "Friendly Interface",
      description: "Intuitive design that's easy to navigate for users of all ages.",
      color: "yellow.400",
      stats: "4.8/5 Rating",
    },
    {
      icon: FiGlobe,
      title: "Global Connectivity",
      description: "Availability with reliable servers across multiple continents 24/7.",
      color: "blue.500",
      stats: "Worldwide",
    },
    {
      icon: FiClock,
      title: "Instant Responses",
      description: "Quick reply suggestions and smart notifications for better engagement.",
      color: "purple.500",
      stats: "< 1s reply",
    },
    {
      icon: FiStar,
      title: "Premium Experience",
      description: "Exclusive features for enhanced chatting experience and priority support.",
      color: "pink.500",
      stats: "Premium",
    },
  ];

  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const totalSlides = Math.ceil(featuresData.length / slidesPerView);

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
    <Box
      id="features"
      py={{ base: 12, md: 20 }}
      px={{ base: 3, md: 8 }}
      bg={sectionBg}
    >
      <VStack spacing={4} mb={{ base: 8, md: 16 }} textAlign="center">
        <Heading
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          fontWeight="bold"
          bgGradient="linear(to-r, pink.500, purple.500)"
          bgClip="text"
          lineHeight="1.2"
          letterSpacing="tight"
          px={{ base: 2, md: 0 }}
        >
          Explore Features 💖
        </Heading>
        <Text 
          fontSize={{ base: "15px", md: "18px" }}
          color={textColor}
          maxW="2xl"
          lineHeight="1.6"
          px={{ base: 4, md: 0 }}
        >
          Discover all the amazing features we offer to enhance your experience
          and help you build meaningful connections.
        </Text>
      </VStack>
      
      <Container maxW="1280px" px={{ base: 1, md: 4 }}>
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
            px={{ base: 0, md: -2 }}
            pointerEvents="none"
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
              pointerEvents="auto"
            >
              <Icon as={FiArrowLeft} />
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
              pointerEvents="auto"
            >
              <Icon as={FiArrowRight} />
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
                  {featuresData
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((feature, index) => (
                      <FeatureCard key={index} {...feature} />
                    ))}
                  {/* Fill empty spaces with empty boxes if not enough items in the last slide */}
                  {slideIndex === totalSlides - 1 && 
                    Array.from({ length: slidesPerView - (featuresData.length % slidesPerView || slidesPerView) }).map((_, i) => (
                      <Box key={`empty-${i}`} flex={1} visibility="hidden" />
                    ))
                  }
                </Flex>
              ))}
            </Flex>
          </Box>

          {/* Slider Dots */}
          <HStack justify="center" mt={8} spacing={2}>
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
      </Container>
    </Box>
  );
};

// Helper hook for responsive breakpoints (Replicated from About.jsx)
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

export default FeaturesSlider;