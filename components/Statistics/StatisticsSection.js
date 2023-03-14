/* eslint-disable prettier/prettier */
import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    HStack,
    Icon,
    Text,
    VStack
} from '@chakra-ui/react';
import { FaRegAddressCard, FaRegChartBar } from 'react-icons/fa';

export default function StatisticsSection() {
    return (
        <Box bg="gray.100">
            <Container maxW="8xl" py={{ base: 8, md: 16 }}>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    }}
                    gap={6}
                >
                    <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
                        <Box width={{ base: '100%', lg: '70%' }}>
                            <Heading as="h2" textTransform="uppercase">
                                The amazing NFT art of the world here
                            </Heading>
                        </Box>
                    </GridItem>
                    <GridItem w="100%">
                        <VStack spacing="4" align="stretch">
                            <HStack spacing="2">
                                <Icon as={FaRegAddressCard} boxSize="6" />
                                <Text fontSize="md" fontWeight="bold">
                                    Fast Transaction
                                </Text>
                            </HStack>

                            <Text fontSize="sm" color="gray.500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                etiam viverra tellus imperdiet.
                            </Text>
                        </VStack>
                    </GridItem>
                    <GridItem w="100%">
                        <VStack spacing="4" align="stretch">
                            <HStack spacing="2">
                                <Icon as={FaRegChartBar} boxSize="6" />
                                <Text fontSize="md" fontWeight="bold">
                                    Growth Transaction
                                </Text>
                            </HStack>
                            <Text fontSize="sm" color="gray.500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                etiam viverra tellus
                            </Text>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
}
