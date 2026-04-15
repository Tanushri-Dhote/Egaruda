import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";

const AdheeraScootySection = () => {
  // Colors from the image
  const bgColor = "#f5e8d3";        // Soft peach background
  const headingColor = "#e07a2f";   // Orange-brown
  const textColor = "#4a3728";      // Dark brown

  return (
    <Box
      bg={bgColor}
      py={{ base: 10, md: 16, lg: 20 }}
      px={{ base: 4, md: 8 }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 10, lg: 16 }}
      >
        {/* LEFT: Scooter Images */}
        <Flex
          direction="row"
          align="center"
          justify="center"
          gap={6}
          w={{ base: "100%", lg: "auto" }}
          position="relative"
          mb={{ base: 8, lg: 0 }}
        >
          {/* Front View Scooter (Smaller) */}
          <Box
            w={{ base: "140px", sm: "160px", md: "180px", lg: "200px" }}
            transform={{ base: "scale(0.95)", lg: "scale(1)" }}
          >
            <Image
              src="/images/Adheera-2.webp"
              alt="Adheera Electric Scooty Front"
              w="100%"
              h="auto"
              objectFit="contain"
              filter="drop-shadow(0 20px 30px rgba(0,0,0,0.15))"
            />
          </Box>

          {/* Side View Scooter (Larger) */}
          <Box
            w={{ base: "220px", sm: "260px", md: "300px", lg: "340px" }}
            mt={{ base: 8, lg: 12 }}
          >
            <Image
              src="/images/Adheera-3.webp"
              alt="Adheera Electric Scooty Side"
              w="100%"
              h="auto"
              objectFit="contain"
              filter="drop-shadow(0 25px 40px rgba(0,0,0,0.2))"
            />
          </Box>
        </Flex>

        {/* RIGHT: Content */}
        <VStack
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          spacing={6}
          maxW={{ base: "100%", lg: "520px" }}
          flex={1}
        >
          <Heading
            as="h2"
            fontSize={{ base: "38px", sm: "44px", md: "52px", lg: "58px" }}
            fontWeight="extrabold"
            lineHeight="1.05"
            color={headingColor}
            letterSpacing="-1.5px"
          >
            Adheera Electric Scooty
          </Heading>

          <Text
            fontSize={{ base: "22px", md: "26px" }}
            fontWeight="semibold"
            color={headingColor}
            mt={-1}
          >
            Zip. Zoom. Zero Emissions.
          </Text>

          <Text
            fontSize={{ base: "16px", md: "17px" }}
            color={textColor}
            lineHeight="1.7"
            maxW="460px"
          >
            Smart. Stylish. Sustainable. Adheera is your perfect everyday ride — 
            powerful performance, sleek design, and eco-friendly freedom.
          </Text>

          {/* CTA Button */}
          <Button
            as="a"
            href="#"
            size="lg"
            bg="#e07a2f"
            color="white"
            px={10}
            py={7}
            fontSize="17px"
            fontWeight="bold"
            borderRadius="md"
            mt={4}
            _hover={{
              bg: "#c86a28",
              transform: "translateY(-3px)",
              boxShadow: "lg",
            }}
            transition="all 0.3s ease"
            boxShadow="md"
          >
            More Info
          </Button>
        </VStack>
      </Flex> 
    </Box>
  );
};

export default AdheeraScootySection;