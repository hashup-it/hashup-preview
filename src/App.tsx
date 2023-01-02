import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Wrapper } from './Components/Wrapper';
import { customTheme } from './theme/customTheme';

export const App = () => (
    <ChakraProvider theme={customTheme}>
        <Wrapper />
    </ChakraProvider>
);
