import PrimaryButton from '@/lib/Button/PrimaryButton';
import SecondaryButton from '@/lib/Button/SecondaryButton';
import { Box, Container, Heading, SimpleGrid, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import ProductCart from './ProductCart';

export default function ProductListSection() {
    return (
        <Box bg="white">
            <Container maxW="8xl" py={{ base: 8, md: 16 }}>
                <VStack spacing="8" align="stretch">
                    <Heading as="h2" textTransform="uppercase">
                        Discover more NFTs
                    </Heading>

                    <Wrap>
                        {categories.map((cat) => (
                            <WrapItem key={cat.id}>
                                {cat.id === 1 ? (
                                    <PrimaryButton label={cat.label} href="#" px="4" py="1.5" />
                                ) : (
                                    <SecondaryButton label={cat.label} href="#" px="4" py="1" />
                                )}
                            </WrapItem>
                        ))}
                    </Wrap>

                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                            <ProductCart key={item} />
                        ))}
                    </SimpleGrid>
                </VStack>
            </Container>
        </Box>
    );
}

const categories = [
    {
        id: 1,
        label: 'All Categories',
        href: '#',
    },
    {
        id: 2,
        label: 'Art',
        href: '#',
    },
    {
        id: 3,
        label: 'Celebrities',
        href: '#',
    },
    {
        id: 4,
        label: 'Gaming',
        href: '#',
    },
    {
        id: 5,
        label: 'Sport',
        href: '#',
    },
    {
        id: 6,
        label: 'Music',
        href: '#',
    },
    {
        id: 7,
        label: 'Crypto',
        href: '#',
    },
];
