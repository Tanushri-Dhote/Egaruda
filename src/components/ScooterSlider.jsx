import React from "react";
import {
    Box,
    Text,
    Button,
    Flex,
    Image,
    HStack,
    Icon,
    Badge,
    Heading,
} from "@chakra-ui/react";
import {
    FaBatteryFull,
    FaTachometerAlt,
    FaPlug,
    FaWeightHanging,
    FaStar,
    FaChevronLeft,
    FaChevronRight,
    FaWhatsapp,
    FaPhoneAlt,
    FaBolt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Different descriptions for each slide
const descriptions = [
    "We are redefining the future of urban commuting with our eco-friendly, high-performance, and stylish electric scooters. Our innovative technology ensures zero emissions while delivering powerful performance for your daily commute.",
    "Experience the perfect blend of sustainability and style. We offer Reliable, Eco-Friendly, and Cost-Effective Solutions to make every ride smooth, efficient, and environment-friendly for a greener tomorrow.",
    "Join the electric revolution with our cutting-edge scooters designed for modern urban living. We combine innovation, performance & sustainability to deliver the best riding experience for our customers.",
    "Power your daily commute with confidence. Our high-performance electric scooters are built for durability and safety, offering low maintenance costs and exceptional battery life for uninterrupted journeys.",
    "Make the smart choice for your mobility needs. With our eco-friendly solutions, you can save more with low running costs while contributing to a cleaner, healthier planet for future generations."
];

const scooters = [
    {
        id: 1,
        modelName: "Thunderbolt",
        tagline: "Unleash the Storm",
        description: descriptions[0],
        range: "120 km/charge",
        topSpeed: "75 km/h",
        charging: "3 hours",
        weight: "78 kg",
        color: "#FF6B35",
        image: "./images/Adheera-2.webp",
        features: ["Dual Disc Brakes", "LED Headlamp", "Digital Console"],
        rating: 4.9,
    },
    {
        id: 2,
        modelName: "EcoRide",
        tagline: "Green Speed",
        description: descriptions[1],
        range: "150 km/charge",
        topSpeed: "65 km/h",
        charging: "4 hours",
        weight: "72 kg",
        color: "#22C55E",
        image: "./images/product-image-1.jpg",
        features: ["Regenerative Braking", "Eco Mode", "USB Charging"],
        rating: 4.8,
    },
    {
        id: 3,
        modelName: "CityMax",
        tagline: "Urban Commuter's Choice",
        description: descriptions[2],
        range: "100 km/charge",
        topSpeed: "70 km/h",
        charging: "3.5 hours",
        weight: "75 kg",
        color: "#3B82F6",
        image: "./images/product-image-2.jpg",
        features: ["Anti-Theft Alarm", "Remote Lock", "Side Stand Sensor"],
        rating: 4.7,
    },
    {
        id: 4,
        modelName: "SportX",
        tagline: "Race Ready",
        description: descriptions[3],
        range: "110 km/charge",
        topSpeed: "95 km/h",
        charging: "2.5 hours",
        weight: "85 kg",
        color: "#EF4444",
        image: "./images/Luxury- CS2.jpeg",
        features: ["Sport Mode", "Alloy Wheels", "Tubeless Tyres"],
        rating: 4.9,
    },
    {
        id: 5,
        modelName: "Voyager",
        tagline: "Long Distance Champion",
        description: descriptions[4],
        range: "180 km/charge",
        topSpeed: "72 km/h",
        charging: "4.5 hours",
        weight: "80 kg",
        color: "#8B5CF6",
        image: "./images/product-image-3.jpg",
        features: ["Extended Seat", "Large Boot Space", "Cruise Control"],
        rating: 4.8,
    },
];

const ScooterSlider = () => {
    const phoneNumber = "+919695600185";
    const whatsappNumber = "919695600185";

    return (
        <Box
            position="relative"
            w="100%"
            h="80vh"
            overflow="hidden"
            bg="gray.50"
            _dark={{ bg: "gray.900" }}
        >
            {/* Background decorative elements */}
            <Box
                position="absolute"
                top="2%"
                right="-5%"
                w="300px"
                h="300px"
                borderRadius="full"
                bg="green.100"
                opacity={0.3}
                zIndex={0}
            />
            <Box
                position="absolute"
                bottom="10%"
                left="-5%"
                w="250px"
                h="250px"
                borderRadius="full"
                bg="orange.100"
                opacity={0.2}
                zIndex={0}
            />

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={{
                    prevEl: ".scooter-prev",
                    nextEl: ".scooter-next",
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={800}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "0",
                    overflow: "hidden",
                }}
            >
                {scooters.map((scooter, index) => (
                    <SwiperSlide key={scooter.id}>
                        <Box
                            w="100%"
                            h="100%"
                            bgGradient="linear(135deg, #dcfce7 0%, #ffffff 50%, #bbf7d0 100%)"
                            _dark={{ bgGradient: `linear(135deg, ${scooter.color}10, gray.800 50%, ${scooter.color}10)` }}
                        >
                            <Flex
                                direction={{ base: "column", lg: "row" }}
                                align="center"
                                justify="center"
                                w="100%"
                                h="100%"
                                maxW="1400px"
                                mx="auto"
                                px={{ base: 6, md: 10, lg: 16 }}
                                gap={{ base: 6, lg: 12 }}
                            >
                                {/* Image Section - Left side on desktop */}
                                <Box
                                    flex={1}
                                    position="relative"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box
                                        position="relative"
                                        style={{ animation: "floatScooter 5s ease-in-out infinite" }}
                                    >
                                        <Image
                                            src={scooter.image}
                                            alt={`RMNA ${scooter.modelName}`}
                                            p={6}
                                            borderRadius="30px"
                                            boxShadow="0 25px 60px rgba(0,0,0,0.12)"
                                            w={{ base: "260px", sm: "320px", md: "300px", lg: "350px" }}
                                            h="auto"
                                            objectFit="contain"
                                            filter="drop-shadow(0 30px 40px rgba(0,0,0,0.25))"
                                            style={{ animation: "gentleRotate 10s ease-in-out infinite" }}
                                        />

                                        {/* Glow Effect */}
                                        <Box
                                            position="absolute"
                                            top="50%"
                                            left="50%"
                                            transform="translate(-50%, -50%)"
                                            w="120%"
                                            h="120%"
                                            bg={`radial-gradient(circle, ${scooter.color}30 0%, transparent 70%)`}
                                            zIndex={-1}
                                            borderRadius="full"
                                            style={{ animation: "pulseGlow 4s ease-in-out infinite" }}
                                        />
                                    </Box>

                                    {/* Rating Badge - Floating */}
                                    <Badge
                                        position="absolute"
                                        top={{ base: "10%", lg: "15%" }}
                                        right={{ base: "5%", lg: "10%" }}
                                        bg="white"
                                        color="gray.800"
                                        px={4}
                                        py={2.5}
                                        borderRadius="full"
                                        fontSize="sm"
                                        fontWeight="bold"
                                        boxShadow="xl"
                                        _dark={{ bg: "gray.700", color: "white" }}
                                        style={{ animation: "floatSmall 4s ease-in-out infinite" }}
                                    >
                                        <HStack spacing={2}>
                                            <Icon as={FaStar} color="#FFD700" boxSize={4} />
                                            <Text>{scooter.rating} ★ Rating</Text>
                                        </HStack>
                                    </Badge>

                                    {/* Battery Badge */}
                                    <Box
                                        position="absolute"
                                        bottom={{ base: "10%", lg: "15%" }}
                                        left={{ base: "0%", lg: "5%" }}
                                        bg="white"
                                        borderRadius="full"
                                        px={4}
                                        py={2.5}
                                        boxShadow="xl"
                                        _dark={{ bg: "gray.700" }}
                                        style={{ animation: "floatSmall 4.5s ease-in-out infinite 0.5s" }}
                                        display="flex"
                                        alignItems="center"
                                        gap="10px"
                                    >
                                        <Icon as={FaBatteryFull} color={scooter.color} boxSize={5} />
                                        <Text fontSize="sm" fontWeight="bold">{scooter.range}</Text>
                                    </Box>
                                </Box>

                                {/* Info Section - Right side on desktop */}
                                <Box flex={1} maxW={{ base: "100%", lg: "550px" }} textAlign={{ base: "center", lg: "left" }}>
                                    {/* Color Accent Line */}
                                    <Box
                                        w={{ base: "60px", lg: "80px" }}
                                        h="5px"
                                        bg={scooter.color}
                                        mb={4}
                                        mx={{ base: "auto", lg: "0" }}
                                        borderRadius="full"
                                    />

                                    {/* Company Name */}


                                    <Text
                                        fontSize="sm"
                                        color="green.500"
                                        fontWeight="700"
                                        letterSpacing="3px"
                                        mb={2}
                                    >
                                        ELECTRIC FUTURE
                                    </Text>

                                    <Heading
                                        fontSize={{ base: "3xl", md: "5xl" }}
                                        fontWeight="900"
                                        lineHeight="1.1"
                                    >
                                        RMNA <br />
                                        <Text as="span" color="green.500">
                                            E-Mobility Services
                                        </Text>
                                    </Heading>
                                    <Text
                                        fontSize={{ base: "md", lg: "lg" }}
                                        color={scooter.color}
                                        fontWeight="semibold"
                                        mb={4}
                                    >
                                        {scooter.tagline}
                                    </Text>

                                    <Text fontSize={{ base: "sm", lg: "md" }} color="gray.600" mb={6} _dark={{ color: "gray.400" }} lineHeight="1.6">
                                        {scooter.description}
                                    </Text>

                                    {/* Call Buttons - Replacing Price & Test Ride */}
                                    <Flex
                                        align="center"
                                        justify={{ base: "center", lg: "flex-start" }}
                                        gap={4}
                                        flexWrap="wrap"
                                    >

                                        <Button
                                            size="lg"
                                            variant="outline"
                                            borderColor={scooter.color}
                                            color={scooter.color}
                                            px={8}
                                            leftIcon={<FaPhoneAlt />}
                                            _hover={{ bg: scooter.color, color: "white", transform: "translateY(-3px)" }}
                                            transition="all 0.3s ease"
                                            borderRadius="full"
                                            onClick={() => window.location.href = `tel:${phoneNumber}`}
                                        >
                                            Call Now
                                        </Button>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <Box
                className="scooter-prev"
                position="absolute"
                left={{ base: "10px", md: "30px" }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={20}
                cursor="pointer"
                bg="white"
                borderRadius="full"
                p={3}
                boxShadow="xl"
                _hover={{ bg: "gray.100", transform: "translateY(-50%) scale(1.1)" }}
                transition="all 0.2s"
            >
                <Icon as={FaChevronLeft} boxSize={6} color="gray.700" />
            </Box>
            <Box
                className="scooter-next"
                position="absolute"
                right={{ base: "10px", md: "30px" }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={20}
                cursor="pointer"
                bg="white"
                borderRadius="full"
                p={3}
                boxShadow="xl"
                _hover={{ bg: "gray.100", transform: "translateY(-50%) scale(1.1)" }}
                transition="all 0.2s"
            >
                <Icon as={FaChevronRight} boxSize={6} color="gray.700" />
            </Box>


            {/* Animation Styles */}
            <style jsx global>{`
        @keyframes floatScooter {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes gentleRotate {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes floatSmall {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .swiper-pagination-bullet-active {
          background: #22c55e !important;
        }
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination {
          bottom: 70px !important;
        }
      `}</style>
        </Box>
    );
};

export default ScooterSlider;