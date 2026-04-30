import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactBanner = () => {
  return (
    <Box position="relative" height={{ base: "auto", md: "520px" }} overflow="hidden">
      
      {/* Single Background Image with Low Opacity */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/images/product-image-8.jpeg')"   // ← Replace with your single image
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        opacity={0.65}          // Less opacity as requested
        zIndex={1}
      />

      {/* Dark Overlay for better readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.65)"
        zIndex={2}
      />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={3}
        direction="column"
        align="center"
        justify="center"
        height="100%"
        textAlign="center"
        px={{ base: 6, md: 12 }}
        py={{ base: 16, md: 20 }}
        color="white"
      >
        <VStack spacing={6} maxW="780px">
          <Heading
            fontSize={{ base: "32px", sm: "38px", md: "46px" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Have Questions? Let's Charge Up<br />
            the Conversation!
          </Heading>

          <Text 
            fontSize={{ base: "16px", md: "18px" }}
            maxW="560px"
            opacity={0.95}
            lineHeight="1.6"
          >
            Experience the power of innovation with RMNA Electric Scooters — 
            eco-friendly, stylish, and built for a smarter, greener future.
          </Text>

          <Text 
            fontSize="19px" 
            fontWeight="semibold" 
            color="#ffdd57"
            mt={2}
          >
            Call: <span style={{ color: "#ffffff", fontWeight: "bold" }}>+91 96956 00185</span> | WhatsApp: <span style={{ color: "#ffffff", fontWeight: "bold" }}>+91 91259 48111</span>
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ContactBanner;