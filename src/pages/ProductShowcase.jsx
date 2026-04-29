import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductShowcase = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      slug: "double-light",
      title: "Double Light",
      subtitle: "WITH POWER",
      image: "/images/Double Light.jpeg",
      description: "Effortless control, superior comfort, and multi-color choices with dual headlight design.",
      tag: "UNLEASH UNMATCHED PERFORMANCE WITH DUAL HEADLIGHT",
    },
    {
      id: 2,
      slug: "legendre-ld",
      title: "Legendre LD",
      subtitle: "Luxury Performance",
      image: "/images/Legender- LD.jpeg",
      description: "Premium build quality, smart digital display, and long-range battery for superior rides.",
      tag: "PREMIUM QUALITY • LONG RANGE • SMART DISPLAY",
    },
    {
      id: 3,
      slug: "big-daddy-cs3",
      title: "Big Daddy - CS3",
      subtitle: "Heavy Duty Power",
      image: "/images/Big Daddy- CS3.jpeg",
      description: "Built for power and durability with exceptional battery life for heavy-duty use.",
      tag: "HEAVY DUTY • EXTRA LONG RANGE • DURABLE",
    },
  ];

  const featuredSlug = "bmw";

  return (
    <Box bg="#f8f5f0" py={{ base: 12, md: 16 }} px={4}>
      <Box maxW="1200px" mx="auto">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">

          {/* Left Column — Three Stacked Cards */}
          <VStack spacing={10}>
            {products.map((product) => (
              <Box
                key={product.id}
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                position="relative"
                cursor="pointer"
                transition="transform 0.3s"
                _hover={{ transform: "translateY(-8px)" }}
                onClick={() => navigate(`/products/${product.slug}`)}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  w="100%"
                  h={{ base: "260px", md: "300px" }}
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/400x300?text=RMNA+E-Scooty"
                />

                <Box p={6}>
                  <Text fontSize="sm" color="orange.500" fontWeight="medium" mb={2}>
                    {product.tag}
                  </Text>

                  <Heading
                    as="h3"
                    fontSize={{ base: "24px", md: "28px" }}
                    fontWeight="bold"
                    color="#e07a2f"
                    mb={1}
                  >
                    {product.title}
                  </Heading>

                  <Text fontSize="lg" fontWeight="semibold" color="gray.700" mb={4}>
                    {product.subtitle}
                  </Text>

                  <Text color="gray.600" mb={6}>
                    {product.description}
                  </Text>

                  <Button
                    rightIcon={<>→</>}
                    bg="#e07a2f"
                    color="white"
                    _hover={{ bg: "#c86a28" }}
                    px={8}
                    py={6}
                    fontWeight="bold"
                    borderRadius="md"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/products/${product.slug}`);
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            ))}
          </VStack>

          {/* Right Column — Featured Product */}
          <Box
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            position="relative"
            h="full"
            minH={{ base: "500px", lg: "650px" }}
            cursor="pointer"
            onClick={() => navigate(`/products/${featuredSlug}`)}
          >
            <Image
              src="/images/BMW.jpeg"
              alt="BMW E-Scooty"
              w="100%"
              h="100%"
              objectFit="cover"
              fallbackSrc="https://via.placeholder.com/600x650?text=RMNA+Premium+E-Scooty"
            />

            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(to top, rgba(0,0,0,0.6), transparent)"
            />

            <Box position="absolute" bottom={8} left={8} color="white">
              <Heading fontSize={{ base: "32px", md: "40px" }} fontWeight="bold" mb={2}>
                BMW E-Scooty
              </Heading>
              <Text fontSize="2xl" fontWeight="semibold" mb={6}>
                Ride the Future
              </Text>

              <Button
                bg="white"
                color="#e07a2f"
                px={10}
                py={6}
                fontWeight="bold"
                _hover={{ bg: "gray.100" }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/${featuredSlug}`);
                }}
              >
                Explore Collection
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductShowcase;