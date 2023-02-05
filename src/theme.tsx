import { extendTheme } from '@chakra-ui/react';
import { Colors } from './colors';

//const fonts = { mono: `'Sora', normal` };

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                margin: 0,
                padding: 0,
                overflowX: 'hidden',
                color: 'white',
            },
            a: {
                textDecoration: 'none',
                color: 'white',
            },
            button: {
                border: 0,
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0,
            },
            ul: {
                padding: 0,
            },
            _focus: {
                boxShadow: 'none !important',
                outline: 'none !important',
            },
            _focusVisible: {
                boxShadow: 'none !important',
                outline: 'auto !important',
            },
        },
    },
});

export default theme;
