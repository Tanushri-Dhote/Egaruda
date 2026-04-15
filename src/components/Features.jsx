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
  FiZap,
  FiBattery,
  FiShield,
  FiAward,
  FiSmile,
  FiGlobe,
  FiClock,
  FiTrendingUp,
  FiThumbsUp,
  FiArrowRightCircle,
} from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ icon: IconComponent, title, description, color, stats, onReadMore }) => {
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const gradientBg = "linear(to-r, green.400, yellow.400, orange.400)";

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
        borderColor: "green.400",
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
        bgGradient={gradientBg}
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
        
        {/* Title and Read More button in a row */}
        <Flex 
          align="center" 
          justify="space-between" 
          wrap="wrap"
          gap={2}
          mb={2}
        >
          <Heading 
            as="h3"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            fontWeight="semibold"
            color={headingColor}
            lineHeight="1.4"
            flex="1"
          >
            {title}
          </Heading>
          
          <Button
            size="xs"
            variant="ghost"
            rightIcon={<FiArrowRightCircle />}
            onClick={onReadMore}
            color="green.500"
            _hover={{
              bgGradient: gradientBg,
              color: "white",
              transform: "translateX(3px)",
            }}
            transition="all 0.3s ease"
            fontWeight="medium"
            px={2}
          >
            Read More
          </Button>
        </Flex>
        
        <Text 
          fontSize={{ base: "13px", md: "14px", lg: "15px" }}
          color={textColor}
          lineHeight="1.6"
          mb={4}
          flex="1"
        >
          {description}
        </Text>
        
        <Badge
          bgGradient={gradientBg}
          color="white"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
          fontWeight="medium"
          alignSelf="flex-start"
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
  const navigate = useNavigate();

  const sectionBg = useColorModeValue("#f0fff4", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const gradientBg = "linear(to-r, green.400, yellow.400, orange.400)";

  const handleReadMore = () => {
    navigate('/about');
  };

  const featuresData = [
    {
      icon: FiZap,
      title: "Unmatched Power & Performance",
      description: "Feel the thrill of every ride with a high-torque motor and advanced controller that deliver seamless acceleration and next-level efficiency.",
      color: "green.500",
      stats: "2.5k+ Active Riders",
    },
    {
      icon: FiTrendingUp,
      title: "Speed That Excites",
      description: "Experience top-class performance with lightning-fast pickup and a design engineered for urban speed and comfort.",
      color: "orange.500",
      stats: "75 km/h Top Speed",
    },
    {
      icon: FiSmile,
      title: "Comfort Meets Elegance",
      description: "From ergonomic seating to a sleek, modern design, RMNA Electric Mobility combines luxury and practicality for the ultimate riding experience.",
      color: "yellow.600",
      stats: "Premium Comfort",
    },
    {
      icon: FiBattery,
      title: "Power That Lasts Longer",
      description: "Equipped with an efficient, long-lasting battery, RMNA Electric Mobility ensures fewer stops, longer rides, and non-stop adventures.",
      color: "green.500",
      stats: "120km Range",
    },
    {
      icon: FiAward,
      title: "Express Your Style",
      description: "Available in vibrant, premium color variants, RMNA Electric Mobility lets you stand out from the crowd and ride in style.",
      color: "orange.500",
      stats: "6+ Color Options",
    },
    {
      icon: FiShield,
      title: "Your Safety, Our Priority",
      description: "With front disc brakes, rear drum brakes, and a solid build, RMNA Electric Mobility gives you complete control and confidence on every road.",
      color: "yellow.600",
      stats: "Safety Certified",
    },
    {
      icon: FiClock,
      title: "Fast Charging Technology",
      description: "Get back on the road quickly with our rapid charging system that powers up your scooter in record time.",
      color: "green.500",
      stats: "80% in 2 Hours",
    },
    {
      icon: FiGlobe,
      title: "Eco-Friendly Mobility",
      description: "Zero emissions, silent operation, and sustainable design make RMNA Electric Mobility the perfect choice for green commuting.",
      color: "orange.500",
      stats: "Zero Carbon",
    },
    {
      icon: FiThumbsUp,
      title: "Smart Connectivity",
      description: "Stay connected with your scooter through our mobile app - track rides, battery status, and find charging stations.",
      color: "yellow.600",
      stats: "App Enabled",
    },
  ];

  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const totalSlides = Math.ceil(featuresData.length / slidesPerView);

  useEffect(() => {
    let interval;
    if (!isHovered && !isTransitioning) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
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
        <Badge
          bgGradient={gradientBg}
          color="white"
          fontSize={{ base: "sm", md: "md" }}
          px={4}
          py={2}
          borderRadius="full"
        >
          <HStack spacing={2}>
            <Icon as={FiZap} />
            <Text>Why Choose Us</Text>
          </HStack>
        </Badge>
        
        <Heading
          fontSize={{ base: "28px", md: "40px", lg: "48px" }}
          fontWeight="bold"
          bgGradient={gradientBg}
          bgClip="text"
          lineHeight="1.2"
          letterSpacing="tight"
          px={{ base: 2, md: 0 }}
        >
          Why Choose RMNA Electric Mobility
        </Heading>
        
        <Text 
          fontSize={{ base: "15px", md: "18px" }}
          color={textColor}
          maxW="2xl"
          lineHeight="1.6"
          px={{ base: 4, md: 0 }}
        >
          Step into the <strong>future of mobility</strong> with <strong>RMNA Electric Mobility</strong> – where <strong>power meets style,</strong> and <strong>innovation drives freedom.</strong> Here's why RMNA Electric Mobility is the <strong>perfect companion</strong> for your journey:
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
              _hover={{ bgGradient: gradientBg, color: "white", transform: "scale(1.1)" }}
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
              _hover={{ bgGradient: gradientBg, color: "white", transform: "scale(1.1)" }}
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
                      <FeatureCard 
                        key={index} 
                        {...feature} 
                        onReadMore={handleReadMore}
                      />
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
                bg={currentSlide === index ? "orange.400" : borderColor}
                cursor="pointer"
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
                transition="all 0.3s ease"
                _hover={{ bg: "orange.400", opacity: 0.8 }}
              />
            ))}
          </HStack>
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

export default FeaturesSlider;