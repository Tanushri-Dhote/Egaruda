import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Heading,
    Text,
    Flex,
    VStack,
    HStack,
    Icon,
    useColorModeValue,
    SimpleGrid,
    Container,
    Badge,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    ScaleFade,
    SlideFade,
    Fade,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import {
    FaBolt,
    FaSearch,
    FaHeart,
    FaCamera,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaStar,
    FaClock,
    FaUserFriends,
    FaMotorcycle,
    FaChevronLeft,
    FaChevronRight,
} from 'react-icons/fa';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredId, setHoveredId] = useState(null);
    const scrollContainerRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const textColor = useColorModeValue('gray.600', 'gray.300');
    const headingColor = useColorModeValue('gray.800', 'white');
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const accentColor = useColorModeValue('green.500', 'green.400');
    const gradientBg = 'linear(135deg, #48bb78 0%, #ecc94b 50%, #ed8936 100%)';
    const gradientBgHover = 'linear(135deg, #38a169 0%, #d69e2e 50%, #dd6b20 100%)';

    // Updated Gallery with EXACT image paths from your screenshot (public/images/ folder)
    const galleryImages = [
        // E-Scooty Models
        {
            id: 1,
            title: 'Big Daddy- CS3',
            category: 'scooty',
            displayName: 'Big Daddy CS3',
            image: '/images/Big Daddy- CS3.jpeg',
            description: 'RMNA Big Daddy CS3 – Powerful series with strong presence',
            date: '2025-04-15',
            likes: 321,
            views: 1987,
            featured: true,
            size: 'wide',
            gridSpan: { base: 1, md: 2 },
            height: '350px',
        },
        {
            id: 2,
            title: 'BMW',
            category: 'scooty',
            displayName: 'BMW',
            image: '/images/BMW.jpeg',
            description: 'RMNA BMW Series – Luxury black E-Scooty with iconic grille styling',
            date: '2025-04-15',
            likes: 543,
            views: 3210,
            featured: true,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 3,
            title: 'Double Light',
            category: 'scooty',
            displayName: 'Double Light',
            image: '/images/Double Light.jpeg',
            description: 'RMNA Double Light – Premium dual-headlight E-Scooty',
            date: '2025-04-15',
            likes: 245,
            views: 1234,
            featured: true,
            size: 'tall',
            gridSpan: { base: 1, md: 1 },
            height: '500px',
        },
        {
            id: 4,
            title: 'Legender- LD',
            category: 'scooty',
            displayName: 'Legender LD',
            image: '/images/Legender- LD.jpeg',
            description: 'RMNA Legender LD – Bold sporty E-Scooty with premium finish',
            date: '2025-04-15',
            likes: 189,
            views: 987,
            featured: false,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 5,
            title: 'Luxury- CS2',
            category: 'scooty',
            displayName: 'Luxury CS2',
            image: 'images/Luxury- CS2.jpeg',
            description: 'RMNA LUXURY CS2 – Pure white luxury E-Scooty with chrome accents',
            date: '2025-04-15',
            likes: 654,
            views: 4321,
            featured: true,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 6,
            title: 'Mini Activa (CS)',
            category: 'scooty',
            displayName: 'Mini Activa (CS)',
            image: 'images/Mini Activa (CS).jpeg',
            description: 'RMNA Mini Activa CS – Compact and elegant urban E-Scooty',
            date: '2025-04-15',
            likes: 432,
            views: 2345,
            featured: false,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 7,
            title: 'Momentum- Q7',
            category: 'scooty',
            displayName: 'Momentum Q7',
            image: '/images/Momentum- Q7.jpeg',
            description: 'RMNA Momentum Q7 – Clean white premium E-Scooty design',
            date: '2025-04-15',
            likes: 432,
            views: 2345,
            featured: false,
            size: 'tall',
            gridSpan: { base: 1, md: 1 },
            height: '500px',
        },
        {
            id: 8,
            title: 'OLA Pro',
            category: 'scooty',
            displayName: 'OLA Pro',
            image: '/images/OLA Pro.jpeg',
            description: 'RMNA OLA Pro – Modern black E-Scooty with striking rear design',
            date: '2025-04-15',
            likes: 567,
            views: 3456,
            featured: true,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 9,
            title: 'Rider - FH',
            category: 'scooty',
            displayName: 'RIDER FH',
            image: '/images/Rider - FH.jpeg',
            description: 'RMNA RIDER FH – Silver sporty E-Scooty with sharp headlight',
            date: '2025-04-15',
            likes: 321,
            views: 1987,
            featured: false,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 10,
            title: 'Single Light',
            category: 'scooty',
            displayName: 'Single Light',
            image: '/images/Single Light.jpeg',
            description: 'RMNA Single Light – Classic red E-Scooty with clean styling',
            date: '2025-04-15',
            likes: 765,
            views: 5432,
            featured: false,
            size: 'tall',
            gridSpan: { base: 1, md: 1 },
            height: '500px',
        },
        {
            id: 11,
            title: 'THAR- E4',
            category: 'scooty',
            displayName: 'THAR E4',
            image: '/images/THAR- E4.jpeg',
            description: 'RMNA THAR E4 – Adventurous white E-Scooty with premium styling',
            date: '2025-04-15',
            likes: 678,
            views: 4567,
            featured: true,
            size: 'tall',
            gridSpan: { base: 1, md: 1 },
            height: '500px',
        },

        // Batteries
        {
            id: 12,
            title: 'Chilwee Batteries',
            category: 'battery',
            displayName: 'Chilwee Batteries',
            image: '/images/Chilwee Battaries.jpeg',
            description: 'Chilwee Lithium-ion Battery – High-tech, super long cycle life',
            date: '2025-04-15',
            likes: 312,
            views: 1876,
            featured: false,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 13,
            title: 'Lithium Battery',
            category: 'battery',
            displayName: 'Lithium Battery',
            image: '/images/Lithium Battary.jpeg',
            description: '48V / 60V / 72V Lithium-ion Battery – Long life, fast charging, lightweight',
            date: '2025-04-15',
            likes: 289,
            views: 1654,
            featured: true,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 14,
            title: 'Rays Batteries',
            category: 'battery',
            displayName: 'Rays Batteries',
            image: '/images/Rays Battaries.jpg',
            description: 'Rays Graphene Technology Lead-Acid Batteries – High performance',
            date: '2025-04-15',
            likes: 198,
            views: 1345,
            featured: false,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 15,
            title: 'Lead acid - Max Volt',
            category: 'battery',
            displayName: 'Lead Acid Max Volt',
            image: 'images/Lead acid - Max Volt.jpg',
            description: 'Max Volt Lead-Acid Battery – Budget-friendly, reliable 48V/60V',
            date: '2025-04-15',
            likes: 156,
            views: 987,
            featured: false,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },

        // Chargers
        {
            id: 16,
            title: 'Chargers',
            category: 'charger',
            displayName: 'Standard Charger',
            image: '/images/Chargers.jpeg',
            description: 'Standard Charger – Compatible with 48V & 60V, 5-7 hours charging',
            date: '2025-04-15',
            likes: 234,
            views: 1456,
            featured: false,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
        {
            id: 17,
            title: 'Digital Charger- 4 Amp (60v & 70v)',
            category: 'charger',
            displayName: 'Digital Charger 4 Amp',
            image: '/images/Digital Charger- 4 Amp (60v & 70v).jpeg',
            description: 'Digital Fast Charger 4 Amp – 60V & 70V, advanced safety protection',
            date: '2025-04-15',
            likes: 267,
            views: 1765,
            featured: true,
            size: 'square',
            gridSpan: { base: 1, md: 1 },
            height: '400px',
        },
    ];

    const categories = [
        { id: 'all', name: 'All Products', icon: FaMotorcycle },
        { id: 'scooty', name: 'E-Scooty Models', icon: FaBolt },
        { id: 'battery', name: 'Batteries', icon: FaBolt },
        { id: 'charger', name: 'Chargers', icon: FaBolt },
    ];

    const filteredImages = galleryImages.filter((image) => {
        const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
        const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            image.displayName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleImageClick = (image) => {
        setSelectedImage(image);
        onOpen();
    };

    const featuredImages = galleryImages.filter(img => img.featured);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')} overflow="hidden">
            {/* Hero Section */}
            <Box
                position="relative"
                h={{ base: '400px', md: '500px' }}
                bgGradient="linear(to-r, green.600, yellow.600, orange.600)"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgImage="images/rmna-hero.webp"
                    bgSize="cover"
                    bgPosition="center"
                    opacity={0.3}
                    transform="scale(1.05)"
                />
                <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="blackAlpha.600" />

                <Container maxW="1200px" h="100%" position="relative" zIndex={1}>
                    <Flex direction="column" justify="center" align="center" h="100%" textAlign="center">
                        <SlideFade in={true} offsetY="20px">
                            <Badge bg="whiteAlpha.300" color="white" fontSize="md" px={4} py={2} borderRadius="full" mb={4}>
                                <HStack spacing={2}>
                                    <Icon as={FaCamera} />
                                    <Text>RMNA E-Mobility Catalogue</Text>
                                </HStack>
                            </Badge>
                        </SlideFade>

                        <SlideFade in={true} offsetY="30px" delay={0.1}>
                            <Heading as="h1" fontSize={{ base: '36px', md: '56px', lg: '64px' }} fontWeight="extrabold" color="white" letterSpacing="tight" mb={4}>
                                Explore Our{' '}
                                <Box as="span" bgGradient={gradientBg} bgClip="text" display="inline-block">
                                    RMNA Products
                                </Box>
                            </Heading>
                        </SlideFade>

                        <Fade in={true} delay={0.2}>
                            <Text fontSize={{ base: '16px', md: '18px' }} color="whiteAlpha.900" maxW="600px">
                                E-Scooty Models • Batteries • Chargers • Reliable &amp; Eco-Friendly Solutions
                            </Text>
                        </Fade>
                    </Flex>
                </Container>
            </Box>

            <Container maxW="1200px" py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }}>
                {/* Search */}
                <ScaleFade in={true} initialScale={0.9}>
                    <Flex justify="center" mb={8}>
                        <InputGroup maxW="500px">
                            <InputLeftElement>
                                <Icon as={FaSearch} color={accentColor} />
                            </InputLeftElement>
                            <Input
                                placeholder="Search models, batteries, chargers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                bg={cardBg}
                                border="2px solid"
                                borderColor={borderColor}
                                _focus={{ borderColor: accentColor, boxShadow: `0 0 0 2px ${accentColor}` }}
                                borderRadius="full"
                                size="lg"
                            />
                        </InputGroup>
                    </Flex>
                </ScaleFade>

                {/* Category Filter */}
                <Box position="relative" mb={12}>
                    <IconButton
                        icon={<FaChevronLeft />}
                        position="absolute"
                        left={-4}
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={2}
                        borderRadius="full"
                        bg={cardBg}
                        boxShadow="lg"
                        _hover={{ bgGradient: gradientBg, color: 'white' }}
                        onClick={scrollLeft}
                        size="sm"
                        aria-label="Scroll left"
                    />

                    <Box
                        ref={scrollContainerRef}
                        overflowX="auto"
                        css={{
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        py={4}
                        px={2}
                    >
                        <HStack spacing={3} minW="max-content">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    size={{ base: 'sm', md: 'md' }}
                                    borderRadius="full"
                                    variant={selectedCategory === category.id ? 'solid' : 'outline'}
                                    bgGradient={selectedCategory === category.id ? gradientBg : 'none'}
                                    color={selectedCategory === category.id ? 'white' : textColor}
                                    borderColor={accentColor}
                                    onClick={() => setSelectedCategory(category.id)}
                                    _hover={{
                                        transform: 'translateY(-2px)',
                                        bgGradient: selectedCategory === category.id ? gradientBgHover : gradientBg,
                                        color: 'white',
                                    }}
                                    transition="all 0.3s ease"
                                    leftIcon={<Icon as={category.icon} />}
                                    whiteSpace="nowrap"
                                    px={6}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </HStack>
                    </Box>

                    <IconButton
                        icon={<FaChevronRight />}
                        position="absolute"
                        right={-4}
                        top="50%"
                        transform="translateY(-50%)"
                        zIndex={2}
                        borderRadius="full"
                        bg={cardBg}
                        boxShadow="lg"
                        _hover={{ bgGradient: gradientBg, color: 'white' }}
                        onClick={scrollRight}
                        size="sm"
                        aria-label="Scroll right"
                    />
                </Box>

                {/* Featured */}
                {selectedCategory === 'all' && searchTerm === '' && featuredImages.length > 0 && (
                    <Box mb={16}>
                        <HStack justify="space-between" mb={6}>
                            <Heading fontSize="24px" fontWeight="bold" color={headingColor}>
                                Featured Products
                            </Heading>
                        </HStack>
                        <Grid
                            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                            gap={6}
                            autoRows="minmax(100px, auto)"
                        >
                            {featuredImages.slice(0, 4).map((image, idx) => (
                                <GridItem
                                    key={image.id}
                                    colSpan={image.gridSpan}
                                    rowSpan={1}
                                >
                                    <ScaleFade in={true} initialScale={0.9} delay={idx * 0.1}>
                                        <Box
                                            position="relative"
                                            borderRadius="2xl"
                                            overflow="hidden"
                                            cursor="pointer"
                                            onClick={() => handleImageClick(image)}
                                            onMouseEnter={() => setHoveredId(image.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                            h={image.height}
                                        >
                                            <Image
                                                src={image.image}
                                                alt={image.title}
                                                w="100%"
                                                h="100%"
                                                objectFit="cover"
                                                transition="transform 0.5s ease"
                                                transform={hoveredId === image.id ? 'scale(1.1)' : 'scale(1)'}
                                            />
                                            <Box
                                                position="absolute"
                                                bottom={0}
                                                left={0}
                                                right={0}
                                                bgGradient="linear(to-t, blackAlpha.800, transparent)"
                                                p={6}
                                                transform={hoveredId === image.id ? 'translateY(0)' : 'translateY(20px)'}
                                                transition="transform 0.3s ease"
                                            >
                                                <Badge bgGradient={gradientBg} color="white" mb={2}>
                                                    {image.displayName}
                                                </Badge>
                                                <Heading fontSize="20px" color="white" mb={2}>
                                                    {image.title}
                                                </Heading>
                                            </Box>
                                        </Box>
                                    </ScaleFade>
                                </GridItem>
                            ))}
                        </Grid>
                    </Box>
                )}

                {/* Main Gallery Grid */}
                {filteredImages.length === 0 ? (
                    <Flex justify="center" align="center" direction="column" py={20}>
                        <Icon as={FaCamera} boxSize={16} color={textColor} opacity={0.3} />
                        <Heading fontSize="24px" color={textColor} mt={4}>No products found</Heading>
                        <Text color={textColor} mt={2}>Try adjusting your search or filter</Text>
                        <Button mt={6} onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }} bgGradient={gradientBg} color="white" _hover={{ transform: 'scale(1.05)' }}>
                            Clear Filters
                        </Button>
                    </Flex>
                ) : (
                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap={6}
                        autoRows="minmax(100px, auto)"
                    >
                        {filteredImages.map((image, idx) => (
                            <GridItem
                                key={image.id}
                                colSpan={image.gridSpan}
                                rowSpan={1}
                            >
                                <ScaleFade in={true} initialScale={0.8} delay={idx * 0.05}>
                                    <Box
                                        onClick={() => handleImageClick(image)}
                                        cursor="pointer"
                                        position="relative"
                                        borderRadius="2xl"
                                        overflow="hidden"
                                        bg={cardBg}
                                        boxShadow="lg"
                                        transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                                        _hover={{
                                            transform: 'translateY(-8px)',
                                            boxShadow: '2xl',
                                        }}
                                    >
                                        <Box position="relative" overflow="hidden" h={image.height || '400px'}>
                                            <Image
                                                src={image.image}
                                                alt={image.title}
                                                w="100%"
                                                h="100%"
                                                objectFit="cover"
                                                transition="transform 0.5s ease"
                                                _hover={{ transform: 'scale(1.1)' }}
                                            />

                                            <Box
                                                position="absolute"
                                                top={0}
                                                left={0}
                                                right={0}
                                                bottom={0}
                                                bg="blackAlpha.600"
                                                opacity={0}
                                                transition="opacity 0.3s ease"
                                                _hover={{ opacity: 1 }}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Icon as={FaSearch} boxSize={10} color="white" />
                                            </Box>

                                            <Badge
                                                position="absolute"
                                                top={4}
                                                left={4}
                                                bgGradient={gradientBg}
                                                color="white"
                                                px={3}
                                                py={1}
                                                borderRadius="full"
                                                fontSize="xs"
                                            >
                                                {image.displayName}
                                            </Badge>
                                        </Box>

                                        <Box p={4}>
                                            <Heading as="h3" fontSize="md" fontWeight="bold" color={headingColor} mb={2} noOfLines={1}>
                                                {image.title}
                                            </Heading>
                                            <Text fontSize="sm" color={textColor} noOfLines={2}>
                                                {image.description}
                                            </Text>
                                            <Text fontSize="xs" color={accentColor} mt={2}>
                                                📅 {image.date}
                                            </Text>
                                        </Box>
                                    </Box>
                                </ScaleFade>
                            </GridItem>
                        ))}
                    </Grid>
                )}
            </Container>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered motionPreset="scale">
                <ModalOverlay bg="blackAlpha.900" backdropFilter="blur(10px)" />
                <ModalContent bg="transparent" boxShadow="none" mx={4}>
                    <ModalCloseButton color="white" size="lg" zIndex={1} />
                    <ModalBody p={0}>
                        {selectedImage && (
                            <ScaleFade in={true} initialScale={0.9}>
                                <Box borderRadius="2xl" overflow="hidden" bg={cardBg}>
                                    <Image
                                        src={selectedImage.image}
                                        alt={selectedImage.title}
                                        w="100%"
                                        h={{ base: '300px', md: '500px' }}
                                        objectFit="cover"
                                    />
                                    <Box p={6}>
                                        <Badge bgGradient={gradientBg} color="white" mb={3}>
                                            {selectedImage.displayName}
                                        </Badge>
                                        <Heading as="h3" fontSize="24px" fontWeight="bold" color={headingColor} mb={3}>
                                            {selectedImage.title}
                                        </Heading>
                                        <Text fontSize="md" color={textColor} mb={4}>
                                            {selectedImage.description}
                                        </Text>
                                    </Box>
                                </Box>
                            </ScaleFade>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Gallery;