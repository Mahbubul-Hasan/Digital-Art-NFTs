import { Button } from '@chakra-ui/react';

export default function SecondaryButton({ label, href, ...rest }) {
    return (
        <Button
            as="a"
            variant="link"
            href={href}
            fontSize="md"
            fontWeight="medium"
            color="brand.100"
            bg="white"
            border="1px solid"
            borderColor="brand.100"
            borderRadius="full"
            _hover={{
                bg: 'brand.100',
                color: 'white',
            }}
            {...rest}
        >
            {label}
        </Button>
    );
}
