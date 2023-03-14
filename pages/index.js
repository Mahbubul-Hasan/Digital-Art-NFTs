import HeroSection from '@/components/Hero/HeroSection';
import ProductListSection from '@/components/Product/ProductListSection';
import StatisticsSection from '@/components/Statistics/StatisticsSection';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Digital Art NFTs</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box>
                <HeroSection />
                <StatisticsSection />
                <ProductListSection />
            </Box>
        </>
    );
}
