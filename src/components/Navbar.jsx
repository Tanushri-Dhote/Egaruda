import React from 'react';
import {
  Flex,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
  VStack,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Image,
  Collapse,
  useDisclosure,      
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
  const { isOpen, onToggle, onClose } = useDisclosure();   // Now properly destructured
  const navigate = useNavigate();
  const location = useLocation();

  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const hoverBg = useColorModeValue('orange.50', 'gray.800');
  const accentColor = '#f97316';

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    onClose();
  };

  const handleLogoClick = () => {
    location.pathname === '/' 
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : navigate('/');
    onClose();
  };

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
    onClose();
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+919695600185';
  };

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      bg={bg}
      borderBottom="1px solid"
      borderColor={borderColor}
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
    >
      <Flex
        px={{ base: 4, md: 8, lg: 12 }}
        py={{ base: 2, md: 3 }}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Flex
          align="center"
          gap={3}
          cursor="pointer"
          onClick={handleLogoClick}
          _hover={{ transform: 'scale(1.03)' }}
          transition="all 0.2s"
        >
          <Image
            src="/images/RMNA-without-bg.png"
            alt="RMNA Logo"
            h={{ base: "70px", md: "110px" }}
            objectFit="contain"
          />
         
        </Flex>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: "none", lg: "flex" }}>
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Gallery", path: "/gallery" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              fontWeight={location.pathname === item.path ? "semibold" : "medium"}
              color={location.pathname === item.path ? accentColor : textColor}
              _hover={{ color: accentColor, bg: hoverBg }}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </Button>
          ))}

          {/* Products Dropdown */}
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
              _hover={{ color: accentColor, bg: hoverBg }}
            >
              E-Scooty Models
            </MenuButton>
            <MenuList bg={bg} borderColor="orange.200" boxShadow="xl" borderRadius="xl" p={2}>
              {products.map((product) => (
                <MenuItem
                  key={product.id}
                  onClick={() => handleProductClick(product.slug)}
                  borderRadius="lg"
                  bg="transparent"
                  _hover={{ bg: hoverBg, color: accentColor }}
                  py={3}
                >
                  <Box>
                    <Text fontWeight="semibold">{product.name}</Text>
                    <Text fontSize="sm" color="gray.500">{product.category}</Text>
                  </Box>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>

        {/* Desktop Right Side */}
        <HStack spacing={4} display={{ base: "none", lg: "flex" }}>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            _hover={{ bg: hoverBg, color: accentColor }}
          />

          <Button
            leftIcon={<PhoneIcon />}
            bg="orange.500"
            color="white"
            _hover={{
              bg: "orange.600",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={handleCallNow}
            px={6}
            borderRadius="full"
            fontWeight="semibold"
          >
            Call Now
          </Button>
        </HStack>

        {/* Mobile Hamburger + Theme Toggle */}
        <HStack display={{ base: "flex", lg: "none" }}>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
          <IconButton
            aria-label="Open menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            fontSize="26px"
          />
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg={bg}
          py={6}
          px={6}
          spacing={4}
          display={{ lg: "none" }}
          borderTop="1px solid"
          borderColor={borderColor}
          align="stretch"
        >
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Gallery", path: "/gallery" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              justifyContent="flex-start"
              fontSize="lg"
              py={6}
              onClick={() => handleNavigation(item.path)}
              color={location.pathname === item.path ? accentColor : textColor}
              bg={location.pathname === item.path ? hoverBg : "transparent"}
            >
              {item.label}
            </Button>
          ))}

          <Divider my={2} />

          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              justifyContent="space-between"
              w="full"
              rightIcon={<ChevronDownIcon />}
              py={6}
              fontSize="lg"
            >
              E-Scooty Models
            </MenuButton>
            <MenuList w="full">
              {products.map((p) => (
                <MenuItem
                  key={p.id}
                  py={4}
                  fontSize="md"
                  bg="transparent"
                  _hover={{ bg: hoverBg, color: accentColor }}
                  onClick={() => handleProductClick(p.slug)}
                >
                  {p.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Button
            leftIcon={<PhoneIcon />}
            bg="orange.500"
            color="white"
            mt={6}
            py={7}
            fontSize="lg"
            borderRadius="full"
            onClick={handleCallNow}
          >
            Call Now • +91 96956 00185
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;