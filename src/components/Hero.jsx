import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Image,
  HStack,
  Icon,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaWhatsapp, FaPhoneAlt, FaBolt, FaLeaf, FaShieldAlt, FaArrowDown } from "react-icons/fa";

const AdheeraHero = () => {
  const bgColor = useColorModeValue("#e8f5e9", "#1a1a1a");
  const textColor = useColorModeValue("#4a5568", "#a0aec0");
  const headingGradient = "linear(to-r, #f97316, #fb923c, #22c55e, #15803d)";
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box
      bg={bgColor}
      minH={{ base: "90vh", md: "100vh" }}
      position="relative"
      overflow="hidden"
      py={{ base: 12, md: 0 }}
    >
      {/* Background subtle gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-br, rgba(46,125,50,0.08), transparent)"
        zIndex={1}
      />

      {/* Decorative circles */}
      <Box
        position="absolute"
        top="10%"
        right="-5%"
        w={{ base: "200px", md: "300px" }}
        h={{ base: "200px", md: "300px" }}
        borderRadius="full"
        bg="green.100"
        opacity={0.3}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="10%"
        left="-5%"
        w={{ base: "150px", md: "250px" }}
        h={{ base: "150px", md: "250px" }}
        borderRadius="full"
        bg="orange.100"
        opacity={0.2}
        zIndex={0}
      />

      <Flex
        maxW="1200px"
        mx="auto"
        h="full"
        align="center"
        px={{ base: 4, sm: 6, md: 8, lg: 12 }}
        position="relative"
        zIndex={2}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 8, lg: 8 }}
      >
        {/* LEFT CONTENT */}
        <VStack
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          spacing={5}
          flex={1}
          maxW={{ lg: "560px" }}
        >
          <Box>
            <Badge
              bgGradient={headingGradient}
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              mb={4}
              display="inline-flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaBolt} />
              RMNA E-Mobility Services
            </Badge>
          </Box>

          <Text
            fontSize={{ base: "15px", md: "17px", lg: "18px" }}
            color={textColor}
            lineHeight="1.7"
            maxW="500px"
          >
            At <strong>RMNA E-Mobility Services</strong>, we are redefining the future of urban commuting with our <strong>eco-friendly, high-performance, and stylish electric scooters.</strong> We offer <strong>Reliable, Eco-Friendly, and Cost-Effective Solutions</strong> to make every ride smooth, efficient, and environment-friendly.
          </Text>

          {/* Key Features Badges */}
          <HStack
            spacing={3}
            wrap="wrap"
            justify={{ base: "center", lg: "flex-start" }}
          >
            <Badge colorScheme="green" variant="subtle" px={3} py={1.5} borderRadius="full">
              <HStack spacing={1}>
                <Icon as={FaLeaf} boxSize={3} />
                <Text fontSize="xs">Eco-Friendly</Text>
              </HStack>
            </Badge>
            <Badge colorScheme="orange" variant="subtle" px={3} py={1.5} borderRadius="full">
              <HStack spacing={1}>
                <Icon as={FaShieldAlt} boxSize={3} />
                <Text fontSize="xs">Reliable</Text>
              </HStack>
            </Badge>
            <Badge colorScheme="blue" variant="subtle" px={3} py={1.5} borderRadius="full">
              <HStack spacing={1}>
                <Icon as={FaBolt} boxSize={3} />
                <Text fontSize="xs">Cost-Effective</Text>
              </HStack>
            </Badge>
          </HStack>

          {/* CTA Buttons */}
          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={4}
            mt={4}
            w={{ base: "100%", sm: "auto" }}
            justify={{ base: "center", lg: "flex-start" }}
          >
            {/* <Button
              size="lg"
              bg="#25D366"
              color="white"
              px={8}
              py={{ base: 6, md: 7 }}
              fontSize={{ base: "15px", md: "16px" }}
              fontWeight="bold"
              borderRadius="full"
              _hover={{
                bg: "#1eb355",
                transform: "translateY(-3px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
              leftIcon={<FaWhatsapp />}
              onClick={() => window.open("https://wa.me/919695600185", "_blank")}
            >
              WhatsApp Inquiry
            </Button> */}

            <Button
              size="lg"
              variant="outline"
              borderColor="#2e7d32"
              color="#2e7d32"
              px={8}
              py={{ base: 6, md: 7 }}
              fontSize={{ base: "15px", md: "16px" }}
              fontWeight="semibold"
              borderRadius="full"
              _hover={{
                bg: "#2e7d32",
                color: "white",
                transform: "translateY(-3px)",
              }}
              transition="all 0.3s ease"
              leftIcon={<FaPhoneAlt />}
              onClick={() => window.location.href = "tel:+919695600185"}
            >
              Call Now
            </Button>
          </Flex>

          {/* Trust Bar */}
          <Flex
            align="center"
            gap={{ base: 4, sm: 6 }}
            mt={6}
            wrap="wrap"
            justify={{ base: "center", lg: "flex-start" }}
          >
            <HStack spacing={2}>
              <Text fontSize="sm" fontWeight="medium">⭐ 4.8</Text>
              <Text fontSize="sm" color={textColor}>• 500+ Happy Customers</Text>
            </HStack>
            <HStack spacing={2}>
              <Icon as={FaBolt} color="green.500" boxSize={3} />
              <Text fontSize="sm" fontWeight="medium">2-3 Years Battery Life</Text>
            </HStack>
          </Flex>
        </VStack>

        {/* RIGHT: SCOOTER IMAGE */}
        <Box
          flex={1}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ base: 8, lg: 0 }}
        >
          <Box
            position="relative"
            style={{
              animation: "floatScooter 6s ease-in-out infinite",
            }}
          >
            <Image
              src="/images/product-image-2.jpg"
              alt="RMNA Electric Scooty"
              w={{ base: "260px", sm: "320px", md: "380px", lg: "450px" }}
              h="auto"
              objectFit="contain"
              filter="drop-shadow(0 20px 40px rgba(0,0,0,0.25))"
              style={{
                animation: "gentleRotate 12s linear infinite",
              }}
              fallbackSrc="https://via.placeholder.com/450x400?text=RMNA+E-Scooty"
            />

            {/* Glow Effect */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="120%"
              h="120%"
              bg="radial-gradient(circle, rgba(46,125,50,0.2) 0%, transparent 70%)"
              zIndex={-1}
              borderRadius="full"
              style={{
                animation: "pulseGlow 4s ease-in-out infinite",
              }}
            />
          </Box>

          {/* Floating small front scooter */}
          <Box
            position="absolute"
            bottom={{ base: "-10px", lg: "30px" }}
            left={{ base: "5%", lg: "-30px" }}
            w={{ base: "90px", sm: "110px", lg: "130px" }}
            style={{
              animation: "floatSmall 5s ease-in-out infinite 1.5s",
            }}
          >
            <Image
              src="/images/product-image-5.jpg"
              alt="RMNA Front View"
              w="100%"
              filter="drop-shadow(0 10px 20px rgba(0,0,0,0.2))"
              fallbackSrc="https://via.placeholder.com/130x100?text=RMNA"
            />
          </Box>

          {/* Battery Badge */}
          <Box
            position="absolute"
            top={{ base: "10%", lg: "15%" }}
            right={{ base: "5%", lg: "10%" }}
            bg={cardBg}
            borderRadius="full"
            px={3}
            py={2}
            boxShadow="md"
            style={{
              animation: "floatSmall 4s ease-in-out infinite 0.5s",
            }}
            display="flex"
            alignItems="center"
            gap="8px"
          >
            <Icon as={FaBolt} color="orange.500" boxSize={4} />
            <Text fontSize="xs" fontWeight="bold">48V/60V/72V</Text>
          </Box>

          {/* Fast Charging Badge */}
          <Box
            position="absolute"
            bottom={{ base: "15%", lg: "20%" }}
            right={{ base: "0%", lg: "-5%" }}
            bg={cardBg}
            borderRadius="full"
            px={3}
            py={2}
            boxShadow="md"
            style={{
              animation: "floatSmall 4.5s ease-in-out infinite 1s",
            }}
            display="flex"
            alignItems="center"
            gap="8px"
          >
            <Icon as={FaBolt} color="green.500" boxSize={4} />
            <Text fontSize="xs" fontWeight="bold">Fast Charging</Text>
          </Box>
        </Box>
      </Flex>

      {/* Scroll Indicator */}
      <Box
        position="absolute"
        bottom={{ base: "15px", md: "30px" }}
        left="50%"
        transform="translateX(-50%)"
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        gap={2}
        zIndex={3}
      >
        <Text fontSize="10px" letterSpacing="2px" color={textColor} opacity={0.6}>
          SCROLL TO EXPLORE
        </Text>
        <Icon
          as={FaArrowDown}
          color={textColor}
          opacity={0.6}
          boxSize={4}
          style={{
            animation: "bounce 2s infinite",
          }}
        />
      </Box>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes floatScooter {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes floatSmall {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes gentleRotate {
          0% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </Box>
  );
};

export default AdheeraHero;