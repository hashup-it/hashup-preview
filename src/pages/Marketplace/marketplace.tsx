import React, { useState } from 'react';
import {Box, Flex, Grid, Text, InputGroup, Input} from "@chakra-ui/react";
import {Colors} from "../../colors";
import PopularGame from "./popularGame";
import TopGame from "./topGame";
import axios from "axios";
import Footer from "../../Components/Footer/footer";
import useAsyncEffect from '../../Hooks/effects/async';
import { IGame } from '../../Components/Game/types';

export const Marketplace = ({search}: {search: string}) => {
    const [games, setGames] = useState<IGame[]>([]);

    useAsyncEffect(async () => {
        const payload = await axios.post('https://open-api.hashup.it/v1/tokens/filter', { "isVerified": true, "chainId": 137,"$or": [
                {"address": {"$regex": `${search}.*`, "$options": "i"}},
                {"creator": {"$regex": `${search}.*`, "$options": "i"}},
                {"name": {"$regex": `${search}.*`, "$options": "i"}},
            ]});
        const data: IGame[] = payload.data;

        setGames(data.filter(datum => datum.isVerified));
    }, [search]);

    return (
        <Flex flexDirection='column' bgColor={Colors.primary}>
            <Box justifyContent='center' position='relative' backgroundImage='/assets/images/marketplace_placeholder.png' display='flex' h='298px'>
            <Input disabled placeholder='Search for a transaction etc…' top='63px' p='14px 20px' w='438px' position='absolute' border='1px solid rgba(93, 119, 162, 0.5)' borderRadius='7px' bgColor='transparent' _placeholder={{color: 'white'}}/>

            </Box>
            <Flex p='24px' flexDirection='column'>
                <Text fontSize='24px' fontWeight='700'>Popular Games</Text>
                <Flex pt='20px' width='calc(100vw - 230px - 48px)' overflowX="hidden">
                    <Grid templateColumns='repeat(4, 1fr)' gap='32px'>
                        {games.map((game) => <PopularGame data={game} />)}
                    </Grid>
                </Flex>
                <Flex pt='32px' flexDirection='column'>
                    <Text fontSize='24px' fontWeight='700'>Top Games</Text>
                    <Grid pt='38px' templateColumns='repeat(3, 1fr)' gridGap='32px'>
                        {games.map((game) => <TopGame game={game} />)}
                    </Grid>

                </Flex>

            </Flex>
            <Footer />
        </Flex>

    );
};

export default Marketplace;
