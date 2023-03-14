/* eslint-disable prettier/prettier */
import PrimaryButton from '@/lib/Button/PrimaryButton';
import {
    Box,
    Button,
    Center,
    Container,
    Icon,
    Input,
    Link,
    SimpleGrid,
    Stack,
    StackDivider,
    Text,
    useBreakpointValue,
    useColorModeValue,
    VStack
} from '@chakra-ui/react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SocialButton = ({ children, href, ...rest }) => {
    return (
        <Button
            as="a"
            href={href}
            colorScheme="pink"
            variant="solid"
            boxSize="10"
            borderRadius="full"
            {...rest}
        >
            {children}
        </Button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight="semibold" fontSize="lg" mb="2">
            {children}
        </Text>
    );
};

const ListItem = ({ href, children }) => {
    return (
        <Link href={href} color="gray.500">
            {children}
        </Link>
    );
};

export default function Footer() {
    return (
        <Box bg="gray.100" color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW="8xl" pt="10">
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing="4"
                    align="stretch"
                >
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                        spacing={{ base: 0, sm: 4, md: 6, lg: 16 }}
                    >
                        <Stack spacing="4" pb={{ base: 4, sm: 0 }}>
                            <Text
                                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                fontWeight="extrabold"
                                fontSize="2xl"
                            >
                                NFTERS
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                                The world’s first and largest digital marketplace for crypto
                                collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
                                exclusive digital items.
                            </Text>
                            <Stack direction="row" spacing="6">
                                <SocialButton label="Twitter" href="#" colorScheme="facebook">
                                    <Icon as={FaFacebookF} boxSize="5" />
                                </SocialButton>
                                <SocialButton label="YouTube" href="#" colorScheme="twitter">
                                    <Icon as={FaTwitter} boxSize="5" />
                                </SocialButton>
                                <SocialButton label="Instagram" href="#" colorScheme="linkedin">
                                    <Icon as={FaLinkedinIn} boxSize="5" />
                                </SocialButton>
                            </Stack>
                        </Stack>
                        <Stack align="flex-start" pb={{ base: 4, sm: 0 }}>
                            <ListHeader>Market Place</ListHeader>
                            <ListItem href="#">All NFTs</ListItem>
                            <ListItem href="#">New</ListItem>
                            <ListItem href="#">Art</ListItem>
                            <ListItem href="#">Sports</ListItem>
                            <ListItem href="#">Utility</ListItem>
                            <ListItem href="#">Music</ListItem>
                            <ListItem href="#">Domain Name</ListItem>
                        </Stack>
                        <Stack align="flex-start" pb={{ base: 4, sm: 0 }}>
                            <ListHeader>My Account</ListHeader>
                            <ListItem href="#">Profile</ListItem>
                            <ListItem href="#">Favorite</ListItem>
                            <ListItem href="#">My Collections</ListItem>
                            <ListItem href="#">Settings</ListItem>
                        </Stack>
                        <Stack align="flex-start" spacing="4" pb={{ base: 4, sm: 0 }}>
                            <ListHeader>Stay in the loop</ListHeader>

                            <Text fontSize="sm" color="gray.500">
                                Join our mailing list to stay in the loop with our newest feature
                                releases, NFT drops, and tips and tricks for navigating NFTs.
                            </Text>

                            <Box position="relative" width="full">
                                <Input
                                    placeholder="Enter your email address.."
                                    _placeholder={{ fontSize: 'sm' }}
                                    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                    border="0"
                                    borderRadius="full"
                                    _focus={{
                                        bg: 'whiteAlpha.300',
                                    }}
                                    p={{ base: 7, sm: 7 }}
                                />
                                <PrimaryButton
                                    label="Subscribe Now"
                                    href="#"
                                    px={{ base: 4, sm: 6, md: 4 }}
                                    py={{ base: 3, sm: 4, md: 3 }}
                                    position="absolute"
                                    top="5px"
                                    right="7px"
                                />
                            </Box>
                        </Stack>
                    </SimpleGrid>

                    <Center>
                        <Text fontSize="sm" color="gray.400" pb="4">
                            Copyright © 2022 Avi Yansah
                        </Text>
                    </Center>
                </VStack>
            </Container>
        </Box>
    );
}
