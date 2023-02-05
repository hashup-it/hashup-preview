import React, {useState} from 'react';
import {Flex, Text, Box, Image, Grid} from "@chakra-ui/react";
import {Colors} from "../../colors";
import ViewArrow from "../../Icons/viewArrow";
import {IGame} from "../Game/types";
import useAsyncEffect from "../../Hooks/effects/async";
import axios from "axios";
import {Purchasable} from "../Purchasable";
import { useNavigate } from 'react-router-dom';

export interface IPanelGames {
    title: string
    games: IGame[]
}
export const PanelGames = ({title, games}: IPanelGames) => {
    const history = useNavigate()

    return (
        <Flex bgColor={Colors.primary} pl='32px' pt='48px' flexDir='column'>
            <Flex gridGap='16px' alignItems='center' pb='24px'>
                <Text fontSize='28px' fontWeight='700'>{title}</Text>
                <Flex cursor="pointer" onClick={() => history(`/games`)} minW='150px' bgColor='#05103C' border='1px solid rgba(255, 255, 255, 0.05)' borderRadius='5px' alignItems='center' justifyContent='center' gridGap='10px' h='48px'>
                    <Text>View all</Text>
                    <Box display='flex' borderRadius='50%' justifyContent='center' alignItems='center' bgColor='#212C54' w='24px' h='24px'>
                        <ViewArrow />
                    </Box>
                </Flex>
            </Flex>
            <Grid templateColumns='repeat(4, 1fr)' gap='32px' mr='32px' alignItems='flex-end'>
                {games.map(data => (
                    <Purchasable
                        key={data.address}
                        game={data}
                    />
                ))}
            </Grid>
        </Flex>
    );
};

export default PanelGames;
