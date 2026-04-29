import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  VStack,
  HStack,
  Badge,
  Divider,
  SimpleGrid,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  Icon,
  Tooltip,
  ScaleFade,
  SlideFade,
  Wrap
} from '@chakra-ui/react';

import { keyframes } from '@emotion/react';
import { ArrowBackIcon, PhoneIcon, CheckIcon, StarIcon } from '@chakra-ui/icons';
import {
  FaWhatsapp,
  FaBatteryFull,
  FaBolt,
  FaTachometerAlt,
  FaWeightHanging,
  FaClock,
  FaRoad,
  FaPlug,
  FaCogs,
  FaShieldAlt,
  FaThumbsUp,
  FaTruck,
  FaHeadset,
  FaGem,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';
import { MdElectricBolt, MdSpeed, MdVerified } from 'react-icons/md';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(34,197,94,0.2); }
  50% { box-shadow: 0 0 20px rgba(34,197,94,0.4); }
  100% { box-shadow: 0 0 5px rgba(34,197,94,0.2); }
`;

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const products = {
    'single-light': {
      name: 'Single Light',
      category: 'E-Scooty',
      subCategory: 'Entry Series',
      image: '/images/Single Light.jpeg',
      price: '₹ 37,000',
      description: 'The Single Light electric scooter is your ideal entry into clean, affordable electric mobility. Lightweight and easy to handle, it is perfect for daily short commutes and city errands.',
      features: [
        'Single LED Headlight',
        'Lightweight Frame',
        'Comfortable Seating',
        'USB Charging Port',
        'Digital Speedometer',
        'Side Stand Sensor',
      ],
      colors: ['#000000', '#FFFFFF', '#FF0000', '#1E3A8A'],
      specs: {
        'Top Speed': '45 km/h',
        'Range': '65 km per charge',
        'Motor Power': '1000W',
        'Battery': '48V 24Ah Lithium-ion',
        'Charging Time': '4-5 hours',
        'Brakes': 'Drum Brakes',
        'Tires': 'Steel Wheels',
      },
      rating: 4.7,
      reviews: 184,
    },
    'double-light': {
      name: 'Double Light',
      category: 'E-Scooty',
      subCategory: 'Standard Series',
      image: '/images/Double Light.jpeg',
      price: '₹ 38,000',
      description: 'The Double Light electric scooter offers a perfect blend of style, performance, and affordability. Ideal for daily commuting with its sleek design and reliable performance.',
      features: [
        'Dual Headlight Design',
        'Comfortable Seating',
        'LED Display Meter',
        'USB Charging Port',
        'Side Box Storage',
        'Mobile Holder',
      ],
      colors: ['#000000', '#FF0000', '#FFFFFF', '#1E3A8A'],
      specs: {
        'Top Speed': '55 km/h',
        'Range': '80 km per charge',
        'Motor Power': '1500W',
        'Battery': '48V 30Ah Lithium-ion',
        'Charging Time': '5-6 hours',
        'Brakes': 'Disc Brakes',
        'Tires': 'Alloy Wheels with Tubeless Tires',
      },
      rating: 4.8,
      reviews: 128,
    },
    'cs2': {
      name: 'CS2',
      category: 'E-Scooty',
      subCategory: 'Luxury Series',
      image: '/images/Luxury- CS2.jpeg',
      price: '₹ 52,000',
      description: 'The CS2 blends luxury aesthetics with robust electric performance. A premium choice for riders who want a head-turning scooter without breaking the bank.',
      features: [
        'Luxury Design & Finish',
        'Digital Instrument Cluster',
        'Regenerative Braking',
        'LED Lighting System',
        'Anti-Theft Alarm',
        'USB Charging Port',
      ],
      colors: ['#1E293B', '#C0C0C0', '#7C3AED', '#DC2626'],
      specs: {
        'Top Speed': '58 km/h',
        'Range': '85 km per charge',
        'Motor Power': '1500W',
        'Battery': '60V 30Ah Lithium-ion',
        'Charging Time': '5-6 hours',
        'Brakes': 'Disc Brakes',
        'Tires': 'Alloy Wheels',
      },
      rating: 4.8,
      reviews: 102,
    },
    'legendre-ld': {
      name: 'Legendre LD',
      category: 'E-Scooty',
      subCategory: 'Premium Series',
      image: '/images/Legender- LD.jpeg',
      price: '₹ 50,000',
      description: 'Legendre LD combines elegance with power. This classic electric scooter is designed for those who seek style without compromising on performance.',
      features: [
        'Premium Build Quality',
        'Long Range Battery',
        'Smart Digital Display',
        'Regenerative Braking',
        'LED Lighting System',
        'Anti-Theft Alarm',
      ],
      colors: ['#000000', '#C0C0C0', '#FF4500', '#2E8B57'],
      specs: {
        'Top Speed': '60 km/h',
        'Range': '95 km per charge',
        'Motor Power': '1800W',
        'Battery': '60V 35Ah Lithium-ion',
        'Charging Time': '5-6 hours',
        'Brakes': 'Disc Brakes (Front & Rear)',
        'Tires': 'Alloy Wheels',
      },
      rating: 4.9,
      reviews: 95,
    },

    'mini-activa-cs': {
      name: 'CS (Mini Activa)',
      category: 'E-Scooty',
      subCategory: 'Compact Series',
      image: '/images/Mini Activa (CS).jpeg',
      price: '₹ 51,000',
      description: 'Compact, lightweight and perfect for city riding. The CS Mini Activa is designed for easy maneuverability and efficient daily commuting through congested streets.',
      features: [
        'Compact Activa-Style Design',
        'Lightweight Frame',
        'Easy Parking',
        'LED Headlight',
        'USB Charging Port',
        'Side Stand Sensor',
      ],
      colors: ['#FF1493', '#000000', '#FFFFFF', '#4169E1'],
      specs: {
        'Top Speed': '50 km/h',
        'Range': '70 km per charge',
        'Motor Power': '1200W',
        'Battery': '48V 25Ah Lithium-ion',
        'Charging Time': '4-5 hours',
        'Brakes': 'Drum Brakes',
        'Tires': 'Steel Wheels',
      },
      rating: 4.7,
      reviews: 210,
    },
    'big-daddy-cs3': {
      name: 'Big Daddy - CS3',
      category: 'E-Scooty',
      subCategory: 'Heavy Duty Series',
      image: '/images/Big Daddy- CS3.jpeg',
      price: '₹ 54,000',
      description: 'Big Daddy CS3 is built for power and durability. Perfect for heavy-duty use and long-distance commuting with exceptional battery life.',
      features: [
        'Heavy Duty Build',
        'Extra Long Range',
        'Powerful Motor',
        'Large Storage Space',
        'Dual Disc Brakes',
        'Advanced Suspension',
      ],
      colors: ['#000000', '#8B0000', '#2F4F4F', '#4B0082'],
      specs: {
        'Top Speed': '65 km/h',
        'Range': '120 km per charge',
        'Motor Power': '2500W',
        'Battery': '72V 45Ah Lithium-ion',
        'Charging Time': '6-7 hours',
        'Brakes': 'Dual Disc Brakes',
        'Tires': 'Heavy Duty Alloy Wheels',
      },
      rating: 4.9,
      reviews: 67,
    },
    'ola-pro': {
      name: 'OLA Pro',
      category: 'E-Scooty',
      subCategory: 'Smart Series',
      image: '/images/OLA Pro.jpeg',
      price: '₹ 58,000',
      description: 'The OLA Pro brings smart connectivity and futuristic design to everyday commuting. Packed with tech features and a powerful motor for a smooth, intelligent ride.',
      features: [
        'Smart App Connectivity',
        'Digital Dashboard',
        'Hill Assist',
        'Cruise Control',
        'Keyless Entry',
        'Fast Charging Support',
      ],
      colors: ['#EF4444', '#000000', '#FFFFFF', '#3B82F6'],
      specs: {
        'Top Speed': '65 km/h',
        'Range': '100 km per charge',
        'Motor Power': '2000W',
        'Battery': '60V 38Ah Lithium-ion',
        'Charging Time': '4-5 hours',
        'Brakes': 'Disc Brakes (Front & Rear)',
        'Tires': 'Alloy Wheels',
      },
      rating: 4.8,
      reviews: 89,
    },
    'fh-rider': {
      name: 'FH (Rider)',
      category: 'E-Scooty',
      subCategory: 'Comfort Series',
      image: '/images/Rider - FH.jpeg',
      price: '₹ 58,500',
      description: 'The FH Rider is engineered for comfort on long journeys. With extra cushioning, an ergonomic design and solid range, it is the go-to choice for daily long-distance commuters.',
      features: [
        'Ergonomic Rider Position',
        'Wide Comfortable Seat',
        'Long Range Battery',
        'Smooth Suspension',
        'LED Lighting All Around',
        'Digital Display',
      ],
      colors: ['#1D4ED8', '#000000', '#6B7280', '#065F46'],
      specs: {
        'Top Speed': '62 km/h',
        'Range': '95 km per charge',
        'Motor Power': '1800W',
        'Battery': '60V 35Ah Lithium-ion',
        'Charging Time': '5-6 hours',
        'Brakes': 'Disc & Drum Combo',
        'Tires': 'Alloy Wheels with Tubeless Tires',
      },
      rating: 4.7,
      reviews: 74,
    },
    'thar-e4': {
      name: 'THAR - E4',
      category: 'E-Scooty',
      subCategory: 'Adventure Series',
      image: '/images/THAR- E4.jpeg',
      price: '₹ 62,000',
      description: 'Inspired by rugged terrain capability, the THAR-E4 is your perfect companion for both city and adventure rides. Built tough for Indian roads.',
      features: [
        'Rugged Design',
        'High Ground Clearance',
        'Off-road Capability',
        'LED Fog Lights',
        'Digital Instrument Cluster',
        'Side Box Included',
      ],
      colors: ['#228B22', '#000000', '#DAA520', '#8B4513'],
      specs: {
        'Top Speed': '68 km/h',
        'Range': '110 km per charge',
        'Motor Power': '2200W',
        'Battery': '60V 40Ah Lithium-ion',
        'Charging Time': '5-6 hours',
        'Brakes': 'Disc Brakes with CBS',
        'Tires': 'Off-road Tires',
      },
      rating: 4.8,
      reviews: 43,
    },
    'momentum-q7': {
      name: 'Momentum (Q7)',
      category: 'E-Scooty',
      subCategory: 'Performance Series',
      image: '/images/Momentum- Q7.jpeg',
      price: '₹ 60,000',
      description: 'Momentum Q7 delivers exceptional performance with a focus on efficiency and reliability. The perfect choice for daily commuters who want real value for money.',
      features: [
        'Efficient High-Torque Motor',
        'Long Battery Life',
        'Digital Display',
        'LED Indicators',
        'Anti-Theft Lock',
        'Comfort Suspension',
      ],
      colors: ['#FF6600', '#000000', '#336699', '#9932CC'],
      specs: {
        'Top Speed': '60 km/h',
        'Range': '90 km per charge',
        'Motor Power': '1800W',
        'Battery': '60V 35Ah Lithium-ion',
        'Charging Time': '5-6 hours',
        'Brakes': 'Disc & Drum Combo',
        'Tires': 'Alloy Wheels',
      },
      rating: 4.6,
      reviews: 156,
    },
    'bmw': {
      name: 'BMW',
      category: 'E-Scooty',
      subCategory: 'Luxury Series',
      image: '/images/BMW.jpeg',
      price: '₹ 58,000',
      description: 'Experience luxury electric mobility with this premium scooter. Inspired by German engineering, it offers unmatched style and performance.',
      features: [
        'Premium German Design',
        'Luxury Seat',
        'Smart Connectivity',
        'Keyless Start',
        'Parking Sensors',
        'Bluetooth Speakers',
      ],
      colors: ['#0033A0', '#000000', '#FFFFFF', '#C0C0C0'],
      specs: {
        'Top Speed': '75 km/h',
        'Range': '125 km per charge',
        'Motor Power': '3000W',
        'Battery': '72V 50Ah Lithium-ion',
        'Charging Time': '4-5 hours',
        'Brakes': 'ABS Brakes',
        'Tires': 'Performance Alloy Wheels',
      },
      rating: 5.0,
      reviews: 32,
    },
  };

  const product = products[slug];
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = '#22c55e';

  if (!product) {
    return (
      <Box textAlign="center" py={20} bg={bgColor} minH="100vh">
        <Container maxW="600px">
          <Heading mb={4}>Product Not Found</Heading>
          <Text mb={8} color={textColor}>
            The product you're looking for is not available in our catalog.
          </Text>
          <Button colorScheme="green" size="lg" onClick={() => navigate('/products')}>
            Browse All Products
          </Button>
        </Container>
      </Box>
    );
  }

  const specIcons = {
    'Top Speed': FaTachometerAlt,
    'Range': FaRoad,
    'Motor Power': FaBolt,
    'Battery': FaBatteryFull,
    'Charging Time': FaClock,
    'Brakes': FaCogs,
    'Tires': FaWeightHanging,
  };

  return (
    <Box bg={bgColor} minH="100vh" py={8} overflowX="hidden">
      <Container maxW="1300px" px={{ base: 4, md: 6 }}>
        {/* Back Button */}
        <SlideFade in={true} offsetY="20px">
          <Button
            leftIcon={<ArrowBackIcon />}
            variant="ghost"
            mb={8}
            onClick={() => navigate('/')}
            color={textColor}
            _hover={{ color: accentColor, transform: 'translateX(-5px)' }}
            transition="all 0.2s"
          >
            Back to Home
          </Button>
        </SlideFade>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12}>
          {/* Left Column - Image Gallery */}
          <Box flex={1.2}>
            <ScaleFade in={true} initialScale={0.95}>
              <Box
                position="relative"
                bg={cardBg}
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="2xl"
                p={6}
                border="1px solid"
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              >
                {/* Badge */}
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  bg={accentColor}
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  zIndex={1}
                >
                  <HStack spacing={1}>
                    <Icon as={MdVerified} />
                    <Text>Best Seller</Text>
                  </HStack>
                </Badge>

                <Image
                  src={product.image}
                  alt={product.name}
                  w="100%"
                  h={{ base: "300px", md: "400px" }}
                  objectFit="contain"
                  fallbackSrc="https://via.placeholder.com/500x400?text=RMNA+E-Scooty"
                  transition="transform 0.3s"
                  _hover={{ transform: 'scale(1.05)' }}
                />
              </Box>

              {/* Color Options */}
              <Box mt={6}>
                <Text fontWeight="600" mb={3} color={headingColor}>
                  Available Colors
                </Text>
                <HStack spacing={4}>
                  {product.colors.map((color, index) => (
                    <Tooltip label={`Color ${index + 1}`} key={index}>
                      <Box
                        w="55px"
                        h="55px"
                        borderRadius="full"
                        bg={color}
                        border="3px solid"
                        borderColor={useColorModeValue('white', 'gray.600')}
                        boxShadow="md"
                        cursor="pointer"
                        transition="all 0.2s"
                        _hover={{ transform: 'scale(1.15)', boxShadow: 'lg' }}
                      />
                    </Tooltip>
                  ))}
                </HStack>
              </Box>
            </ScaleFade>
          </Box>

          {/* Right Column - Product Details */}
          <Box flex={1.8}>
            <SlideFade in={true} offsetY="30px" delay={0.1}>
              {/* Header Section */}
              <VStack align="flex-start" spacing={3} mb={6}>
                <HStack spacing={3}>
                  <Badge
                    bg={`${accentColor}15`}
                    color={accentColor}
                    fontSize="sm"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontWeight="600"
                  >
                    {product.category}
                  </Badge>
                  <Badge
                    bg="orange.100"
                    color="orange.600"
                    fontSize="sm"
                    px={4}
                    py={2}
                    borderRadius="full"
                  >
                    {product.subCategory}
                  </Badge>
                </HStack>

                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="800"
                  color={headingColor}
                  lineHeight="1.2"
                >
                  {product.name}
                </Heading>

                {/* Rating */}
                <HStack spacing={2}>
                  <HStack spacing={1}>
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        as={StarIcon}
                        color={i < Math.floor(product.rating) ? '#fbbf24' : 'gray.300'}
                        boxSize={4}
                      />
                    ))}
                  </HStack>
                  <Text fontSize="sm" color={textColor} fontWeight="500">
                    {product.rating} ⭐ ({product.reviews}+ reviews)
                  </Text>
                </HStack>

                <Text fontSize="3xl" fontWeight="bold" color={accentColor} mt={2}>
                  {product.price}
                </Text>

                <Text fontSize="md" color={textColor} lineHeight="1.8" mt={2}>
                  {product.description}
                </Text>
              </VStack>

              {/* Tabs Section */}
              <Tabs variant="soft-rounded" colorScheme="green" mt={8}>
                <TabList bg={useColorModeValue('gray.100', 'gray.700')} p={1} borderRadius="xl">
                  <Tab _selected={{ bg: accentColor, color: 'white' }}>Key Features</Tab>
                  <Tab _selected={{ bg: accentColor, color: 'white' }}>Specifications</Tab>
                  <Tab _selected={{ bg: accentColor, color: 'white' }}>Warranty</Tab>
                </TabList>

                <TabPanels mt={6}>
                  {/* Features Panel */}
                  <TabPanel px={0}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      {product.features.map((feature, index) => (
                        <HStack key={index} spacing={3}>
                          <Icon as={CheckIcon} color={accentColor} boxSize={4} />
                          <Text fontSize="md" color={textColor}>{feature}</Text>
                        </HStack>
                      ))}
                    </SimpleGrid>
                  </TabPanel>

                  {/* Specifications Panel */}
                  <TabPanel px={0}>
                    <VStack spacing={4} align="stretch">
                      {Object.entries(product.specs).map(([key, value]) => {
                        const IconComponent = specIcons[key] || FaCogs;
                        return (
                          <Flex
                            key={key}
                            justify="space-between"
                            align="center"
                            py={3}
                            borderBottom="1px solid"
                            borderColor={useColorModeValue('gray.100', 'gray.700')}
                          >
                            <HStack spacing={3}>
                              <Icon as={IconComponent} color={accentColor} boxSize={5} />
                              <Text fontWeight="600" color={headingColor}>{key}</Text>
                            </HStack>
                            <Text fontWeight="500" color={textColor}>{value}</Text>
                          </Flex>
                        );
                      })}
                    </VStack>
                  </TabPanel>

                  {/* Warranty Panel */}
                  <TabPanel px={0}>
                    <VStack spacing={4} align="stretch">
                      <Box p={4} bg={`${accentColor}10`} borderRadius="xl">
                        <HStack spacing={3} mb={3}>
                          <Icon as={FaShieldAlt} color={accentColor} boxSize={6} />
                          <Heading size="sm">Comprehensive Warranty</Heading>
                        </HStack>
                        <Text fontSize="sm" color={textColor}>
                          • 3 Years warranty on Electric Motor<br />
                          • 2 Years warranty on Battery<br />
                          • 1 Year warranty on Charger<br />
                          • Lifetime support on Frame
                        </Text>
                      </Box>
                      <Box p={4} bg={`${accentColor}10`} borderRadius="xl">
                        <HStack spacing={3} mb={3}>
                          <Icon as={FaThumbsUp} color={accentColor} boxSize={6} />
                          <Heading size="sm">Free Services</Heading>
                        </HStack>
                        <Text fontSize="sm" color={textColor}>
                          • 3 Free Services within first year<br />
                          • Free Home Pickup & Drop<br />
                          • 24/7 Roadside Assistance
                        </Text>
                      </Box>
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>

              {/* Action Buttons */}
              <Flex gap={4} direction={{ base: 'column', sm: 'row' }} mt={10}>
                <Button
                  leftIcon={<FaWhatsapp />}
                  size="lg"
                  bg="#25D366"
                  color="white"
                  flex={2}
                  py={7}
                  fontSize="16px"
                  fontWeight="600"
                  _hover={{ bg: '#1eb355', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                  onClick={() => window.open(`https://wa.me/919695600185?text=I'm interested in ${product.name} from RMNA E-Mobility`, '_blank')}
                >
                  WhatsApp Inquiry
                </Button>

                <Button
                  leftIcon={<PhoneIcon />}
                  size="lg"
                  variant="outline"
                  borderColor={accentColor}
                  color={accentColor}
                  flex={1}
                  py={7}
                  fontSize="16px"
                  fontWeight="600"
                  _hover={{ bg: `${accentColor}10`, transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                  onClick={() => window.location.href = 'tel:+919695600185'}
                >
                  Call Now
                </Button>
              </Flex>

              {/* Service Badges */}
              <Wrap spacing={3} mt={6}>
                <Tooltip label="Free Home Delivery">
                  <Badge bg={`${accentColor}15`} color={accentColor} px={4} py={2} borderRadius="full">
                    <HStack spacing={2}>
                      <Icon as={FaTruck} />
                      <Text>Free Delivery</Text>
                    </HStack>
                  </Badge>
                </Tooltip>
                <Tooltip label="EMI Available">
                  <Badge bg={`${accentColor}15`} color={accentColor} px={4} py={2} borderRadius="full">
                    <HStack spacing={2}>
                      <Icon as={FaGem} />
                      <Text>EMI Starting @ ₹1,999</Text>
                    </HStack>
                  </Badge>
                </Tooltip>
                <Tooltip label="Test Ride Available">
                  <Badge bg={`${accentColor}15`} color={accentColor} px={4} py={2} borderRadius="full">
                    <HStack spacing={2}>
                      <Icon as={FaHeadset} />
                      <Text>Free Test Ride</Text>
                    </HStack>
                  </Badge>
                </Tooltip>
              </Wrap>

              {/* Pros Section */}
              <Box mt={8} p={5} bg={cardBg} borderRadius="2xl" border="1px solid" borderColor={useColorModeValue('gray.100', 'gray.700')}>
                <Heading size="sm" mb={4} display="flex" alignItems="center" gap={2}>
                  <Icon as={FaThumbsUp} color={accentColor} />
                  Why Choose This Model?
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} color={accentColor} boxSize={4} />
                    <Text fontSize="sm" color={textColor}>Low Maintenance Cost</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} color={accentColor} boxSize={4} />
                    <Text fontSize="sm" color={textColor}>Eco-Friendly Vehicle</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} color={accentColor} boxSize={4} />
                    <Text fontSize="sm" color={textColor}>5 Years Battery Life</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <Icon as={FaCheckCircle} color={accentColor} boxSize={4} />
                    <Text fontSize="sm" color={textColor}>Government Subsidy Available</Text>
                  </HStack>
                </SimpleGrid>
              </Box>
            </SlideFade>
          </Box>
        </Flex>

        {/* Floating Contact Button */}
        {/* <Box
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex={999}
          cursor="pointer"
          onClick={() => window.open(`https://wa.me/919695600185?text=I'm interested in ${product.name}`, '_blank')}
          animation={`${float} 2s ease-in-out infinite`}
        >
          <Flex
            w="60px"
            h="60px"
            bg="#25D366"
            borderRadius="full"
            align="center"
            justify="center"
            boxShadow="xl"
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.1)', boxShadow: '2xl' }}
          >
            <Icon as={FaWhatsapp} boxSize={8} color="white" />
          </Flex>
        </Box> */}
      </Container>
    </Box>
  );
};

export default ProductDetail;