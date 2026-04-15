import React from 'react';
import {
  Flex,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Avatar,
  Box,
  VStack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  HStack,
  Show,
  Hide,
  Collapse,
  Image,
  Divider,  // ← Added Divider here
} from '@chakra-ui/react';

import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  PhoneIcon,
} from '@chakra-ui/icons';

import { useNavigate, useLocation } from 'react-router-dom';

// Product list based on RMNA E-Mobility PDF
const products = [
  { id: 1, name: "Double Light", slug: "double-light", category: "E-Scooty" },
  { id: 2, name: "Legendre LD", slug: "legendre-ld", category: "E-Scooty" },
  { id: 3, name: "Mini Activa (CS)", slug: "mini-activa-cs", category: "E-Scooty" },
  { id: 4, name: "Big Daddy - CS3", slug: "big-daddy-cs3", category: "E-Scooty" },
  { id: 5, name: "THAR - E4", slug: "thar-e4", category: "E-Scooty" },
  { id: 6, name: "BMW", slug: "bmw", category: "E-Scooty" },
  { id: 7, name: "Momentum Q7", slug: "momentum-q7", category: "E-Scooty" },
];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  // Dynamic colors based on theme
  const bg = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');
  const hoverBg = useColorModeValue('green.50', 'gray.800');
  const buttonGradient = 'linear(to-r, #f97316, #fb923c, #22c55e, #15803d)';

  // Navigation handlers
  const handleNavigation = (path, sectionId = null) => {
    if (location.pathname !== path) {
      navigate(path, { state: { sectionId } });
    } else if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  // Handle logo click
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClose();
  };

  // Handle product click - Goes to dynamic product page
  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
    onClose();
  };

  // Call now handler - Updated with RMNA phone numbers
  const handleCallNow = () => {
    window.location.href = 'tel:+919695600185';
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      transition="all 0.3s ease"
      boxShadow={useColorModeValue('sm', 'dark-lg')}
    >
      <Flex
        px={{ base: 4, md: 6, lg: 8 }}
        py={{ base: 2, md: 3 }}
        justify="space-between"
        align="center"
        bg={bg}
        color={textColor}
        transition="all 0.2s"
      >
        {/* Logo Section - Left Side */}
        <Flex
          align="center"
          gap={2}
          onClick={handleLogoClick}
          cursor="pointer"
          _hover={{ transform: 'scale(1.02)' }}
          transition="transform 0.2s ease"
        >
          <Image
            src="/images/RMNA-without-bg.png"
            alt="RMNA Logo"
            boxSize={{ base: '50px', md: '70px', lg: '80px' }}
            objectFit="contain"
            bg="transparent"
          />
       
        </Flex>

        {/* Desktop Navigation - Centered */}
        <Show above="md">
          <HStack
            spacing={{ md: 4, lg: 6 }}
            align="center"
            justify="center"
            flex="1"
          >
            {/* Home */}
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/')}
              color={textColor}
              fontWeight="medium"
              fontSize="md"
              position="relative"
              isActive={location.pathname === '/'}
              _hover={{
                color: 'orange.500',
                bg: hoverBg,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s ease"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%) scaleX(0)',
                  width: '80%',
                  height: '2px',
                  bgGradient: buttonGradient,
                  transition: 'transform 0.2s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
                ...(location.pathname === '/' && {
                  '&::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }),
              }}
            >
              Home
            </Button>

            {/* About */}
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/about')}
              color={textColor}
              fontWeight="medium"
              fontSize="md"
              position="relative"
              isActive={location.pathname === '/about'}
              _hover={{
                color: 'orange.500',
                bg: hoverBg,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s ease"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%) scaleX(0)',
                  width: '80%',
                  height: '2px',
                  bgGradient: buttonGradient,
                  transition: 'transform 0.2s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
                ...(location.pathname === '/about' && {
                  '&::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }),
              }}
            >
              About
            </Button>

            {/* Product Dropdown - Updated with RMNA products */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
                color={textColor}
                fontWeight="medium"
                position="relative"
                _hover={{
                  color: 'orange.500',
                  bg: hoverBg,
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s ease"
                sx={{
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%) scaleX(0)',
                    width: '80%',
                    height: '2px',
                    bgGradient: buttonGradient,
                    transition: 'transform 0.2s ease',
                  },
                  '&:hover::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }}
              >
                E-Scooty Models
              </MenuButton>
              <MenuList
                maxH="400px"
                overflowY="auto"
                bg={bg}
                borderColor="orange.400"
                boxShadow="xl"
                zIndex="popover"
              >
                {products.map((product) => (
                  <MenuItem
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    _hover={{
                      bg: hoverBg,
                      color: 'orange.500',
                      pl: 6,
                    }}
                    transition="all 0.2s ease"
                  >
                    <Flex direction="column">
                      <Text fontWeight="medium">{product.name}</Text>
                      <Text fontSize="xs" color="orange.400">
                        {product.category}
                      </Text>
                    </Flex>
                  </MenuItem>
                ))}
                {/* <Divider my={2} borderColor="orange.200" />
                <MenuItem
                  onClick={() => handleNavigation('/batteries')}
                  _hover={{ bg: hoverBg, color: 'orange.500' }}
                >
                  <Flex direction="column">
                    <Text fontWeight="medium">🔋 Batteries</Text>
                    <Text fontSize="xs" color="orange.400">Lithium-ion • 48V/60V/72V</Text>
                  </Flex>
                </MenuItem>
                <MenuItem
                  onClick={() => handleNavigation('/chargers')}
                  _hover={{ bg: hoverBg, color: 'orange.500' }}
                >
                  <Flex direction="column">
                    <Text fontWeight="medium">⚡ Chargers</Text>
                    <Text fontSize="xs" color="orange.400">Standard • Fast Charger</Text>
                  </Flex>
                </MenuItem>
                <MenuItem
                  onClick={() => handleNavigation('/spare-parts')}
                  _hover={{ bg: hoverBg, color: 'orange.500' }}
                >
                  <Flex direction="column">
                    <Text fontWeight="medium">🔧 Spare Parts & Accessories</Text>
                    <Text fontSize="xs" color="orange.400">Electrical • Mechanical • Accessories</Text>
                  </Flex>
                </MenuItem> */}
              </MenuList>
            </Menu>

            {/* Services */}
            {/* <Button
              variant="ghost"
              onClick={() => handleNavigation('/services')}
              color={textColor}
              fontWeight="medium"
              fontSize="md"
              position="relative"
              isActive={location.pathname === '/services'}
              _hover={{
                color: 'orange.500',
                bg: hoverBg,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s ease"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%) scaleX(0)',
                  width: '80%',
                  height: '2px',
                  bgGradient: buttonGradient,
                  transition: 'transform 0.2s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
                ...(location.pathname === '/services' && {
                  '&::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }),
              }}
            >
              Services
            </Button> */}

            {/* Gallery */}
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/gallery')}
              color={textColor}
              fontWeight="medium"
              fontSize="md"
              position="relative"
              isActive={location.pathname === '/gallery'}
              _hover={{
                color: 'orange.500',
                bg: hoverBg,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s ease"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%) scaleX(0)',
                  width: '80%',
                  height: '2px',
                  bgGradient: buttonGradient,
                  transition: 'transform 0.2s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
                ...(location.pathname === '/gallery' && {
                  '&::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }),
              }}
            >
              Gallery
            </Button>

            {/* Contact */}
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/contact')}
              color={textColor}
              fontWeight="medium"
              fontSize="md"
              position="relative"
              isActive={location.pathname === '/contact'}
              _hover={{
                color: 'orange.500',
                bg: hoverBg,
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s ease"
              sx={{
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%) scaleX(0)',
                  width: '80%',
                  height: '2px',
                  bgGradient: buttonGradient,
                  transition: 'transform 0.2s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(-50%) scaleX(1)',
                },
                ...(location.pathname === '/contact' && {
                  '&::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }),
              }}
            >
              Contact
            </Button>
          </HStack>
        </Show>

        {/* Desktop Right Side */}
        <Show above="md">
          <HStack spacing={3} align="center">
            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{
                transform: 'rotate(15deg) scale(1.1)',
                bg: hoverBg,
                color: 'orange.500',
              }}
              transition="all 0.2s ease"
            />
            <Button
              leftIcon={<PhoneIcon />}
              bgGradient={buttonGradient}
              color="white"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'lg',
                opacity: 0.95,
              }}
              _active={{ transform: 'scale(0.98)' }}
              transition="all 0.2s ease"
              onClick={handleCallNow}
              size="md"
              fontWeight="semibold"
            >
              Call Now
            </Button>
          </HStack>
        </Show>

        {/* Mobile Right Side */}
        <Hide above="md">
          <HStack spacing={2} align="center">
            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{ transform: 'rotate(15deg) scale(1.1)', color: 'orange.500' }}
              transition="all 0.2s ease"
            />
            <IconButton
              aria-label="Toggle menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={onToggle}
              variant="ghost"
              size="lg"
              _hover={{ transform: 'scale(1.05)', color: 'orange.500' }}
              transition="all 0.2s ease"
            />
          </HStack>
        </Hide>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg={bg}
          spacing={3}
          py={5}
          px={4}
          shadow="lg"
          borderBottomRadius="xl"
          display={{ base: 'flex', md: 'none' }}
        >
          <Button
            variant="ghost"
            w="full"
            onClick={() => handleNavigation('/')}
            color={textColor}
            justifyContent="flex-start"
            isActive={location.pathname === '/'}
            _hover={{ color: 'orange.500', bg: hoverBg, pl: 6 }}
            transition="all 0.2s ease"
          >
            Home
          </Button>

          <Button
            variant="ghost"
            w="full"
            onClick={() => handleNavigation('/about')}
            color={textColor}
            justifyContent="flex-start"
            isActive={location.pathname === '/about'}
            _hover={{ color: 'orange.500', bg: hoverBg, pl: 6 }}
            transition="all 0.2s ease"
          >
            About
          </Button>

          {/* Mobile Product Dropdown - Updated with RMNA products */}
          <Menu>
            <MenuButton
              as={Button}
              w="full"
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
              color={textColor}
              justifyContent="space-between"
              _hover={{ color: 'orange.500', bg: hoverBg }}
              transition="all 0.2s ease"
            >
              E-Scooty Models
            </MenuButton>
            <MenuList maxH="300px" overflowY="auto" bg={bg} borderColor="orange.400">
              {products.map((product) => (
                <MenuItem
                  key={product.id}
                  onClick={() => handleProductClick(product.slug)}
                  _hover={{ bg: hoverBg, color: 'orange.500' }}
                >
                  <Flex direction="column">
                    <Text fontWeight="medium">{product.name}</Text>
                    <Text fontSize="xs" color="orange.400">
                      {product.category}
                    </Text>
                  </Flex>
                </MenuItem>
              ))}
              <Divider my={2} borderColor="orange.200" />
              <MenuItem
                onClick={() => handleNavigation('/batteries')}
                _hover={{ bg: hoverBg, color: 'orange.500' }}
              >
                <Text fontWeight="medium">🔋 Batteries</Text>
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigation('/chargers')}
                _hover={{ bg: hoverBg, color: 'orange.500' }}
              >
                <Text fontWeight="medium">⚡ Chargers</Text>
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigation('/spare-parts')}
                _hover={{ bg: hoverBg, color: 'orange.500' }}
              >
                <Text fontWeight="medium">🔧 Spare Parts & Accessories</Text>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* <Button
            variant="ghost"
            w="full"
            onClick={() => handleNavigation('/services')}
            color={textColor}
            justifyContent="flex-start"
            isActive={location.pathname === '/services'}
            _hover={{ color: 'orange.500', bg: hoverBg, pl: 6 }}
            transition="all 0.2s ease"
          >
            Services
          </Button> */}

          <Button
            variant="ghost"
            w="full"
            onClick={() => handleNavigation('/gallery')}
            color={textColor}
            justifyContent="flex-start"
            isActive={location.pathname === '/gallery'}
            _hover={{ color: 'orange.500', bg: hoverBg, pl: 6 }}
            transition="all 0.2s ease"
          >
            Gallery
          </Button>

          <Button
            variant="ghost"
            w="full"
            onClick={() => handleNavigation('/contact')}
            color={textColor}
            justifyContent="flex-start"
            isActive={location.pathname === '/contact'}
            _hover={{ color: 'orange.500', bg: hoverBg, pl: 6 }}
            transition="all 0.2s ease"
          >
            Contact
          </Button>

          <Button
            leftIcon={<PhoneIcon />}
            bgGradient={buttonGradient}
            color="white"
            w="full"
            mt={2}
            _hover={{ transform: 'scale(1.02)', boxShadow: 'lg' }}
            _active={{ transform: 'scale(0.98)' }}
            transition="all 0.2s ease"
            onClick={handleCallNow}
          >
            Call Now
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;