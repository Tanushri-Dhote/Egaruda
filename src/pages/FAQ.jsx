import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Link,
  SimpleGrid,
  Container,
  Divider,
  Button,
  Tag,
  TagLabel,
  ScaleFade,
  SlideFade,
  Fade,
  Collapse,
} from "@chakra-ui/react";
import {
  FaQuestionCircle,
  FaSearch,
  FaShieldAlt,
  FaLock,
  FaUser,
  FaComments,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaExclamationTriangle,
  FaMobile,
  FaDownload,
  FaHeadset,
  FaArrowRight,
  FaRegClock,
  FaCheckCircle,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
  
  const bgColor = useColorModeValue("#fff5f7", "#1a1a1a");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("pink.500", "pink.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const highlightBg = useColorModeValue("pink.50", "gray.700");
  const subtleBg = useColorModeValue("gray.50", "gray.700");

  const faqCategories = [
    {
      category: "General",
      icon: FaHeart,
      color: "pink.400",
      gradient: "linear(to-r, pink.400, pink.500)",
      questions: [
        { q: "What is Delbaram?", a: "Delbaram is an online chatting platform where users can connect, chat in real time, and build meaningful conversations in a safe environment." },
        { q: "Is Delbaram free to use?", a: "Yes, Delbaram is free to use. Some premium features may be added in the future." },
      ],
    },
    {
      category: "Account & Login",
      icon: FaUser,
      color: "green.400",
      gradient: "linear(to-r, green.400, teal.500)",
      questions: [
        { q: "How do I create an account?", a: "Download the Delbaram app, sign up using your phone number or email, verify your account, and start chatting." },
        { q: "I forgot my password. What should I do?", a: "Use the \"Forgot Password\" option on the login screen and follow the steps to reset it." },
        { q: "Can I change my profile details?", a: "Yes, you can update your profile information anytime from Profile Settings." },
        { q: "How do I delete my account?", a: "You can request account deletion from the app settings or contact support." },
      ],
    },
    {
      category: "Chat & Messaging",
      icon: FaComments,
      color: "purple.400",
      gradient: "linear(to-r, purple.400, pink.500)",
      questions: [
        { q: "Are my chats private?", a: "Yes. Your chats are private and protected. Delbaram respects your privacy." },
        { q: "Why are my messages not sending?", a: "Please check your internet connection and ensure you are using the latest version of the app." },
        { q: "Can I block or report someone?", a: "Yes. You can block or report a user directly from the chat screen." },
      ],
    },
    {
      category: "Safety & Privacy",
      icon: FaShieldAlt,
      color: "blue.400",
      gradient: "linear(to-r, blue.400, cyan.500)",
      questions: [
        { q: "How does Delbaram keep users safe?", a: "We use moderation tools, reporting systems, and privacy controls to ensure a safe community." },
        { q: "What should I do if someone misbehaves?", a: "Block and report the user immediately. Our team reviews all reports seriously." },
      ],
    },
    {
      category: "Technical Issues",
      icon: FaMobile,
      color: "orange.400",
      gradient: "linear(to-r, orange.400, yellow.500)",
      questions: [
        { 
          q: "App not working / crashing?", 
          a: "If the app is not opening or crashing, restart your device, update the app, clear cache (Android), or reinstall the app." 
        },
      ],
    },
  ];

  // Flatten all FAQs for search
  const allFAQs = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.category, categoryColor: cat.color }))
  );

  const filteredFAQs = allFAQs.filter(
    faq =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search with animation
  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
    } else {
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero Section with Animation - FAQ in one line */}
      <Box
        bg={useColorModeValue("pink.500", "pink.600")}
        color="white"
        py={{ base: 16, md: 20 }}
        px={6}
        position="relative"
        overflow="hidden"
        sx={{
          animation: "gradientShift 10s ease infinite",
          "@keyframes gradientShift": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      >
        {/* Animated decorative elements */}
        <Box
          position="absolute"
          top="-50px"
          right="-50px"
          w="200px"
          h="200px"
          borderRadius="full"
          bg="whiteAlpha.200"
          zIndex={0}
          sx={{
            animation: "float 8s ease-in-out infinite",
            "@keyframes float": {
              "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
              "50%": { transform: "translate(-20px, 20px) rotate(5deg)" },
              "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
            },
          }}
        />
        <Box
          position="absolute"
          bottom="-30px"
          left="-30px"
          w="150px"
          h="150px"
          borderRadius="full"
          bg="whiteAlpha.100"
          zIndex={0}
          sx={{
            animation: "float 12s ease-in-out infinite reverse",
          }}
        />
        <Box
          position="absolute"
          top="30%"
          left="20%"
          w="80px"
          h="80px"
          borderRadius="full"
          bg="whiteAlpha.150"
          zIndex={0}
          sx={{
            animation: "pulse 4s ease-in-out infinite",
            "@keyframes pulse": {
              "0%": { transform: "scale(1)", opacity: 0.15 },
              "50%": { transform: "scale(1.2)", opacity: 0.25 },
              "100%": { transform: "scale(1)", opacity: 0.15 },
            },
          }}
        />

        <VStack spacing={5} maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <ScaleFade initialScale={0.9} in={true}>
            <Badge
              bg="whiteAlpha.300"
              color="white"
              fontSize={{ base: "sm", md: "md" }}
              px={4}
              py={2}
              borderRadius="full"
              mb={2}
              _hover={{ transform: "scale(1.05)", bg: "whiteAlpha.400" }}
              transition="all 0.3s"
            >
              <HStack spacing={2}>
                <Icon as={FaQuestionCircle} />
                <Text>Got Questions? We've Got Answers</Text>
              </HStack>
            </Badge>
          </ScaleFade>
          
          <SlideFade in={true} offsetY="20px">
            <Heading
              as="h1"
              fontSize={{ base: "32px", md: "42px", lg: "52px" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="1.2"
              whiteSpace="nowrap"
              display={{ base: "block", md: "block" }}
            >
              Frequently Asked Questions
            </Heading>
          </SlideFade>
          
          {/* <Fade in={true} delay={0.2}>
            <Text fontSize={{ base: "18px", md: "20px", lg: "22px" }} opacity={0.9} maxW="600px" lineHeight="1.6">
              Find answers to common questions about Delbaram and get the help you need
            </Text>
          </Fade> */}

          {/* Search Bar with Animation */}
          <InputGroup maxW="500px" mt={6} size="lg">
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="whiteAlpha.700" />
            </InputLeftElement>
            <Input
              placeholder="Search your question..."
              borderRadius="full"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "whiteAlpha.600" }}
              _focus={{ bg: "whiteAlpha.300", boxShadow: "0 0 0 3px whiteAlpha.400" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fontSize={{ base: "16px", md: "18px" }}
              transition="all 0.3s"
            />
          </InputGroup>

          {/* Popular Search Tags */}
          <Flex wrap="wrap" gap={2} justify="center" mt={4}>
            {["Account", "Password", "Chat", "Privacy", "Technical"].map((tag, idx) => (
              <ScaleFade key={idx} in={true} delay={0.1 * idx}>
                <Tag
                  size="md"
                  borderRadius="full"
                  variant="solid"
                  bg="whiteAlpha.200"
                  cursor="pointer"
                  _hover={{ bg: "whiteAlpha.300", transform: "scale(1.05)" }}
                  onClick={() => setSearchTerm(tag)}
                  transition="all 0.2s"
                  py={2}
                  px={4}
                >
                  <TagLabel fontSize={{ base: "13px", md: "14px" }}>{tag}</TagLabel>
                </Tag>
              </ScaleFade>
            ))}
          </Flex>
        </VStack>
      </Box>

      <Container maxW="1100px" py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
        {/* Category Pills with Animation */}
        <Flex wrap="wrap" gap={3} justify="center" mb={10}>
          {faqCategories.map((cat, idx) => (
            <ScaleFade key={idx} in={true} delay={0.1 * idx}>
              <Box
                px={4}
                py={2}
                bg={activeCategory === idx ? cat.color : cardBg}
                color={activeCategory === idx ? "white" : textColor}
                borderRadius="full"
                border="1px solid"
                borderColor={activeCategory === idx ? cat.color : borderColor}
                cursor="pointer"
                _hover={{
                  bg: cat.color,
                  color: "white",
                  transform: "scale(1.05) translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s"
                onClick={() => {
                  setActiveCategory(idx);
                  const element = document.getElementById(`category-${idx}`);
                  element?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <HStack spacing={2}>
                  <Icon as={cat.icon} boxSize={4} />
                  <Text fontSize={{ base: "13px", md: "14px" }} fontWeight="medium">
                    {cat.category}
                  </Text>
                </HStack>
              </Box>
            </ScaleFade>
          ))}
        </Flex>

        {/* Search Results or FAQ Categories */}
        <Collapse in={isSearching || !searchTerm} animateOpacity>
          {searchTerm ? (
            <Box mb={12}>
              <Heading 
                as="h2"
                fontSize={{ base: "28px", md: "32px" }}
                fontWeight="bold"
                mb={6} 
                color={headingColor}
                lineHeight="1.3"
              >
                Search Results ({filteredFAQs.length})
              </Heading>
              {filteredFAQs.length > 0 ? (
                <VStack spacing={4} align="stretch">
                  {filteredFAQs.map((faq, idx) => (
                    <ScaleFade key={idx} in={true} delay={0.1 * idx}>
                      <Box
                        bg={cardBg}
                        p={{ base: 5, md: 6 }}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor={borderColor}
                        _hover={{ 
                          borderColor: faq.categoryColor, 
                          transform: { md: "translateY(-4px)" },
                          boxShadow: "lg"
                        }}
                        transition="all 0.3s"
                        position="relative"
                        overflow="hidden"
                      >
                        <Box
                          position="absolute"
                          top={0}
                          left={0}
                          width="4px"
                          height="100%"
                          bg={faq.categoryColor}
                        />
                        <Badge mb={3} colorScheme="pink" fontSize="xs" px={2} py={1}>
                          {faq.category}
                        </Badge>
                        <Heading 
                          as="h3"
                          fontSize={{ base: "18px", md: "20px" }}
                          fontWeight="semibold"
                          mb={2}
                          color={headingColor}
                          lineHeight="1.4"
                        >
                          {faq.q}
                        </Heading>
                        <Text 
                          fontSize={{ base: "15px", md: "16px" }} 
                          color={textColor}
                          lineHeight="1.6"
                        >
                          {faq.a}
                        </Text>
                      </Box>
                    </ScaleFade>
                  ))}
                </VStack>
              ) : (
                <Box textAlign="center" py={10}>
                  <Icon as={FaQuestionCircle} boxSize={16} color={borderColor} mb={4} />
                  <Heading 
                    as="h3"
                    fontSize="22px"
                    fontWeight="semibold"
                    mb={2}
                    color={headingColor}
                  >
                    No questions found
                  </Heading>
                  <Text fontSize="16px" color={textColor} mb={4}>
                    We couldn't find any matches for "{searchTerm}"
                  </Text>
                  <Button
                    mt={4}
                    colorScheme="pink"
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    size="lg"
                    _hover={{ transform: "scale(1.05)" }}
                  >
                    Clear Search
                  </Button>
                </Box>
              )}
            </Box>
          ) : (
            /* FAQ Categories with Accordion */
            faqCategories.map((category, catIdx) => (
              <Box
                key={catIdx}
                id={`category-${catIdx}`}
                mb={10}
                scrollMarginTop="100px"
              >
                <HStack spacing={4} mb={6}>
                  <Flex
                    w={{ base: "50px", md: "60px" }}
                    h={{ base: "50px", md: "60px" }}
                    bg={category.color}
                    borderRadius="lg"
                    align="center"
                    justify="center"
                    boxShadow="md"
                    sx={{
                      animation: "rotateIn 0.5s ease-out",
                      "@keyframes rotateIn": {
                        "0%": { transform: "rotate(-180deg) scale(0)" },
                        "100%": { transform: "rotate(0) scale(1)" },
                      },
                    }}
                  >
                    <Icon as={category.icon} boxSize={{ base: 6, md: 7 }} color="white" />
                  </Flex>
                  <Box>
                    <Heading 
                      as="h2"
                      fontSize={{ base: "26px", md: "30px", lg: "34px" }}
                      fontWeight="bold"
                      color={headingColor}
                      lineHeight="1.2"
                      letterSpacing="tight"
                    >
                      {category.category}
                    </Heading>
                    <Text fontSize={{ base: "15px", md: "16px" }} color={textColor} mt={1}>
                      {category.questions.length} frequently asked questions
                    </Text>
                  </Box>
                </HStack>

                <Accordion 
                  allowToggle 
                  borderColor={borderColor}
                  onChange={(index) => setExpandedItems({ ...expandedItems, [catIdx]: index })}
                >
                  {category.questions.map((faq, qIdx) => (
                    <ScaleFade key={qIdx} in={true} delay={0.1 * qIdx}>
                      <AccordionItem
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="lg"
                        mb={3}
                        bg={cardBg}
                        _hover={{ borderColor: category.color }}
                        transition="all 0.3s"
                      >
                        <h3>
                          <AccordionButton
                            py={4}
                            px={5}
                            _expanded={{ 
                              bg: highlightBg, 
                              color: category.color,
                              borderTopRadius: "lg",
                            }}
                            _hover={{ bg: subtleBg }}
                          >
                            <Box flex="1" textAlign="left" fontWeight="medium">
                              <HStack spacing={3}>
                                <Icon 
                                  as={FaQuestionCircle} 
                                  boxSize={4} 
                                  color={category.color}
                                  sx={{
                                    animation: expandedItems[catIdx] === qIdx ? "spin 0.3s ease" : "none",
                                    "@keyframes spin": {
                                      "0%": { transform: "rotate(0deg)" },
                                      "100%": { transform: "rotate(360deg)" },
                                    },
                                  }}
                                />
                                <Text 
                                  fontSize={{ base: "16px", md: "17px" }}
                                  fontWeight="medium"
                                  color={headingColor}
                                >
                                  {faq.q}
                                </Text>
                              </HStack>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h3>
                        <AccordionPanel 
                          pb={4} 
                          px={5}
                          bg={subtleBg}
                          borderBottomRadius="lg"
                        >
                          <Text 
                            fontSize={{ base: "15px", md: "16px" }} 
                            color={textColor}
                            lineHeight="1.6"
                          >
                            {faq.a}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    </ScaleFade>
                  ))}
                </Accordion>
              </Box>
            ))
          )}
        </Collapse>

        {/* Technical Support Box with Animation */}
        <ScaleFade in={true} delay={0.4}>
          <Box
            bg={highlightBg}
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            mt={12}
            border="1px solid"
            borderColor={borderColor}
            position="relative"
            overflow="hidden"
            _hover={{ boxShadow: "xl" }}
            transition="all 0.3s"
          >
            <Box
              position="absolute"
              top={-10}
              right={-10}
              w="150px"
              h="150px"
              borderRadius="full"
              bg="orange.400"
              opacity={0.1}
              sx={{
                animation: "rotate 20s linear infinite",
                "@keyframes rotate": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />
            
            <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={6}>
              <HStack spacing={4} flex={1}>
                <Flex
                  w={{ base: "60px", md: "70px" }}
                  h={{ base: "60px", md: "70px" }}
                  bg="orange.100"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  sx={{
                    animation: "pulseIcon 2s ease-in-out infinite",
                    "@keyframes pulseIcon": {
                      "0%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.1)" },
                      "100%": { transform: "scale(1)" },
                    },
                  }}
                >
                  <Icon as={FaExclamationTriangle} boxSize={{ base: 7, md: 8 }} color="orange.500" />
                </Flex>
                <VStack align="flex-start" spacing={1}>
                  <Heading 
                    as="h3"
                    fontSize={{ base: "22px", md: "24px" }}
                    fontWeight="bold"
                    color={headingColor}
                  >
                    Technical Issues?
                  </Heading>
                  <Text 
                    fontSize={{ base: "15px", md: "16px" }}
                    color={textColor}
                    lineHeight="1.6"
                  >
                    If the app is not opening or crashing, restart your device, update the app, 
                    clear cache (Android), or reinstall the app.
                  </Text>
                </VStack>
              </HStack>
              <Button
                size={{ base: "md", md: "lg" }}
                bg="orange.500"
                color="white"
                _hover={{ bg: "orange.600", transform: { md: "scale(1.05)" } }}
                borderRadius="full"
                px={8}
                leftIcon={<FaHeadset />}
              >
                Get Help
              </Button>
            </Flex>
          </Box>
        </ScaleFade>

        {/* Support & Contact */}
        <Box mt={12}>
          <Divider mb={8} borderColor={borderColor} />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {[
              {
                icon: FaEnvelope,
                title: "Email Support",
                desc: "Get help via email",
                detail: "help@delbaram.com",
                action: "Send Email",
                color: "blue",
                link: "mailto:help@delbaram.com",
              },
              {
                icon: FaHeadset,
                title: "In-App Support",
                desc: "24/7 live assistance",
                detail: "Help & Support section",
                action: "Open App",
                color: "green",
              },
              {
                icon: FaDownload,
                title: "Download App",
                desc: "Get the latest version",
                detail: "Google Play Store",
                action: "Download Now",
                color: "purple",
                link: "https://play.google.com/store/apps/details?id=com.rssc.delbaram",
              },
            ].map((item, idx) => (
              <ScaleFade key={idx} in={true} delay={0.2 * idx}>
                <Box
                  bg={cardBg}
                  p={{ base: 6, md: 7 }}
                  borderRadius="xl"
                  textAlign="center"
                  border="1px solid"
                  borderColor={borderColor}
                  _hover={{ 
                    transform: { md: "translateY(-8px)" }, 
                    borderColor: accentColor,
                    boxShadow: "2xl",
                  }}
                  transition="all 0.4s"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    height="4px"
                    bg={`${item.color}.500`}
                  />
                  <Flex
                    w={{ base: "60px", md: "70px" }}
                    h={{ base: "60px", md: "70px" }}
                    bg={`${item.color}.100`}
                    borderRadius="full"
                    align="center"
                    justify="center"
                    mx="auto"
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
                    <Icon as={item.icon} boxSize={{ base: 7, md: 8 }} color={`${item.color}.500`} />
                  </Flex>
                  <Heading 
                    as="h3"
                    fontSize={{ base: "20px", md: "22px" }}
                    fontWeight="semibold"
                    mb={2}
                    color={headingColor}
                  >
                    {item.title}
                  </Heading>
                  <Text 
                    fontSize={{ base: "14px", md: "15px" }} 
                    color={textColor} 
                    mb={3}
                    lineHeight="1.5"
                  >
                    {item.desc}
                  </Text>
                  <Text 
                    fontSize={{ base: "15px", md: "16px" }} 
                    fontWeight="medium" 
                    color={accentColor} 
                    mb={4}
                  >
                    {item.detail}
                  </Text>
                  {item.link ? (
                    <Link
                      href={item.link}
                      isExternal={item.link.startsWith("http")}
                      color={accentColor}
                      fontWeight="medium"
                      _hover={{ textDecoration: "underline", gap: 2 }}
                    >
                      <HStack spacing={1} justify="center">
                        <Text>{item.action}</Text>
                        <Icon as={FaArrowRight} boxSize={3} />
                      </HStack>
                    </Link>
                  ) : (
                    <Text color={accentColor} fontWeight="medium">
                      <HStack spacing={1} justify="center">
                        <Text>{item.action}</Text>
                        <Icon as={FaArrowRight} boxSize={3} />
                      </HStack>
                    </Text>
                  )}
                </Box>
              </ScaleFade>
            ))}
          </SimpleGrid>
        </Box>

        {/* Still have questions? - Enhanced */}
        <ScaleFade in={true} delay={0.6}>
          <Box
            mt={12}
            p={{ base: 8, md: 10 }}
            bg={accentColor}
            color="white"
            borderRadius="2xl"
            textAlign="center"
            position="relative"
            overflow="hidden"
            boxShadow="2xl"
          >
            <Box
              position="absolute"
              top={-20}
              right={-20}
              w="200px"
              h="200px"
              borderRadius="full"
              bg="whiteAlpha.200"
              sx={{
                animation: "rotateSlow 30s linear infinite",
                "@keyframes rotateSlow": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />
            <Box
              position="absolute"
              bottom={-20}
              left={-20}
              w="150px"
              h="150px"
              borderRadius="full"
              bg="whiteAlpha.150"
              sx={{
                animation: "rotateSlow 25s linear infinite reverse",
              }}
            />

            <VStack spacing={5} position="relative" zIndex={1}>
              <Icon 
                as={FaQuestionCircle} 
                boxSize={{ base: 12, md: 14 }}
                sx={{
                  animation: "bounce 2s ease-in-out infinite",
                  "@keyframes bounce": {
                    "0%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                    "100%": { transform: "translateY(0px)" },
                  },
                }}
              />
              
              <Heading 
                as="h2"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Still have questions?
              </Heading>
              
              <Text 
                fontSize={{ base: "16px", md: "18px" }}
                opacity={0.9}
                maxW="600px"
                mx="auto"
                lineHeight="1.6"
              >
                Can't find the answer you're looking for? Our support team is here to help you 24/7.
              </Text>
              
              <HStack spacing={4} justify="center" mt={4}>
                <Button
                  as={RouterLink}
                  to="/help"
                  size={{ base: "md", md: "lg" }}
                  bg="white"
                  color={accentColor}
                  _hover={{ 
                    transform: { md: "scale(1.05) translateY(-2px)" },
                    boxShadow: "xl",
                  }}
                  borderRadius="full"
                  px={{ base: 6, md: 8 }}
                  leftIcon={<FaEnvelope />}
                  fontSize={{ base: "16px", md: "17px" }}
                  fontWeight="bold"
                  transition="all 0.3s"
                >
                  Contact Support
                </Button>
                <Button
                  size={{ base: "md", md: "lg" }}
                  variant="outline"
                  borderColor="white"
                  color="white"
                  _hover={{ 
                    bg: "whiteAlpha.200",
                    transform: { md: "scale(1.05)" },
                  }}
                  borderRadius="full"
                  px={{ base: 6, md: 8 }}
                  leftIcon={<FaHeadset />}
                  fontSize={{ base: "16px", md: "17px" }}
                >
                  Live Chat
                </Button>
              </HStack>

              <Text fontSize={{ base: "14px", md: "15px" }} opacity={0.8} mt={4}>
                Average response time: <strong>&lt; 2 hours</strong>
              </Text>
            </VStack>
          </Box>
        </ScaleFade>

        {/* Footer Note */}
        <Text 
          fontSize={{ base: "14px", md: "15px" }} 
          color={textColor} 
          textAlign="center" 
          mt={8} 
          opacity={0.7}
        >
          Thank you for choosing Delbaram. We're here to help!
        </Text>
      </Container>
    </Box>
  );
};

export default FAQ;