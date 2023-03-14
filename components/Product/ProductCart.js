/* eslint-disable prettier/prettier */
import SecondaryButton from '@/lib/Button/SecondaryButton';
import {
    Avatar,
    AvatarGroup,
    Box,
    Icon,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VStack
} from '@chakra-ui/react';
import { FaDeviantart } from 'react-icons/fa';

export default function ProductCart() {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            <Box>
                <Image src={data.imageURL} alt={data.name} roundedTop="lg" />
            </Box>

            <Box py="6" px="3" position="relative">
                <AvatarGroup size="sm" max="4" position="absolute" top="-5">
                    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                </AvatarGroup>

                <VStack spacing="2" align="stretch">
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {data.name}
                    </Box>

                    <Stack direction={['column', 'row']} justify="space-between">
                        <Text fontSize="sm" color="green.400">
                            <Icon as={FaDeviantart} boxSize="3" /> 0.25 ETH
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            1 of 321
                        </Text>
                    </Stack>

                    <Stack direction="row" justify="space-between">
                        <SecondaryButton
                            label="3h 50m 2s left"
                            href="#"
                            px="3"
                            py="1"
                            fontSize="xs"
                        />
                        <SecondaryButton label="Place a bid" href="#" px="3" py="1" fontSize="xs" />
                    </Stack>
                </VStack>
            </Box>
        </Box>
    );
}

const data = {
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'ArtCrypto',
};
