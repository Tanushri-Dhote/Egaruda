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
} from "@chakra-ui/react";

import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";

import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const navigate = useNavigate();
  const location = useLocation();

  const bg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "white");

  // Smart scroll handler (works across pages)
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { sectionId: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClose();
  };

  // Handle logo click - always go to home page
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      // If already on home page, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <Box position="sticky" top="0" zIndex="1000">
      {/* Navbar */}
      <Flex
        px={{ base: 4, md: 8 }}
        py={3}
        justify="space-between"
        align="center"
        bg={bg}
        color={textColor}
        shadow="sm"
      >
        {/*  Logo - Clickable */}
        <Flex
          align="center"
          gap={2}
          onClick={handleLogoClick}
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          transition="opacity 0.2s"
        >
          <Avatar
            size="md"
            src="/images/logo.jpeg"
            name="Delbaram Logo"
            border="2px solid pink"
            boxSize="80px"
            ml={{ base: 0, md: 6 }}
            boxShadow="lg"
          />
        </Flex>

        {/* Desktop Menu */}
        <Flex gap={4} align="center" display={{ base: "none", md: "flex" }}>
          <Button variant="ghost" onClick={() => scrollToSection("home")}>
            Home
          </Button>

          <Button variant="ghost" onClick={() => scrollToSection("features")}>
            Features
          </Button>

          {/* Theme Toggle */}
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>

        {/* Mobile Right Side */}
        <Flex align="center" gap={2} display={{ base: "flex", md: "none" }}>
          {/* Theme Toggle */}
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />

          {/* ☰ Hamburger */}
          <IconButton
            aria-label="Toggle menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            size="lg"
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <VStack
          bg={bg}
          spacing={4}
          py={4}
          shadow="md"
          display={{ base: "flex", md: "none" }}
        >
          <Button
            variant="ghost"
            w="full"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Button>

          <Button
            variant="ghost"
            w="full"
            onClick={() => scrollToSection("features")}
          >
            Features
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;