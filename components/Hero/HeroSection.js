import PrimaryButton from '@/lib/Button/PrimaryButton';
import { Box, Container, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';

export default function HeroSection() {
    return (
        <Box bg="white">
            <Container maxW="8xl" py={{ base: 8, md: 16 }}>
                <Stack minH="50vh" direction={{ base: 'column', md: 'row' }}>
                    <Flex py="8" flex="1" align="center" justify="start">
                        <Stack spacing="6" w="full" maxW="lg">
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                Discover, and collect Digital Art NFTs
                            </Heading>
                            <Text fontSize="md" color="gray.500">
                                Digital marketplace for crypto collectibles and non-fungible tokens
                                (NFTs). Buy, Sell, and discover exclusive digital assets.
                            </Text>
                            <Box>
                                <PrimaryButton label="Explore Now" href="#" px="6" py="3" />
                            </Box>

                            <HStack spacing="24px">
                                <Box>
                                    <Text fontSize="2xl" fontWeight="extrabold">
                                        98k+
                                    </Text>
                                    <Text fontSize="sm" fontWeight="light" color="gray.500">
                                        Artwork
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize="2xl" fontWeight="extrabold">
                                        12k+
                                    </Text>
                                    <Text fontSize="sm" fontWeight="light" color="gray.500">
                                        Auction
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize="2xl" fontWeight="extrabold">
                                        15k+
                                    </Text>
                                    <Text fontSize="sm" fontWeight="light" color="gray.500">
                                        Artist
                                    </Text>
                                </Box>
                            </HStack>
                        </Stack>
                    </Flex>
                    <Flex flex="1">
                        <Image
                            alt="Login Image"
                            objectFit="cover"
                            borderRadius="xl"
                            src={
                                'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                        />
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
}
