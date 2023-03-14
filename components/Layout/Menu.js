/* eslint-disable prettier/prettier */
import PrimaryButton from '@/lib/Button/PrimaryButton';
import SecondaryButton from '@/lib/Button/SecondaryButton';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Collapse,
    Container,
    Flex,
    IconButton,
    Link,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';

export default function Menu() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box bg="white">
            <Container as={Stack} maxW="8xl">
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH="60px"
                    py="2"
                    align="center"
                >
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: 'center', md: 'start' }}
                        align="center"
                    >
                        <Link href="#" _hover={{ textDecoration: 'none' }}>
                            <Text
                                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                color="brand.100"
                                fontWeight="extrabold"
                                fontSize="2xl"
                            >
                                NFTERS
                            </Text>
                        </Link>
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>
                    <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing="4">
                        <PrimaryButton
                            label="Upload"
                            href="#"
                            px={{ base: 4, sm: 6 }}
                            py={{ base: 2, sm: 2 }}
                        />
                        <SecondaryButton
                            label="Connect Wallet"
                            href="#"
                            px="6"
                            border="2px solid"
                        />
                    </Stack>
                </Flex>
            </Container>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction="row" spacing="4">
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Link
                        p="2"
                        href={navItem.href ?? '#'}
                        fontSize="md"
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}
                    >
                        {navItem.label}
                    </Link>
                </Box>
            ))}
        </Stack>
    );
};

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, href }) => {
    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Marketplace',
        href: '#',
    },
    {
        label: 'Resource',
        href: '#',
    },
    {
        label: 'About',
        href: '#',
    },
];
