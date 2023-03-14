import { Button } from '@chakra-ui/react';

export default function PrimaryButton({ label, href, ...rest }) {
    return (
        <Button
            as="a"
            variant="link"
            href={href}
            fontSize="md"
            fontWeight="medium"
            color="white"
            bg="brand.100"
            borderRadius="full"
            _hover={{
                bg: 'brand.200',
            }}
            {...rest}
        >
            {label}
        </Button>
    );
}
