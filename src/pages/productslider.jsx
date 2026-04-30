import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Image,
  Badge,
  Icon,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight, FaBolt, FaStar, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Single Light",
    slug: "single-light",
    price: "37,000",
    image: "/images/Single Light.jpeg",
    badge: "Budget King",
  },
  {
    name: "Double Light",
    slug: "double-light",
    price: "38,000",
    image: "/images/Double Light.jpeg",
    badge: "Hot Deal",
  },
  {
    name: "CS2",
    slug: "cs2",
    price: "52,000",
    image: "/images/Luxury- CS2.jpeg",
    badge: "Best Seller",
  },
  {
    name: "CS3 (Big Daddy)",
    slug: "big-daddy-cs3",
    price: "54,000",
    image: "/images/Big Daddy- CS3.jpeg",
    badge: "Power Ride",
  },
  {
    name: "BMW",
    slug: "bmw",
    price: "58,000",
    image: "/images/BMW.jpeg",
    badge: "Premium",
  },
  {
    name: "LD (Legender)",
    slug: "legendre-ld",
    price: "50,000",
    image: "/images/Legender- LD.jpeg",
    badge: "Classic",
  },
  {
    name: "CS (Mini Activa)",
    slug: "mini-activa-cs",
    price: "51,000",
    image: "/images/Mini Activa (CS).jpeg",
    badge: "Compact",
  },
  {
    name: "Momentum (Q7)",
    slug: "momentum-q7",
    price: "60,000",
    image: "/images/Momentum- Q7.jpeg",
    badge: "Fast Pick",
  },
  {
    name: "OLA Pro",
    slug: "ola-pro",
    price: "58,000",
    image: "/images/OLA Pro.jpeg",
    badge: "Smart Ride",
  },
  {
    name: "FH (Rider)",
    slug: "fh-rider",
    price: "58,500",
    image: "/images/Rider - FH.jpeg",
    badge: "Comfort",
  },
  {
    name: "THAR (E4)",
    slug: "thar-e4",
    price: "62,000",
    image: "/images/THAR- E4.jpeg",
    badge: "Adventure",
  },
];

const CARDS_PER_VIEW = 4;
const TOTAL_SLIDES = Math.ceil(products.length / CARDS_PER_VIEW);

const ProductSlider = () => {
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const bg = useColorModeValue("#f7f8fa", "#0d1117");
  const cardBg = useColorModeValue("#ffffff", "#161b22");
  const cardBorder = useColorModeValue("#e2e8f0", "#30363d");
  const headingColor = useColorModeValue("#0f172a", "#f0f6fc");
  const subTextColor = useColorModeValue("#64748b", "#8b949e");
  const priceColor = useColorModeValue("#16a34a", "#4ade80");
  const arrowBg = useColorModeValue("#ffffff", "#21262d");
  const arrowBorder = useColorModeValue("#e2e8f0", "#30363d");
  const dotActive = useColorModeValue("#16a34a", "#4ade80");
  const dotInactive = useColorModeValue("#cbd5e1", "#30363d");

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % TOTAL_SLIDES);
    resetTimer();
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
    resetTimer();
  };

  const goTo = (i) => {
    setCurrent(i);
    resetTimer();
  };

  const visibleProducts = products.slice(
    current * CARDS_PER_VIEW,
    current * CARDS_PER_VIEW + CARDS_PER_VIEW
  );

  return (
    <Box bg={bg} py={{ base: 14, md: 20 }} overflow="hidden">
      <Container maxW="1400px" px={{ base: 4, md: 8 }}>

        {/* ── Section Header ── */}
        <VStack spacing={3} mb={12} textAlign="center">
          <Badge
            bg={useColorModeValue("#dcfce7", "#052e16")}
            color={useColorModeValue("#16a34a", "#4ade80")}
            px={5}
            py={2}
            borderRadius="full"
            fontSize="sm"
            fontWeight="600"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            ⚡ Premium Electric Collection
          </Badge>

          <Heading
            fontSize={{ base: "24px", md: "46px" }}
            fontWeight="800"
            color={headingColor}
            lineHeight="1.15"
          >
            Ride The Future With{" "}
            <Box as="span" display="inline-flex" fontWeight="bold">
              <Text as="span" color="#f97316">RM</Text>
              <Text as="span" color="#22c55e">NA</Text>
            </Box>
          </Heading>

          <Text color={subTextColor} fontSize={{ base: "15px", md: "17px" }} maxW="600px">
            Stylish electric scooters with premium looks, long battery life and unbeatable pricing.
          </Text>
        </VStack>

        {/* ── Slider Wrapper ── */}
        <Box position="relative">

          {/* Arrow — Prev */}
          <IconButton
            icon={<FaArrowLeft />}
            aria-label="Previous"
            position="absolute"
            left={{ base: "-12px", md: "-20px" }}
            top="50%"
            transform="translateY(-80%)"
            zIndex={10}
            borderRadius="full"
            bg={arrowBg}
            border="1px solid"
            borderColor={arrowBorder}
            boxShadow="md"
            size="md"
            onClick={goPrev}
            _hover={{ bg: useColorModeValue("#f0fdf4", "#21262d"), borderColor: dotActive }}
            transition="all 0.2s"
          />

          {/* Arrow — Next */}
          <IconButton
            icon={<FaArrowRight />}
            aria-label="Next"
            position="absolute"
            right={{ base: "-12px", md: "-20px" }}
            top="50%"
            transform="translateY(-80%)"
            zIndex={10}
            borderRadius="full"
            bg={arrowBg}
            border="1px solid"
            borderColor={arrowBorder}
            boxShadow="md"
            size="md"
            onClick={goNext}
            _hover={{ bg: useColorModeValue("#f0fdf4", "#21262d"), borderColor: dotActive }}
            transition="all 0.2s"
          />

          {/* ── Cards Grid ── */}
          <Flex
            gap={6}
            px={{ base: 2, md: 0 }}
            flexWrap={{ base: "wrap", lg: "nowrap" }}
            justify="center"
          >
            {visibleProducts.map((item, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <Box
                  key={item.slug}
                  flex={{ base: "1 1 100%", lg: "1" }}
                  minW={{ base: "100%", lg: "0" }}
                  maxW={{ lg: "320px" }}
                  bg={cardBg}
                  borderRadius="20px"
                  overflow="hidden"
                  border="1px solid"
                  borderColor={isHovered ? dotActive : cardBorder}
                  boxShadow={isHovered ? "0 12px 40px rgba(22,163,74,0.15)" : "0 2px 12px rgba(0,0,0,0.06)"}
                  cursor="pointer"
                  transition="all 0.3s ease"
                  transform={isHovered ? "translateY(-8px)" : "translateY(0)"}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => navigate(`/products/${item.slug}`)}
                >
                  {/* ── Top Row: Badge + Stars ── */}
                  <Flex justify="space-between" align="center" px={{ base: 2, md: 4 }} pt={4} pb={1} wrap="wrap" gap={2}>
                    <Badge
                      bg={useColorModeValue("#dcfce7", "#052e16")}
                      color={useColorModeValue("#16a34a", "#4ade80")}
                      px={{ base: 2, md: 3 }}
                      py={1}
                      borderRadius="full"
                      fontSize={{ base: "2xs", md: "xs" }}
                      fontWeight="700"
                    >
                      {item.badge}
                    </Badge>
                    <HStack spacing={1}>
                      <Icon as={FaStar} color="#f59e0b" boxSize={3} />
                      <Text fontSize={{ base: "2xs", md: "xs" }} fontWeight="600" color={subTextColor}>
                        4.9
                      </Text>
                    </HStack>
                  </Flex>

                  {/* ── Product Image ── */}
                  <Box
                    h={{ base: "160px", md: "200px" }}
                    px={5}
                    py={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      maxH="100%"
                      maxW="100%"
                      objectFit="contain"
                      transition="transform 0.4s ease"
                      transform={isHovered ? "scale(1.07)" : "scale(1)"}
                    />
                  </Box>

                  {/* ── Product Info ── */}
                  <VStack spacing={2} px={5} pb={5} pt={1} align="stretch">
                    <Heading
                      fontSize={{ base: "15px", md: "17px" }}
                      fontWeight="700"
                      color={headingColor}
                      noOfLines={1}
                    >
                      {item.name}
                    </Heading>

                    {/* Price */}
                    <HStack spacing={1} align="center">
                      <Icon as={FaRupeeSign} color={priceColor} boxSize={3.5} />
                      <Text fontSize={{ base: "20px", md: "22px" }} fontWeight="800" color={priceColor} lineHeight="1">
                        {item.price}
                      </Text>
                    </HStack>

                    {/* Feature Tag */}
                    <HStack spacing={2} color={subTextColor}>
                      <Icon as={FaBolt} color="#f59e0b" boxSize={3} />
                      <Text fontSize="12px" fontWeight="500">High Performance</Text>
                    </HStack>

                    {/* CTA Button */}
                    <Button
                      size="sm"
                      mt={2}
                      bg={useColorModeValue("#16a34a", "#238636")}
                      color="white"
                      borderRadius="10px"
                      fontWeight="600"
                      fontSize="13px"
                      h="36px"
                      _hover={{
                        bg: useColorModeValue("#15803d", "#2ea043"),
                        transform: "translateY(-1px)",
                      }}
                      transition="all 0.2s"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${item.slug}`);
                      }}
                    >
                      View Details
                    </Button>
                  </VStack>
                </Box>
              );
            })}
          </Flex>

          {/* ── Slide Counter ── */}
          <Text
            textAlign="center"
            mt={6}
            mb={2}
            fontSize="13px"
            color={subTextColor}
            fontWeight="500"
          >
            {current * CARDS_PER_VIEW + 1}–
            {Math.min(current * CARDS_PER_VIEW + CARDS_PER_VIEW, products.length)} of {products.length} Models
          </Text>

          {/* ── Dot Navigation ── */}
          <HStack justify="center" spacing={2} mt={2}>
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <Box
                key={i}
                w={current === i ? "28px" : "8px"}
                h="8px"
                borderRadius="full"
                bg={current === i ? dotActive : dotInactive}
                cursor="pointer"
                transition="all 0.3s ease"
                onClick={() => goTo(i)}
              />
            ))}
          </HStack>
        </Box>

        {/* ── View All Button ── */}
        <Flex justify="center" mt={10}>
          <Button
            size="lg"
            bg={useColorModeValue("#16a34a", "#238636")}
            color="white"
            borderRadius="12px"
            fontWeight="700"
            px={10}
            h="52px"
            _hover={{ bg: useColorModeValue("#15803d", "#2ea043"), transform: "translateY(-2px)" }}
            transition="all 0.25s"
            onClick={() => navigate("/products/single-light")}
          >
            Explore All Models
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProductSlider;