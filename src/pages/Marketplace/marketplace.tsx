import React from 'react';
import {Box, Flex, Grid, Text, InputGroup, Input} from "@chakra-ui/react";
import {Colors} from "../../colors";
import PopularGame from "./popularGame";
import TopGames from "./topGames";
import axios from "axios";
import Footer from "../../Components/Footer/footer";

export const Marketplace = () => {

    return (
        <Flex flexDirection='column' bgColor={Colors.primary}>
            <Box justifyContent='center' position='relative' backgroundImage='/assets/images/marketplace_placeholder.png' display='flex' h='298px' w='100%'>
            <Input placeholder='Search for transaction etc...' top='63px' p='14px 20px' w='438px' position='absolute' border='1px solid rgba(93, 119, 162, 0.5)' borderRadius='7px' bgColor='transparent'/>

            </Box>
            <Flex p='24px' flexDirection='column'>
                <Text fontSize='24px' fontWeight='700'>Popular Games</Text>
                <Flex pt='20px' width='calc(100% - 56px)' overflow='scroll'>
                    <Grid templateColumns='repeat(5, 1fr)' gap='32px' >
                        <PopularGame />
                        <PopularGame />
                        <PopularGame />
                        <PopularGame />
                        <PopularGame />
                    </Grid>
                </Flex>
                <Flex pt='32px' flexDirection='column'>
                    <Text fontSize='24px' fontWeight='700'>Top Games</Text>
                    <Grid pt='38px' templateColumns='repeat(3, 1fr)' gridGap='32px'>
                        <TopGames />
                        <TopGames />
                        <TopGames />
                        <TopGames />
                        <TopGames />
                        <TopGames />
                        <TopGames />
                        <TopGames />
                        <TopGames />
                    </Grid>

                </Flex>

            </Flex>
            <Footer />
        </Flex>

    );
};

export default Marketplace;
