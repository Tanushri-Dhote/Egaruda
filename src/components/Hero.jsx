import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";

const Hero = () => {
  // Add color mode values for better contrast
  const headingColor = useColorModeValue("brand.500", "pink.300");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box id="home" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1100px"
        mx="auto"
        gap={{ base: 6, md: 8 }}
      >
        {/* LEFT CONTENT */}
        <VStack
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          spacing={4}
          flex={1}
        >
          <Heading
            as="h1"
            fontSize={{ base: "36px", md: "48px" }}
            fontWeight="bold"
            color={headingColor}
            lineHeight="1.2"
            letterSpacing="-0.02em"
             whiteSpace={{ base: "normal", md: "nowrap" }}
          >
            Find Your Perfect Match 💖
          </Heading>

          <Text 
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="1.6"
            color={textColor}
            maxW="400px"
            fontWeight="normal"
          >
            Connect, chat, and meet amazing people around you. Join thousands of happy users who found their perfect match.
          </Text>

          <HStack spacing={4} mt={2}>
            {/* Android Button */}
            <Button
              as="a"
              href="https://play.google.com/store/apps/details?id=com.rssc.delbaram"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              leftIcon={<Icon as={FaGooglePlay} boxSize={5} />}
              colorScheme="pink"
              fontSize="16px"
              fontWeight="600"
              px={6}
              py={6}
            >
              Android
            </Button>

            {/* iOS Button */}
            <Button
              as="a"
              href="https://apps.apple.com" // replace with your actual App Store link
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              leftIcon={<Icon as={FaApple} boxSize={5} />}
              variant="outline"
              borderColor="pink.400"
              color="pink.500"
              fontSize="16px"
              fontWeight="600"
              px={6}
              py={6}
              _hover={{ bg: "pink.50" }}
            >
              iOS
            </Button>
          </HStack>

          {/* Optional: Add a small trust indicator */}
          <Text 
            fontSize="14px" 
            color={textColor} 
            opacity={0.7}
            mt={2}
          >
            ⭐ 4.8 ★ | 10K+ downloads
          </Text>
        </VStack>

        {/* RIGHT IMAGE */}
        <Box flex={1} display="flex" justifyContent="center">
          <Image
            src="/images/sticker.png"
            alt="Delbaram App Sticker"
            maxW={{ base: "250px", md: "350px" }}
            w="100%"
            objectFit="contain"
            sx={{
              filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.15))",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;