import * as React from 'react';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { Wrapper } from './Components/Wrapper';
import { customTheme } from './theme/customTheme';

export const App = () => {
    const { ToastContainer } = createStandaloneToast();

    return (
        <ChakraProvider theme={customTheme}>
            <Wrapper />
            <ToastContainer />
        </ChakraProvider>
    );
};
