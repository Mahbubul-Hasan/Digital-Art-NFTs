import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import Menu from './Menu';

export default function Layout({ children }) {
    return (
        <Box>
            <Menu />
            {children}
            <Footer />
        </Box>
    );
}
