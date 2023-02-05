import React from 'react';
import {Flex, Text, Box, Image} from "@chakra-ui/react";
import {Colors} from "../../colors";
import PolygonLogo from "../../Icons/polygonLogo";

export const TopGames = () => {
    return (
        <Flex w='352px' h='280px' bgColor='#060D33' position='relative' borderRadius='10px' flexDirection='column' border={`1px solid ${Colors.acent}`}>
            <Box  borderRadius='10px' w='100%' h='182px' backgroundImage='/assets/images/topgame_placeholder.png'/>
            <Flex top='50%' position='absolute' left='18px' alignItems='flex-end' gridGap='12px'>
                <Image src='/assets/images/topgame_avatar_placeholder.png' borderRadius='6px' w='88px' h='88px' />
                <Flex flexDirection='column' gridGap='6px'>
                    <Text fontSize='18px' fontWeight='700'>Hype Hoopers 5</Text>
                    <Flex alignItems='center' gridGap='6px'>
                        <Box w='24px' h='24px' alignItems='center' justifyContent='center' borderRadius='50%' bgColor='#7B3FE4' display='flex'>
                            <PolygonLogo />
                        </Box>
                        <Text>Polygon</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TopGames;
