import '@fontsource/francois-one';

const { extendTheme } = require('@chakra-ui/react');

const colors = {
    brand: {
        100: '#3D00B7', // Blue
        200: '#8119DF', // Light Blue
    },
};
const theme = extendTheme({
    colors,
    fonts: {
        body: 'Francois One',
        heading: 'Francois One',
    },
});

export default theme;
