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
  usePrefersReducedMotion,
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
import { keyframes } from "@emotion/react";

// Custom animations
const floatIcon = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FeatureCard = ({ icon: IconComponent, title, description, color, stats, onReadMore, index }) => {
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const [isCardHovered, setIsCardHovered] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Box
      flex={1}
      bg={bg}
      p={{ base: 5, md: 6, lg: 7 }}
      borderRadius="2xl"
      boxShadow={isCardHovered ? "2xl" : "lg"}
      border="2px solid"
      borderColor={isCardHovered ? "green.400" : borderColor}
      _hover={{
        transform: { md: "translateY(-12px) scale(1.02)" },
        boxShadow: "2xl",
      }}
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      position="relative"
      overflow="hidden"
      height="90%"
      cursor="pointer"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      animation={prefersReducedMotion ? "none" : `${slideInLeft} 0.5s ease-out ${index * 0.1}s both`}
    >
      {/* Top bar - solid color */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="4px"
        bg={color}
      />

      {/* Corner decorative element */}
      <Box
        position="absolute"
        top={0}
        right={0}
        w="60px"
        h="60px"
        bg={color}
        opacity={0.08}
        clipPath="polygon(0 0, 100% 0, 100% 100%)"
        pointerEvents="none"
      />

      <Flex direction="column" height="100%">
        <Flex
          w={{ base: "40px", md: "45px" }}
          h={{ base: "40px", md: "45px" }}
          bg={`${color}15`}
          borderRadius="xl"
          align="center"
          justify="center"
          mb={5}
          position="relative"
          animation={prefersReducedMotion ? "none" : `${floatIcon} 3s ease-in-out infinite`}
          _hover={{
            bg: color,
            transform: "scale(1.1) rotate(5deg)",
          }}
          transition="all 0.3s ease"
        >
          <Icon
            as={IconComponent}
            boxSize={{ base: 6, md: 7 }}
            color={isCardHovered ? color : color}
            transition="all 0.3s ease"
            _groupHover={{ color: "white" }}
          />
        </Flex>

        {/* Title and Read More button */}
        <Flex
          align="center"
          justify="space-between"
          wrap="wrap"
          gap={2}
          mb={3}
        >
          <Heading
            as="h3"
            fontSize={{ base: "18px", md: "20px", lg: "18px" }}
            fontWeight="bold"
            color={headingColor}
            lineHeight="1.3"
            flex="1"
            letterSpacing="-0.3px"
          >
            {title}
          </Heading>

          <Button
            size="sm"
            variant="ghost"
            rightIcon={<FiArrowRightCircle />}
            onClick={onReadMore}
            color={color}
            _hover={{
              bg: color,
              color: "white",
              transform: "translateX(5px)",
            }}
            transition="all 0.3s ease"
            fontWeight="600"
            px={3}
          >
            Read More
          </Button>
        </Flex>

        <Text
          fontSize={{ base: "12px", md: "14px" }}
          color={textColor}
          lineHeight="1.7"
          mb={5}
          flex="1"
        >
          {description}
        </Text>

        <Flex justify="space-between" align="center">
          <Badge
            bg={color}
            color="white"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="0.5px"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          >
            {stats}
          </Badge>

          {isCardHovered && (
            <Icon
              as={FiArrowRightCircle}
              color={color}
              boxSize={5}
              animation={prefersReducedMotion ? "none" : "bounce 1s infinite"}
              sx={{
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateX(0)" },
                  "50%": { transform: "translateX(5px)" },
                },
              }}
            />
          )}
        </Flex>
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
  const prefersReducedMotion = usePrefersReducedMotion();

  const sectionBg = useColorModeValue("#f0fdf4", "#0f172a");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const handleReadMore = () => {
    navigate('/about');
  };

  const featuresData = [
    {
      icon: FiZap,
      title: "Unmatched Power & Performance",
      description: "Feel the thrill of every ride with a high-torque motor and advanced controller that deliver seamless acceleration and next-level efficiency.",
      color: "#22c55e",
      stats: "2.5k+ Active Riders",
    },
    {
      icon: FiTrendingUp,
      title: "Speed That Excites",
      description: "Experience top-class performance with lightning-fast pickup and a design engineered for urban speed and comfort.",
      color: "#f97316",
      stats: "75 km/h Top Speed",
    },
    {
      icon: FiSmile,
      title: "Comfort Meets Elegance",
      description: "From ergonomic seating to a sleek, modern design, RMNA Electric Mobility combines luxury and practicality for the ultimate riding experience.",
      color: "#eab308",
      stats: "Premium Comfort",
    },
    {
      icon: FiBattery,
      title: "Power That Lasts Longer",
      description: "Equipped with an efficient, long-lasting battery, RMNA Electric Mobility ensures fewer stops, longer rides, and non-stop adventures.",
      color: "#22c55e",
      stats: "120km Range",
    },
    {
      icon: FiAward,
      title: "Express Your Style",
      description: "Available in vibrant, premium color variants, RMNA Electric Mobility lets you stand out from the crowd and ride in style.",
      color: "#f97316",
      stats: "6+ Color Options",
    },
    {
      icon: FiShield,
      title: "Your Safety, Our Priority",
      description: "With front disc brakes, rear drum brakes, and a solid build, RMNA Electric Mobility gives you complete control and confidence on every road.",
      color: "#eab308",
      stats: "Safety Certified",
    },
    {
      icon: FiClock,
      title: "Fast Charging Technology",
      description: "Get back on the road quickly with our rapid charging system that powers up your scooter in record time.",
      color: "#22c55e",
      stats: "80% in 2 Hours",
    },
    {
      icon: FiGlobe,
      title: "Eco-Friendly Mobility",
      description: "Zero emissions, silent operation, and sustainable design make RMNA Electric Mobility the perfect choice for green commuting.",
      color: "#f97316",
      stats: "Zero Carbon",
    },
    {
      icon: FiThumbsUp,
      title: "Smart Connectivity",
      description: "Stay connected with your scooter through our mobile app - track rides, battery status, and find charging stations.",
      color: "#eab308",
      stats: "App Enabled",
    },
  ];

  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const totalSlides = Math.ceil(featuresData.length / slidesPerView);

  useEffect(() => {
    let interval;
    if (!isHovered && !isTransitioning && !prefersReducedMotion) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered, isTransitioning, totalSlides, prefersReducedMotion]);

  return (
    <Box
      id="features"
      py={{ base: 12, md: 20, lg: 24 }}
      px={{ base: 3, md: 8 }}
      bg={sectionBg}
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="10%"
        left="-5%"
        w="300px"
        h="300px"
        bg="radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)"
        borderRadius="full"
        filter="blur(40px)"
        animation={prefersReducedMotion ? "none" : `${floatIcon} 15s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="10%"
        right="-5%"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)"
        borderRadius="full"
        filter="blur(50px)"
        animation={prefersReducedMotion ? "none" : `${floatIcon} 20s ease-in-out infinite reverse`}
      />

      <VStack spacing={6} mb={{ base: 10, md: 16 }} textAlign="center">
        <Badge
          bg="#22c55e"
          color="white"
          fontSize={{ base: "sm", md: "md" }}
          px={5}
          py={2.5}
          borderRadius="full"
          boxShadow="lg"
          animation={prefersReducedMotion ? "none" : `${glowPulse} 2s infinite`}
        >
          <HStack spacing={2}>
            <Icon as={FiZap} />
            <Text fontWeight="bold">Why Choose Us</Text>
          </HStack>
        </Badge>

        <Heading
          fontSize={{ base: "26px", md: "44px", lg: "40px" }}
          fontWeight="extrabold"
          color={headingColor}
          lineHeight="1.2"
          letterSpacing="-0.02em"
          px={{ base: 2, md: 0 }}
          maxW="800px"
        >
          Why Choose{" "}
          <Box as="span" color="green.500">
            <Box as="span" display="inline-flex" fontWeight="bold">
              <Text as="span" color="#f97316">RM</Text>
              <Text as="span" color="#22c55e">NA</Text>
              <Text as="span" color={useColorModeValue('black', 'white')} ml={2}>Electric Mobility</Text>
            </Box>
          </Box>
        </Heading>

        <Text
          fontSize={{ base: "12px", md: "14px" }}
          color={textColor}
          maxW="3xl"
          lineHeight="1.7"
          px={{ base: 6, md: 0 }}
        >
          Step into the <strong style={{ color: '#22c55e' }}>future of mobility</strong> with <Box as="span" fontWeight="bold">
            <Text as="span" color="#f97316">RM</Text>
            <Text as="span" color="#22c55e">NA</Text>
            <Text as="span" color={useColorModeValue('black', 'white')}> Electric Mobility</Text>
          </Box> – where <strong style={{ color: '#eab308' }}>power meets style,</strong> and <strong style={{ color: '#22c55e' }}>innovation drives freedom.</strong> Here's why <Box as="span" fontWeight="bold">
            <Text as="span" color="#f97316">RM</Text>
            <Text as="span" color="#22c55e">NA</Text>
            <Text as="span" color={useColorModeValue('black', 'white')}> Electric Mobility</Text>
          </Box> is the <strong>perfect companion</strong> for your journey:
        </Text>
      </VStack>

      <Container maxW="1400px" px={{ base: 2, md: 6 }}>
        <Box
          position="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Navigation Buttons */}
          <HStack
            justify="space-between"
            position="absolute"
            top="50%"
            w="calc(100% + 60px)"
            left="-30px"
            transform="translateY(-50%)"
            zIndex={10}
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
              boxShadow="2xl"
              _hover={{
                bg: "#22c55e",
                color: "white",
                transform: "scale(1.15) translateX(-5px)",
                boxShadow: "2xl",
              }}
              size="lg"
              transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              isDisabled={isTransitioning}
              pointerEvents="auto"
              w="50px"
              h="50px"
            >
              <Icon as={FiArrowLeft} boxSize={5} />
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
              boxShadow="2xl"
              _hover={{
                bg: "#22c55e",
                color: "white",
                transform: "scale(1.15) translateX(5px)",
                boxShadow: "2xl",
              }}
              size="lg"
              transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              isDisabled={isTransitioning}
              pointerEvents="auto"
              w="50px"
              h="50px"
            >
              <Icon as={FiArrowRight} boxSize={5} />
            </Button>
          </HStack>

          {/* Slider Content */}
          <Box overflow="hidden" borderRadius="3xl" ref={sliderRef}>
            <Flex
              transition={isTransitioning && !prefersReducedMotion ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none"}
              transform={`translateX(-${currentSlide * 100}%)`}
              gap={{ base: 4, md: 6 }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <Flex
                  key={slideIndex}
                  minW="100%"
                  gap={{ base: 4, md: 6 }}
                  px={{ base: 2, md: 3 }}
                >
                  {featuresData
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((feature, index) => (
                      <FeatureCard
                        key={index}
                        {...feature}
                        onReadMore={handleReadMore}
                        index={index}
                      />
                    ))}
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
          <HStack justify="center" mt={10} spacing={3}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Box
                key={index}
                position="relative"
                cursor="pointer"
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
              >
                <Box
                  w={currentSlide === index ? "40px" : "10px"}
                  h="10px"
                  borderRadius="full"
                  bg={currentSlide === index ? "#f97316" : borderColor}
                  transition="all 0.3s ease"
                  _hover={{ bg: "#f97316", opacity: 0.8 }}
                />
                {currentSlide === index && (
                  <Box
                    position="absolute"
                    top="-2px"
                    left="-2px"
                    right="-2px"
                    bottom="-2px"
                    borderRadius="full"
                    border="2px solid"
                    borderColor="#f97316"
                    animation={prefersReducedMotion ? "none" : `${glowPulse} 2s infinite`}
                  />
                )}
              </Box>
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