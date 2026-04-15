import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Image,
  Badge,
  IconButton,
  SimpleGrid,
  Container,
} from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight, FaBolt } from 'react-icons/fa';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const accentColor = useColorModeValue('green.500', 'green.400');
  const gradientBg = 'linear(to-r, green.400, yellow.400, orange.400)';

  const products = [
    { id: 1, image: '/images/product-image-1.jpg', name: 'Egaruda Classic' },
    { id: 2, image: '/images/product-image-2.jpg', name: 'Egaruda Sport' },
    { id: 3, image: '/images/product-image-3.jpg', name: 'Egaruda Elite' },
    { id: 4, image: '/images/product-image-4.jpg', name: 'Egaruda Pro' },
    { id: 5, image: '/images/product-image-5.jpg', name: 'Egaruda Urban' },
    { id: 6, image: '/images/product-image-6.jpg', name: 'Egaruda Racer' },
    { id: 7, image: '/images/product-image-7.jpg', name: 'Egaruda Turbo' },
    { id: 8, image: '/images/product-image-1.jpg', name: 'Egaruda Classic' },
  ];

  const imagesPerSlide = 4;
  const totalSlides = Math.ceil(products.length / imagesPerSlide);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <Box py={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }} overflowX="hidden">
      <Container maxW="1200px" px={{ base: 4, md: 6, lg: 8 }} mx="auto">
        <VStack spacing={4} textAlign="center" mb={{ base: 6, md: 8 }}>
          <Badge
            bgGradient={gradientBg}
            color="white"
            fontSize={{ base: 'sm', md: 'md' }}
            px={4}
            py={2}
            borderRadius="full"
          >
            <HStack spacing={2}>
              <Icon as={FaBolt} />
              <Text>Our Collection</Text>
            </HStack>
          </Badge>

          <Text fontSize={{ base: '14px', md: '16px' }} color={textColor}>
            Choose your perfect ride from our top-rated selections
          </Text>
        </VStack>

        <Box
          position="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <IconButton
                onClick={prevSlide}
                position="absolute"
                left={{ base: -8, md: -12, lg: -14 }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bgGradient: gradientBg, color: 'white' }}
                aria-label="Previous"
                icon={<Icon as={FaArrowLeft} boxSize={4} />}
                size={{ base: 'sm', md: 'md' }}
              />
              <IconButton
                onClick={nextSlide}
                position="absolute"
                right={{ base: -8, md: -12, lg: -14 }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                borderRadius="full"
                bg={cardBg}
                boxShadow="lg"
                _hover={{ bgGradient: gradientBg, color: 'white' }}
                aria-label="Next"
                icon={<Icon as={FaArrowRight} boxSize={4} />}
                size={{ base: 'sm', md: 'md' }}
              />
            </>
          )}

          {/* Slider Content */}
          <Box overflow="hidden" borderRadius="2xl">
            <Flex
              transition="transform 0.5s ease-in-out"
              transform={`translateX(-${currentSlide * 100}%)`}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <Box key={slideIndex} minW="100%">
                  <SimpleGrid 
                    columns={{ base: 2, md: 4 }} 
                    spacing={{ base: 3, md: 4 }}
                  >
                    {products
                      .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                      .map((product) => (
                        <Box
                          key={product.id}
                          borderRadius="2xl"
                          overflow="hidden"
                          transition="all 0.3s ease"
                          _hover={{
                            transform: 'scale(1.03)',
                            boxShadow: 'xl',
                          }}
                          cursor="pointer"
                          bg="white"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            w="100%"
                            h={{ base: '180px', md: '240px', lg: '260px' }}   // Increased height
                            objectFit="contain"        // Changed from 'cover' to 'contain'
                            bg="gray.50"               // Light background for better look
                            p={2}                      // Small padding so image doesn't touch edges
                          />
                        </Box>
                      ))}
                  </SimpleGrid>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Slider Dots */}
          {totalSlides > 1 && (
            <HStack justify="center" mt={6} spacing={2}>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Box
                  key={index}
                  w={currentSlide === index ? '30px' : '8px'}
                  h="8px"
                  borderRadius="full"
                  bg={currentSlide === index ? accentColor : borderColor}
                  cursor="pointer"
                  onClick={() => goToSlide(index)}
                  transition="all 0.3s ease"
                />
              ))}
            </HStack>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductSlider;