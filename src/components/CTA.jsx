import {
  Box,
  Heading,
  Button,
  VStack,
  Text,
  useColorModeValue,
  Avatar,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

const CTA = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, pink.400, pink.600)",
    "linear(to-r, gray.700, gray.900)"
  );

  const buttonBg = useColorModeValue("white", "gray.800");
  const buttonColor = useColorModeValue("pink.500", "pink.300");
  const textColor = useColorModeValue("white", "gray.200");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const statBg = useColorModeValue("whiteAlpha.200", "blackAlpha.300");

  return (
    <Box
      py={{ base: 8, md: 12, lg: 16 }}
      px={{ base: 4, sm: 6, md: 8 }}
      bgGradient={bgGradient}
      borderRadius={{ base: "xl", md: "2xl" }}
      mx={{ base: 3, sm: 4, md: 6, lg: 8 }}
      my={{ base: 8, md: 12 }}
      boxShadow="2xl"
      sx={{
        animation: "fadeInScale 0.8s ease-out",
        "@keyframes fadeInScale": {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        gap={{ base: 8, md: 10, lg: 16 }}
      >
        {/* LEFT: Avatar Cluster */}
        <Box
          position="relative"
          w={{ base: "260px", sm: "300px", md: "340px", lg: "380px" }}
          h={{ base: "260px", sm: "300px", md: "340px", lg: "380px" }}
          sx={{
            animation: "floatContainer 4s ease-in-out infinite",
            "@keyframes floatContainer": {
              "0%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-10px)" },
              "100%": { transform: "translateY(0px)" },
            },
          }}
        >
          {/* BIG CENTER AVATAR */}
          <Avatar
            src="/images/logo.jpeg"
            size={{ base: "xl", sm: "2xl", lg: "3xl" }}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            border="4px solid white"
            boxShadow="2xl"
            zIndex={2}
            sx={{
              animation: "pulseGlow 3s ease-in-out infinite",
              "@keyframes pulseGlow": {
                "0%": { boxShadow: "0 0 0 0 rgba(255,255,255,0.4)" },
                "50%": { boxShadow: "0 0 20px 10px rgba(255,255,255,0.6)" },
                "100%": { boxShadow: "0 0 0 0 rgba(255,255,255,0.4)" },
              },
            }}
          />

          {/* Top */}
          <Avatar
            src="/images/sticker4.png"
            position="absolute"
            boxSize={{ base: "50px", sm: "60px", md: "70px", lg: "80px" }}
            top={{ base: "-5px", sm: "0", md: "5px" }}
            left="50%"
            transform="translateX(-50%)"
            border="3px solid white"
            sx={{
              animation: "float1 5s ease-in-out infinite",
              "@keyframes float1": {
                "0%": { transform: "translateX(-50%) translateY(0px)" },
                "50%": { transform: "translateX(-50%) translateY(-12px)" },
                "100%": { transform: "translateX(-50%) translateY(0px)" },
              },
            }}
          />

          {/* Left Top */}
          <Avatar
            src="/images/sticker5.png"
            position="absolute"
            boxSize={{ base: "60px", sm: "75px", md: "90px", lg: "100px" }}
            top={{ base: "15%", sm: "18%", md: "20%" }}
            left={{ base: "-10px", sm: "-5px", md: "0" }}
            border="3px solid white"
            sx={{
              animation: "float2 4.5s ease-in-out infinite 0.3s",
              "@keyframes float2": {
                "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
                "33%": { transform: "translate(-5px, -8px) rotate(-3deg)" },
                "66%": { transform: "translate(5px, -4px) rotate(3deg)" },
                "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
              },
            }}
          />

          {/* Right Top */}
          <Avatar
            src="/images/sticker2.png"
            position="absolute"
            boxSize={{ base: "60px", sm: "75px", md: "90px", lg: "100px" }}
            top={{ base: "15%", sm: "18%", md: "20%" }}
            right={{ base: "-10px", sm: "-5px", md: "0" }}
            border="3px solid white"
            sx={{
              animation: "float3 5s ease-in-out infinite 0.5s",
              "@keyframes float3": {
                "0%": { transform: "translate(0px, 0px) rotate(0deg)" },
                "33%": { transform: "translate(5px, -10px) rotate(3deg)" },
                "66%": { transform: "translate(-5px, -3px) rotate(-3deg)" },
                "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
              },
            }}
          />

          {/* Bottom Left */}
          <Avatar
            src="/images/sticker3.png"
            position="absolute"
            boxSize={{ base: "60px", sm: "75px", md: "90px", lg: "100px" }}
            bottom={{ base: "5%", sm: "3%", md: "0" }}
            left={{ base: "5%", sm: "8%", md: "10%" }}
            border="3px solid white"
            sx={{
              animation: "float4 4.8s ease-in-out infinite 0.2s",
              "@keyframes float4": {
                "0%": { transform: "translate(0px, 0px) scale(1)" },
                "50%": { transform: "translate(-8px, -6px) scale(1.05)" },
                "100%": { transform: "translate(0px, 0px) scale(1)" },
              },
            }}
          />

          {/* Bottom Right */}
          <Avatar
            src="/images/sticker1.png"
            position="absolute"
            boxSize={{ base: "60px", sm: "75px", md: "90px", lg: "100px" }}
            bottom={{ base: "5%", sm: "3%", md: "0" }}
            right={{ base: "5%", sm: "8%", md: "10%" }}
            border="3px solid white"
            sx={{
              animation: "float5 5.2s ease-in-out infinite 0.7s",
              "@keyframes float5": {
                "0%": { transform: "translate(0px, 0px) scale(1)" },
                "50%": { transform: "translate(8px, -8px) scale(1.03)" },
                "100%": { transform: "translate(0px, 0px) scale(1)" },
              },
            }}
          />
        </Box>

        {/* RIGHT: Content */}
        <VStack
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          spacing={{ base: 5, md: 6 }}
          flex={1}
          maxW={{ base: "100%", lg: "600px" }}
          px={{ base: 2, sm: 4 }}
        >
          {/* Heading */}
          <Heading
            color={textColor}
            fontSize={{ base: "28px", sm: "32px", md: "36px", lg: "42px" }}
            fontWeight="extrabold"
            lineHeight="1.2"
            letterSpacing="tight"
            sx={{
              animation: "fadeInUp 0.6s ease-out 0.3s both",
              "@keyframes fadeInUp": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Who is Delbaram?
          </Heading>

          {/* Subtitle */}
          <Text
            color={textColor}
            opacity={0.9}
            fontSize={{ base: "16px", sm: "17px", md: "18px" }}
            lineHeight="1.6"
            maxW="500px"
            sx={{
              animation: "fadeInUp 0.6s ease-out 0.5s both",
            }}
          >
            Connecting people, sparking conversations, and building real relationships in a smarter way. Join thousands of happy users finding their perfect matches every day.
          </Text>

          {/* Stats - Responsive Grid */}
          <SimpleGrid 
            columns={{ base: 3 }} 
            spacing={{ base: 2, sm: 4, md: 6 }}
            width="100%"
            maxW="500px"
            py={{ base: 2, md: 4 }}
          >
            {[
              { value: "10K+", label: "Active Users" },
              { value: "50K+", label: "Daily Chats" },
              { value: "5K+", label: "Success Stories" },
            ].map((item, i) => (
              <Box
                key={i}
                px={{ base: 2, sm: 3, md: 4 }}
                py={{ base: 2, sm: 3 }}
                bg={statBg}
                borderRadius="lg"
                backdropFilter="blur(10px)"
                textAlign="center"
                sx={{
                  animation: `fadeInScale 0.5s ease-out ${0.7 + i * 0.15}s both`,
                  "@keyframes fadeInScale": {
                    "0%": { opacity: 0, transform: "scale(0.8)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                  },
                  transition: "all 0.3s ease",
                  _hover: {
                    transform: { md: "translateY(-6px) scale(1.02)" },
                    bg: "whiteAlpha.300",
                    boxShadow: "lg",
                  },
                }}
              >
                <Text
                  color={textColor}
                  fontSize={{ base: "20px", sm: "22px", md: "24px", lg: "28px" }}
                  fontWeight="bold"
                  lineHeight="1.2"
                >
                  {item.value}
                </Text>
                <Text 
                  color={textColor} 
                  fontSize={{ base: "11px", sm: "12px", md: "14px" }}
                  fontWeight="medium"
                  opacity={0.9}
                  lineHeight="1.4"
                  mt={1}
                >
                  {item.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Button - premium style */}
          <Button
            size={{ base: "md", sm: "lg" }}
            bg={buttonBg}
            color={buttonColor}
            px={{ base: 8, md: 10 }}
            py={{ base: 6, md: 7 }}
            borderRadius="full"
            fontWeight="bold"
            fontSize={{ base: "16px", md: "18px" }}
            mt={{ base: 4, md: 6 }}
            boxShadow="lg"
            width={{ base: "100%", sm: "auto" }}
            minW={{ sm: "200px" }}
            sx={{
              animation: "bounceIn 0.8s ease-out 1.2s both",
              "@keyframes bounceIn": {
                "0%": { transform: "scale(0.3)", opacity: 0 },
                "50%": { transform: "scale(1.05)", opacity: 0.9 },
                "70%": { transform: "scale(0.95)", opacity: 1 },
                "100%": { transform: "scale(1)", opacity: 1 },
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              _hover: {
                transform: { base: "scale(1.02)", md: "scale(1.08) translateY(-3px)" },
                boxShadow: "2xl",
                bg: hoverBg,
              },
            }}
          >
            Sign Up Now →
          </Button>

          {/* Trust indicator */}
          <Text
            color={textColor}
            fontSize={{ base: "12px", sm: "13px" }}
            opacity={0.7}
            mt={2}
            sx={{
              animation: "fadeIn 0.6s ease-out 1.5s both",
              "@keyframes fadeIn": {
                "0%": { opacity: 0 },
                "100%": { opacity: 0.7 },
              },
            }}
          >
            ✨ Free to join • No credit card required
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default CTA;