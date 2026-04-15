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
  IconButton,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowBackIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { FaWhatsapp, FaBatteryFull, FaBolt, FaTachometerAlt, FaWeightHanging, FaClock } from 'react-icons/fa';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // RMNA E-Mobility Products Data based on PDF
  const products = {
    // E-Scooty Models from PDF
    'double-light': {
      name: 'Double Light',
      category: 'E-Scooty',
      subCategory: 'Standard Series',
      image: '/images/Double Light.jpeg',
      price: '₹ 85,000',
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
      }
    },
    'legendre-ld': {
      name: 'Legendre LD',
      category: 'E-Scooty',
      subCategory: 'Premium Series',
      image: '/images/Legender- LD.jpeg',
      price: '₹ 95,000',
      description: 'Legendre LD combines elegance with power. This premium electric scooter is designed for those who seek style without compromising on performance.',
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
      }
    },
    'mini-activa-cs': {
      name: 'Mini Activa (CS)',
      category: 'E-Scooty',
      subCategory: 'Compact Series',
      image: '/images/Mini Activa (CS).jpeg',
      price: '₹ 75,000',
      description: 'Compact, lightweight, and perfect for city riding. The Mini Activa (CS) is designed for easy maneuverability and efficient daily commuting.',
      features: [
        'Compact Design',
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
      }
    },
    'big-daddy-cs3': {
      name: 'Big Daddy - CS3',
      category: 'E-Scooty',
      subCategory: 'Heavy Duty Series',
      image: '/images/Big Daddy- CS3.jpeg',
      price: '₹ 1,10,000',
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
      }
    },
    'thar-e4': {
      name: 'THAR - E4',
      category: 'E-Scooty',
      subCategory: 'Adventure Series',
      image: '/images/THAR- E4.jpeg',
      price: '₹ 1,20,000',
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
      }
    },
    'bmw': {
      name: 'BMW',
      category: 'E-Scooty',
      subCategory: 'Luxury Series',
      image: '/images/BMW.jpeg',
      price: '₹ 1,35,000',
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
      }
    },
    'momentum-q7': {
      name: 'Momentum Q7',
      category: 'E-Scooty',
      subCategory: 'Performance Series',
      image: '/images/Momentum- Q7.jpeg',
      price: '₹ 1,00,000',
      description: 'Momentum Q7 delivers exceptional performance with a focus on efficiency and reliability. Perfect for daily commuters who want value for money.',
      features: [
        'Efficient Motor',
        'Long Battery Life',
        'Digital Display',
        'LED Indicators',
        'Anti-theft Lock',
        'Comfort Suspension',
      ],
      colors: ['#FF6600', '#000000', '#336699', '#9932CC'],
      specs: {
        'Top Speed': '58 km/h',
        'Range': '90 km per charge',
        'Motor Power': '1600W',
        'Battery': '48V 35Ah Lithium-ion',
        'Charging Time': '5-6 hours',
        'Brakes': 'Disc & Drum Combo',
        'Tires': 'Alloy Wheels',
      }
    },
  };

  // Get product or use default
  const product = products[slug];

  // Fallback product if not found
  const fallbackProduct = {
    name: slug?.replace(/-/g, ' ').toUpperCase() || 'Electric Scooter',
    category: 'E-Scooty',
    subCategory: 'Standard Series',
    image: '/images/placeholder.jpg',
    price: 'Contact for Price',
    description: 'Experience the future of mobility with our premium electric scooter. Please contact us for detailed specifications and pricing.',
    features: [
      'Eco-Friendly Zero Emission',
      'Lithium-ion Battery',
      'Fast Charging Support',
      'LED Lighting System',
      'USB Charging Port',
      'Mobile Holder',
    ],
    colors: ['#000000', '#FF0000', '#FFFFFF'],
    specs: {
      'Top Speed': 'Contact Dealer',
      'Range': 'Contact Dealer',
      'Motor Power': 'Contact Dealer',
      'Battery': '48V/60V/72V Options',
      'Charging Time': '5-7 hours',
      'Brakes': 'Disc Brakes',
    }
  };

  const displayProduct = product || fallbackProduct;

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  if (!product) {
    return (
      <Box textAlign="center" py={20} bg={bgColor} minH="100vh">
        <Container maxW="600px">
          <Heading mb={4}>Product Not Found</Heading>
          <Text mb={8} color={textColor}>
            The product you're looking for is not available in our catalog.
            Please check out our other amazing electric scooters.
          </Text>
          <Button
            colorScheme="green"
            size="lg"
            onClick={() => navigate('/products')}
          >
            Browse All Products
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="1200px" px={6}>
        {/* Back Button */}
        <Button
          leftIcon={<ArrowBackIcon />}
          variant="ghost"
          mb={8}
          onClick={() => navigate('/products')}
          color="gray.600"
          _hover={{ color: 'orange.500' }}
        >
          Back to Products
        </Button>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12}>
          {/* Left - Image Section */}
          <Box flex={1}>
            <Box
              bg={cardBg}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="xl"
              p={8}
            >
              <Image
                src={displayProduct.image}
                alt={displayProduct.name}
                w="100%"
                h={{ base: "320px", md: "420px" }}
                objectFit="contain"
                fallbackSrc="https://via.placeholder.com/500x400?text=RMNA+E-Scooty"
              />
            </Box>

            {/* Color Options */}
            <Box mt={6}>
              <Text fontWeight="semibold" mb={3}>Available Colors</Text>
              <HStack spacing={4}>
                {displayProduct.colors.map((color, index) => (
                  <Box
                    key={index}
                    w="50px"
                    h="50px"
                    borderRadius="full"
                    bg={color}
                    border="3px solid white"
                    boxShadow="md"
                    cursor="pointer"
                    _hover={{ transform: 'scale(1.1)' }}
                    transition="0.2s"
                  />
                ))}
              </HStack>
            </Box>
          </Box>

          {/* Right - Details Section */}
          <Box flex={1}>
            <HStack spacing={3} mb={3}>
              <Badge colorScheme="orange" fontSize="sm" px={3} py={1} borderRadius="full">
                {displayProduct.category}
              </Badge>
              <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="full">
                {displayProduct.subCategory}
              </Badge>
            </HStack>

            <Heading size="2xl" mb={4}>{displayProduct.name}</Heading>
            
            {displayProduct.price !== 'Contact for Price' && (
              <Text fontSize="3xl" fontWeight="bold" color="green.600" mb={4}>
                {displayProduct.price}
              </Text>
            )}

            <Text fontSize="lg" color={textColor} lineHeight="1.8" mb={8}>
              {displayProduct.description}
            </Text>

            <Divider my={8} />

            {/* Key Features */}
            <Box mb={10}>
              <Heading size="md" mb={5} display="flex" alignItems="center" gap={2}>
                <FaBolt style={{ color: '#22c55e' }} />
                Key Features
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {displayProduct.features.map((feature, index) => (
                  <HStack key={index} spacing={3}>
                    <Box w="8px" h="8px" bg="green.500" borderRadius="full" />
                    <Text fontSize="md">{feature}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>

            {/* Specifications */}
            <Box mb={10}>
              <Heading size="md" mb={5} display="flex" alignItems="center" gap={2}>
                <FaTachometerAlt style={{ color: '#f97316' }} />
                Technical Specifications
              </Heading>
              <VStack align="start" spacing={3} w="full">
                {Object.entries(displayProduct.specs).map(([key, value]) => (
                  <Flex key={key} w="full" justify="space-between" py={2} borderBottom="1px solid" borderColor="gray.200">
                    <Text fontWeight="medium" color="gray.500">{key}</Text>
                    <Text fontWeight="semibold">{value}</Text>
                  </Flex>
                ))}
              </VStack>
            </Box>

            {/* Battery & Charging Info */}
            <Box mb={10} p={4} bg="orange.50" borderRadius="xl" border="1px solid" borderColor="orange.200">
              <Heading size="sm" mb={3} display="flex" alignItems="center" gap={2}>
                <FaBatteryFull style={{ color: '#f97316' }} />
                Battery Options Available
              </Heading>
              <Text fontSize="sm" color="gray.700">
                Lithium-ion Battery: 48V / 60V / 72V options available<br />
                Fast charging support • 2-3 years battery life • Lightweight design
              </Text>
            </Box>

            {/* Action Buttons */}
            <Flex gap={4} direction={{ base: 'column', sm: 'row' }}>
              <Button
                leftIcon={<FaWhatsapp />}
                size="lg"
                bg="#25D366"
                color="white"
                flex={1}
                py={7}
                fontSize="17px"
                _hover={{ bg: '#1eb355', transform: 'scale(1.02)' }}
                onClick={() => window.open(`https://wa.me/919695600185?text=I'm interested in ${displayProduct.name} from RMNA E-Mobility`, '_blank')}
              >
                WhatsApp Inquiry
              </Button>

              <Button
                leftIcon={<PhoneIcon />}
                size="lg"
                variant="outline"
                borderColor="green.500"
                color="green.600"
                flex={1}
                py={7}
                fontSize="17px"
                _hover={{ bg: 'green.50', transform: 'scale(1.02)' }}
                onClick={() => window.location.href = 'tel:+919695600185'}
              >
                Call Now
              </Button>
            </Flex>

            {/* Services Offered Badges */}
            <Flex gap={2} mt={6} flexWrap="wrap">
              <Badge colorScheme="green" variant="subtle" px={3} py={1}>Retail Supply</Badge>
              <Badge colorScheme="orange" variant="subtle" px={3} py={1}>Wholesale Supply</Badge>
              <Badge colorScheme="purple" variant="subtle" px={3} py={1}>Dealership Support</Badge>
              <Badge colorScheme="blue" variant="subtle" px={3} py={1}>After-Sales Service</Badge>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProductDetail;