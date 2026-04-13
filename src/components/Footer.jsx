import {
  Box,
  Text,
  Flex,
  Grid,
  Link,
  Image,
  useColorModeValue,
  Icon,
  HStack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  ScaleFade,
  SlideFade,
} from "@chakra-ui/react";

import {
  FaHeart,
  FaFileAlt,
  FaShieldAlt,
  FaInfoCircle,
  FaQuestionCircle,
  FaEnvelope,
  FaUsers,
  FaLock,
  FaCheckCircle,
  FaCode,
  FaExternalLinkAlt,
  FaRegSmile,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const linkHoverColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const inputBg = useColorModeValue("gray.50", "gray.700");

  const quickLinks = [
    { name: "Terms & Conditions", icon: FaFileAlt, path: "/terms", tabIndex: 0 },
    { name: "Privacy Policy", icon: FaShieldAlt, path: "/privacy", tabIndex: 1 },
    { name: "About Us", icon: FaInfoCircle, path: "/about" },
    { name: "Help", icon: FaQuestionCircle, path: "/help" },
    { name: "FAQ's", icon: FaUsers, path: "/faq" },
    { name: "Contact Us", icon: FaEnvelope, path: "/contact" },
  ];

  const handleLinkClick = (item) => {
    if (item.path) {
      if (item.path === "/terms" || item.path === "/privacy") {
        navigate(item.path, { 
          state: { defaultTab: item.tabIndex, scrollToTop: true } 
        });
      } else {
        navigate(item.path, { 
          state: { scrollToTop: true } 
        });
      }
    } else if (item.section) {
      navigate("/", { state: { scrollTo: item.section } });
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      bg={bg}
      color={textColor}
      py={{ base: 8, md: 10 }}
      px={5}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Flex
        maxW="1100px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        gap={{ base: 8, md: 10 }}
      >
        {/* LEFT with Animation */}
        <ScaleFade in={true} initialScale={0.9} delay={0.1}>
          <Box flex={1}>
            <HStack
              spacing={4}
              mb={3}
              cursor="pointer"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              _hover={{
                transform: "scale(1.02)",
              }}
              transition="all 0.3s ease"
            >
              <Image
                src="/images/logo.jpeg"
                boxSize={{ base: "70px", md: "80px" }}
                borderRadius="full"
                border="2px solid"
                borderColor="pink.300"
                // sx={{
                //   animation: "float 3s ease-in-out infinite",
                //   "@keyframes float": {
                //     "0%": { transform: "translateY(0px)" },
                //     "50%": { transform: "translateY(-5px)" },
                //     "100%": { transform: "translateY(0px)" },
                //   },
                // }}
              />
              <Box>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  bgGradient="linear(to-r, green.400, purple.500)"
                  bgClip="text"
                  lineHeight="1.2"
                >
                  DELBARAM
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} opacity={0.8}>
                  Find your perfect match
                </Text>
              </Box>
            </HStack>

            <Text fontSize="sm" lineHeight="1.6" maxW="280px" mt={2}>
              Connecting hearts and helping you find your perfect match in a safe and welcoming environment.
            </Text>

            {/* Social Icons - Optional */}
            <HStack spacing={2} mt={3}>
              <Box
                w="32px"
                h="32px"
                borderRadius="full"
                bg={useColorModeValue("gray.100", "gray.700")}
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                _hover={{ bg: "pink.500", color: "white", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                <Icon as={FaRegSmile} boxSize={4} />
              </Box>
            </HStack>
          </Box>
        </ScaleFade>

        {/* QUICK LINKS with Animation */}
        <SlideFade in={true} offsetY="20px" delay={0.2}>
          <Box flex={1}>
            <Text fontSize="lg" fontWeight="bold" color={headingColor} mb={3}>
              Quick Links
            </Text>

            <Grid templateColumns="repeat(2, 1fr)" gap={2}>
              {quickLinks.map((item, i) => (
                <Link
                  key={i}
                  fontSize="sm"
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                  _hover={{
                    color: linkHoverColor,
                    transform: "translateX(4px)",
                  }}
                  onClick={() => handleLinkClick(item)}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  <Icon as={item.icon} boxSize={3} color={linkHoverColor} />
                  {item.name}
                </Link>
              ))}
            </Grid>
          </Box>
        </SlideFade>

        {/* NEWSLETTER with Animation */}
        <SlideFade in={true} offsetY="20px" delay={0.3}>
          <Box flex={1}>
            <Text fontSize="lg" fontWeight="bold" color={headingColor} mb={3}>
              Stay Updated
            </Text>

            <InputGroup size="md" mb={2}>
              <Input
                placeholder="Email"
                borderRadius="full"
                bg={inputBg}
                borderColor={borderColor}
                _focus={{ borderColor: "pink.500", boxShadow: "0 0 0 1px pink.500" }}
                _hover={{ borderColor: "pink.300" }}
                transition="all 0.2s"
              />
              <InputRightElement width="3rem">
                <Button
                  size="sm"
                  borderRadius="full"
                  bg="pink.400"
                  color="white"
                  p={0}
                  minW="auto"
                  h="1.8rem"
                  w="1.8rem"
                  _hover={{ 
                    bg: "pink.500", 
                    transform: "scale(1.1)",
                    boxShadow: "md",
                  }}
                  transition="all 0.2s"
                >
                  <Icon as={FaHeart} boxSize={3.5} />
                </Button>
              </InputRightElement>
            </InputGroup>

            <Text fontSize="xs" opacity={0.7}>
              Subscribe for updates and exclusive offers
            </Text>

            {/* Secure + Trusted */}
            <HStack spacing={2} mt={3}>
              <HStack spacing={1}>
                <Icon as={FaLock} boxSize={3} color="green.400" />
                <Text fontSize="xs">Secure</Text>
              </HStack>

              <Text fontSize="xs">•</Text>

              <HStack spacing={1}>
                <Icon as={FaCheckCircle} boxSize={3} color="green.400" />
                <Text fontSize="xs">Trusted</Text>
              </HStack>
            </HStack>
          </Box>
        </SlideFade>
      </Flex>

      {/* BOTTOM with Design Credit and Animation */}
      <ScaleFade in={true} delay={0.4}>
        <Box mt={8} pt={5} borderTop="1px solid" borderColor={borderColor}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={3}
          >
            <Text fontSize="xs" textAlign="center">
              © 2026{" "}
              <Text
                as="span"
                bgGradient="linear(to-r, green.400, purple.500)"
                bgClip="text"
                fontWeight="bold"
              >
                DELBARAM
              </Text>{" "}
              . All rights reserved.
            </Text>

            {/* Design Credit with Animation */}
            <HStack spacing={1.5}>
              <Icon 
                as={FaCode} 
                boxSize={3} 
                color={linkHoverColor}
                sx={{
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%": { opacity: 0.5, transform: "scale(1)" },
                    "50%": { opacity: 1, transform: "scale(1.1)" },
                    "100%": { opacity: 0.5, transform: "scale(1)" },
                  },
                }}
              />
              <Text fontSize="xs" color={textColor}>
                Designed and developed by{" "}
                <Link
                  href="https://rssctech.com/"
                  isExternal
                  color={linkHoverColor}
                  fontWeight="medium"
                  _hover={{
                    textDecoration: "underline",
                    transform: "translateY(-1px)",
                  }}
                  transition="all 0.2s"
                >
                  RSSC Technologies Private Limited
                  <Icon as={FaExternalLinkAlt} boxSize={2} ml={1} verticalAlign="middle" />
                </Link>
              </Text>
            </HStack>
          </Flex>

          {/* Trust Badge with Animation */}
          <Flex justify="center" mt={4}>
            <HStack spacing={2}>
              <Box
                w="8px"
                h="8px"
                borderRadius="full"
                bg="green.400"
                sx={{
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%": { opacity: 0.4, transform: "scale(0.8)" },
                    "50%": { opacity: 1, transform: "scale(1.2)" },
                    "100%": { opacity: 0.4, transform: "scale(0.8)" },
                  },
                }}
              />
              <Text fontSize="xs" opacity={0.7}>
                Trusted by 10,000+ users worldwide
              </Text>
            </HStack>
          </Flex>
        </Box>
      </ScaleFade>
    </Box>
  );
};

export default Footer;