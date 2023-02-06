import React from 'react';
import {Flex, Text, Box} from "@chakra-ui/react";

export const Banner = () => {
    return (
        <Flex w='100%' position='relative' pointerEvents="none" userSelect="none">
            <Box w='100%' h='454px' bgPosition='center' bgRepeat="no-repeat" backgroundImage='/assets/images/crop-gamer-hub.png' objectFit="cover"/>
            <Flex position='absolute' left='70px' top='40%' flexDir='column' gridGap='8px'>
                <Text fontSize='42px' fontWeight='700'>Welcome to GamerHub</Text>
                <Text fontSize='14px' w='70%'>Experience the future of gaming across multiple chains, all in  one place.</Text>
            </Flex>
        </Flex>

    );
};

export default Banner;
