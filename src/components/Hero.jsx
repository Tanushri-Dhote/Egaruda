import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLeaf, FaShieldAlt, FaBolt } from "react-icons/fa";

const FeaturesThree = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");

  const features = [
    {
      title: "Eco-Friendly",
      description: "Zero emissions",
      icon: FaLeaf,
      color: "green",
    },
    {
      title: "Reliable",
      description: "Safe & durable",
      icon: FaShieldAlt,
      color: "blue",
    },
    {
      title: "Cost-Effective",
      description: "Low running cost",
      icon: FaBolt,
      color: "orange",
    },
  ];

  return (
    <Box
      position="relative"
      zIndex="20"
      mt={{ base: "-45px", md: "-55px" }}
      px={{ base: 4, md: 6 }}
    >
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        maxW="920px"
        mx="auto"
      >
        {features.map((item, i) => (
          <Box
            key={i}
            bg={cardBg}
            border={`1px solid ${borderColor}`}
            borderRadius="24px"
            p={{ base: 5, md: 6 }}
            textAlign="center"
            boxShadow="0 10px 30px rgba(0,0,0,0.06)"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
            }}
          >
            <VStack spacing={4}>
              {/* Icon + Heading Same Line */}
              <HStack
                spacing={3}
                bg={`${item.color}.50`}
                px={5}
                py={3}
                borderRadius="full"
                justify="center"
              >
                <Icon
                  as={item.icon}
                  boxSize={5}
                  color={`${item.color}.500`}
                />

                <Heading
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="700"
                  color={headingColor}
                >
                  {item.title}
                </Heading>
              </HStack>

              <Text
                fontSize="sm"
                color={textColor}
                lineHeight="1.5"
              >
                {item.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesThree;