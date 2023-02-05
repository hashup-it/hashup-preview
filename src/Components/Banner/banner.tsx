import React from 'react';
import {Flex, Text, Image} from "@chakra-ui/react";

export const Banner = () => {
    return (
        <Flex w='100%' position='relative' pointerEvents="none" userSelect="none">
            <Image w='100%' h='100%' src='/assets/images/banner_placeholder.png'/>
            <Flex position='absolute' left='70px' top='40%' flexDir='column' gridGap='8px'>
                <Text fontSize='42px' fontWeight='700'>Welcome to GamerHub</Text>
                <Text fontSize='14px' w='70%'>Experience the future of gaming across multiple chains, all in  one place.</Text>
            </Flex>
        </Flex>

    );
};

export default Banner;
