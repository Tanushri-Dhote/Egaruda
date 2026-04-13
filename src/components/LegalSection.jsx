import { Box, Heading, Text, Flex, useColorModeValue, Tabs, TabList, TabPanels, Tab, TabPanel, VStack } from '@chakra-ui/react';
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConnectedStepItem = ({ number, title, description, isLast = false, index = 0 }) => {
    const bg = useColorModeValue('white', 'gray.800');
    const border = useColorModeValue('gray.200', 'gray.700');
    const lineColor = useColorModeValue('pink.300', 'gray.500');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const headingColor = useColorModeValue('pink.600', 'pink.300');
    const circleBg = useColorModeValue('pink.100', 'gray.700');
    const circleColor = useColorModeValue('pink.600', 'gray.300');
    const circleBorder = useColorModeValue('pink.300', 'gray.500');

    return (
        <Flex
            position="relative"
            width="100%"
            animation={`fadeInUp 0.5s ease-out ${index * 0.15}s both`}
            mb={6}
            sx={{
                '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                }
            }}
        >
            {/* Left section with circle and connecting line */}
            <Flex direction="column" align="center" mr={4} position="relative">
                {/* Circle with pulse animation */}
                <Flex
                    bg={circleBg}
                    w="40px"
                    h="40px"
                    fontSize="lg"
                    borderRadius="full"
                    align="center"
                    justify="center"
                    fontWeight="bold"
                    color={circleColor}
                    border="2px solid"
                    borderColor={circleBorder}
                    zIndex={2}
                    position="relative"
                    transition="all 0.3s ease"
                    _hover={{
                        transform: 'scale(1.1)',
                        bg: useColorModeValue('pink.200', 'gray.600'),
                        borderColor: useColorModeValue('pink.400', 'gray.400'),
                        boxShadow: useColorModeValue(
                            '0 0 15px rgba(236, 72, 153, 0.4)',
                            '0 0 15px rgba(156, 163, 175, 0.4)'
                        )
                    }}
                >
                    {number}
                </Flex>

                {/* Dotted connecting line with animation (not for last item) */}
                {!isLast && (
                    <Box
                        position="absolute"
                        top="48px"
                        width="2px"
                        height="calc(100% - 24px)"
                        borderLeft="2px dotted"
                        borderColor={lineColor}
                        zIndex={1}
                        sx={{
                            animation: 'flowDown 2s linear infinite',
                            '@keyframes flowDown': {
                                '0%': { opacity: 0.5 },
                                '50%': { opacity: 1 },
                                '100%': { opacity: 0.5 }
                            }
                        }}
                    />
                )}
            </Flex>

            {/* Content card with hover animation */}
            <Box flex={1}>
                <Box
                    bg={bg}
                    border="1px solid"
                    borderColor={border}
                    borderRadius="xl"
                    p={5}
                    boxShadow="md"
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                        shadow: 'xl',
                        transform: 'translateX(8px) scale(1.02)',
                        borderColor: useColorModeValue('pink.300', 'gray.500')
                    }}
                    sx={{
                        animation: 'glowPulse 2s ease-in-out infinite',
                        '@keyframes glowPulse': {
                            '0%': { boxShadow: useColorModeValue('0 4px 6px rgba(0, 0, 0, 0.1)', '0 4px 6px rgba(0, 0, 0, 0.3)') },
                            '50%': { boxShadow: useColorModeValue('0 8px 15px rgba(236, 72, 153, 0.2)', '0 8px 15px rgba(156, 163, 175, 0.3)') },
                            '100%': { boxShadow: useColorModeValue('0 4px 6px rgba(0, 0, 0, 0.1)', '0 4px 6px rgba(0, 0, 0, 0.3)') }
                        }
                    }}
                >
                    <Heading
                        as="h4"
                        fontSize="20px"
                        fontWeight="600"
                        mb={3}
                        color={headingColor}
                        transition="all 0.2s"
                        _hover={{ color: useColorModeValue('pink.700', 'pink.200'), transform: 'translateX(5px)' }}
                    >
                        {title}
                    </Heading>
                    <Text
                        fontSize="16px"
                        lineHeight="1.6"
                        color={textColor}
                        transition="all 0.2s"
                        _hover={{ color: useColorModeValue('gray.800', 'white') }}
                    >
                        {description}
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
};

const LegalConnectedSteppers = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [tabIndex, setTabIndex] = useState(0);
    const isInitialMount = useRef(true);
    const isTabChange = useRef(false);

    // Scroll to top only on initial page load/navigation, not on tab changes
    useEffect(() => {
        // Skip scroll on tab changes
        if (isTabChange.current) {
            isTabChange.current = false;
            return;
        }

        // Check if we should scroll to top (from footer navigation)
        if (location.state?.scrollToTop) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (isInitialMount.current) {
            // Only scroll on initial mount if no specific scroll behavior is needed
            window.scrollTo(0, 0);
            isInitialMount.current = false;
        }
    }, [location]);

    // Handle initial tab based on navigation state or URL hash
    useEffect(() => {
        // Check for navigation state first (from Footer click)
        if (location.state?.defaultTab !== undefined) {
            setTabIndex(location.state.defaultTab);
            // Clear the state to prevent issues on refresh, but keep scrollToTop if needed
            const { defaultTab, ...restState } = location.state;
            navigate(location.pathname, { replace: true, state: restState });
        }
        // Then check URL hash
        else if (location.hash === '#terms') {
            setTabIndex(0);
        } else if (location.hash === '#privacy') {
            setTabIndex(1);
        }
    }, [location, navigate]);

    const handleTabChange = (index) => {
        // Set flag to prevent scrolling on tab change
        isTabChange.current = true;
        setTabIndex(index);
        
        // Update URL hash without page reload
        const hash = index === 0 ? '#terms' : '#privacy';
        navigate(`${location.pathname}${hash}`, { replace: true });
    };

    const outerBg = useColorModeValue(
        'rgba(252, 232, 242, 0.8)',
        'gray.900'
    );
    const boxBg = useColorModeValue(
        'rgba(255, 255, 255, 0.4)',
        'rgba(31, 41, 55, 0.7)'
    );
    const headingColor = useColorModeValue('pink.600', 'pink.300');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const borderColorPink = useColorModeValue(
        'rgba(236, 72, 153, 0.2)',
        'rgba(75, 85, 99, 0.5)'
    );
    const hoverBorderColor = useColorModeValue('pink.300', 'gray.500');
    const boxShadowHover = useColorModeValue(
        '0 20px 25px -5px rgba(236, 72, 153, 0.2), 0 10px 10px -5px rgba(236, 72, 153, 0.1)',
        '0 20px 25px -5px rgba(75, 85, 99, 0.3), 0 10px 10px -5px rgba(75, 85, 99, 0.2)'
    );
    const tabSelectedBg = useColorModeValue('pink.500', 'pink.400');
    const tabSelectedColor = useColorModeValue('white', 'white');

    return (
        <Box
            bg={outerBg}
            py={8}
            px={{ base: 4, md: 8 }}
            borderRadius="3xl"
            boxShadow="lg"
            maxW="1000px"
            mx="auto"
            // Add top padding to prevent overlap with navbar
            pt={{ base: "70px", md: "80px" }}
            // Keep bottom margin for footer spacing
            mb={{ base: 12, md: 16 }}
            sx={{
                animation: 'fadeIn 0.8s ease-out',
                '@keyframes fadeIn': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            }}
        >
            {/* Main Title */}
            <VStack spacing={2} mb={8} textAlign="center">
                <Heading
                    as="h1"
                    fontSize={{ base: '36px', md: '48px' }}
                    fontWeight="bold"
                    color={headingColor}
                    letterSpacing="tight"
                    sx={{
                        animation: 'bounceIn 0.8s ease-out',
                        '@keyframes bounceIn': {
                            '0%': { transform: 'scale(0.3)', opacity: 0 },
                            '50%': { transform: 'scale(1.05)', opacity: 0.8 },
                            '70%': { transform: 'scale(0.9)', opacity: 0.9 },
                            '100%': { transform: 'scale(1)', opacity: 1 }
                        }
                    }}
                >
                    Legal Information
                </Heading>
                <Text
                    fontSize="18px"
                    lineHeight="1.6"
                    color={textColor}
                    maxW="600px"
                >
                    Please review our terms and privacy policy carefully before using Delbaram
                </Text>
            </VStack>

            {/* Tabs */}
            <Tabs 
                index={tabIndex} 
                onChange={handleTabChange}
                variant="soft-rounded"
                colorScheme="pink"
                isFitted
                mb={6}
            >
                <TabList 
                    bg={boxBg}
                    p={1.5}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor={borderColorPink}
                >
                    <Tab
                        fontSize={{ base: '16px', md: '18px' }}
                        fontWeight="600"
                        py={3}
                        borderRadius="lg"
                        _selected={{
                            bg: tabSelectedBg,
                            color: tabSelectedColor,
                            boxShadow: 'md'
                        }}
                        _hover={{
                            bg: useColorModeValue('pink.50', 'gray.700')
                        }}
                    >
                        Terms & Conditions
                    </Tab>
                    <Tab
                        fontSize={{ base: '16px', md: '18px' }}
                        fontWeight="600"
                        py={3}
                        borderRadius="lg"
                        _selected={{
                            bg: tabSelectedBg,
                            color: tabSelectedColor,
                            boxShadow: 'md'
                        }}
                        _hover={{
                            bg: useColorModeValue('pink.50', 'gray.700')
                        }}
                    >
                        Privacy Policy
                    </Tab>
                </TabList>

                <TabPanels>
                    {/* Terms & Conditions Panel */}
                    <TabPanel px={{ base: 0, md: 2 }} py={6}>
                        <Box
                            bg={boxBg}
                            backdropFilter="blur(8px)"
                            borderRadius="2xl"
                            border="1px solid"
                            borderColor={borderColorPink}
                            p={{ base: 5, md: 8 }}
                            boxShadow="md"
                            sx={{
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: boxShadowHover,
                                    borderColor: hoverBorderColor
                                }
                            }}
                        >
                            <Box mb={6}>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '28px', md: '32px' }}
                                    fontWeight="bold"
                                    color={headingColor}
                                    mb={2}
                                >
                                    Terms & Conditions
                                </Heading>
                                <Text
                                    fontSize="16px"
                                    lineHeight="1.6"
                                    color={textColor}
                                >
                                    Please review our terms carefully before using Delbaram
                                </Text>
                            </Box>

                            <Box maxW="600px" mx="auto">
                                <ConnectedStepItem
                                    number="01"
                                    title="Acceptance of Terms"
                                    description={
                                        <>
                                            By creating an account or using{' '}
                                            <Text
                                                as="span"
                                                bgGradient="linear(to-r, green.400, purple.500)"
                                                bgClip="text"
                                                fontWeight="bold"
                                            >
                                                Delbaram
                                            </Text>
                                            , you confirm that you have read, understood, and agreed to these Terms & Conditions.
                                        </>
                                    }
                                    index={0}
                                />
                                <ConnectedStepItem
                                    number="02"
                                    title="Eligibility"
                                    description={
                                        <>
                                            You must be at least 18 years old to use{' '}
                                            <Text
                                                as="span"
                                                bgGradient="linear(to-r, green.400, purple.500)"
                                                bgClip="text"
                                                fontWeight="bold"
                                            >
                                                Delbaram
                                            </Text>
                                            . By using the platform, you confirm that you meet this age requirement.
                                        </>
                                    }
                                    index={1}
                                />
                                <ConnectedStepItem
                                    number="03"
                                    title="User Account"
                                    description={
                                        <>
                                            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.{' '}
                                            <Text
                                                as="span"
                                                bgGradient="linear(to-r, green.400, purple.500)"
                                                bgClip="text"
                                                fontWeight="bold"
                                            >
                                                Delbaram
                                            </Text>
                                            {' '}is not responsible for unauthorized access caused by user negligence.
                                        </>
                                    }
                                    index={2}
                                />
                                <ConnectedStepItem
                                    number="04"
                                    title="User Conduct"
                                    description="Users agree not to engage in any harmful, illegal, or inappropriate behavior while using the platform. This includes but is not limited to harassment, spamming, and sharing explicit content."
                                    isLast={true}
                                    index={3}
                                />
                            </Box>
                        </Box>
                    </TabPanel>

                    {/* Privacy Policy Panel */}
                    <TabPanel px={{ base: 0, md: 2 }} py={6}>
                        <Box
                            bg={boxBg}
                            backdropFilter="blur(8px)"
                            borderRadius="2xl"
                            border="1px solid"
                            borderColor={borderColorPink}
                            p={{ base: 5, md: 8 }}
                            boxShadow="md"
                            sx={{
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: boxShadowHover,
                                    borderColor: hoverBorderColor
                                }
                            }}
                        >
                            <Box mb={6}>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '28px', md: '32px' }}
                                    fontWeight="bold"
                                    color={headingColor}
                                    mb={2}
                                >
                                    Privacy Policy
                                </Heading>
                                <Text
                                    fontSize="16px"
                                    lineHeight="1.6"
                                    color={textColor}
                                >
                                    How we protect and handle your information
                                </Text>
                            </Box>

                            <Box maxW="600px" mx="auto">
                                <ConnectedStepItem
                                    number="01"
                                    title="Policy Overview"
                                    description={
                                        <>
                                            At{' '}
                                            <Text
                                                as="span"
                                                bgGradient="linear(to-r, green.400, purple.500)"
                                                bgClip="text"
                                                fontWeight="bold"
                                            >
                                                Delbaram
                                            </Text>
                                            , your privacy is very important to us. This Privacy Policy explains how we collect, use, protect, and handle your information when you use our online chatting platform.
                                        </>
                                    }
                                    index={0}
                                />
                                <ConnectedStepItem
                                    number="02"
                                    title="Our Commitment to Your Privacy"
                                    description={
                                        <>
                                            By using{' '}
                                            <Text
                                                as="span"
                                                bgGradient="linear(to-r, green.400, purple.500)"
                                                bgClip="text"
                                                fontWeight="bold"
                                            >
                                                Delbaram
                                            </Text>
                                            , you agree to the practices described in this policy.
                                        </>
                                    }
                                    index={1}
                                />
                                <ConnectedStepItem
                                    number="03"
                                    title="Personal Information We Collect"
                                    description={
                                        <VStack align="start" spacing={2}>
                                            <Text>• Name or username</Text>
                                            <Text>• Email address or phone number</Text>
                                            <Text>• Profile information provided by you</Text>
                                            <Text>• Profile photo (if uploaded)</Text>
                                        </VStack>
                                    }
                                    index={2}
                                />
                                <ConnectedStepItem
                                    number="04"
                                    title="Chat & Usage Information We Collect"
                                    description={
                                        <VStack align="start" spacing={2}>
                                            <Text>• Messages sent and received on the platform</Text>
                                            <Text>• App usage data (features used, time spent, interactions)</Text>
                                            <Text>• Device information (device type, OS version, app version)</Text>
                                        </VStack>
                                    }
                                    isLast={true}
                                    index={3}
                                />
                            </Box>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default LegalConnectedSteppers;