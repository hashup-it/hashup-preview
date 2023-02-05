import * as React from 'react';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { Wrapper } from './Components/Wrapper';
import { customTheme } from './theme/customTheme';
import Header from "./Components/Header/header";
import theme from "./theme";
import {useEffect} from "react";
import {fetchAccounts} from "./utils/ethereum";

export const App = () => {
    const { ToastContainer } = createStandaloneToast();

    return (
        <ChakraProvider theme={theme}>
            <Wrapper />
            <ToastContainer />
        </ChakraProvider>
    );
};
