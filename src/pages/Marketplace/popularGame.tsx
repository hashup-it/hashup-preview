import React from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import VerifiedIcon from "../../Icons/verifiedIcon";
import FavouriteIcon from "../../Icons/favouriteIcon";
import EthIcon from "../../Icons/ethIcon";

export const PopularGame = () => {
    return (
        <Flex bgColor='#1F2850' border='1px solid #D7007B80' p='8px'>
            <Flex flexDirection='column'>
                <Box backgroundImage='/assets/images/populargame_placeholder.png' h='224px' w='216px' borderRadius='5px'/>
                <Flex w='100%' justifyContent='space-between' alignItems='center' pt='4px'>
                    <Flex gridGap='6px' alignItems='center'>
                        <Text fontSize='12px' fontWeight='500' color='#9EAEC7'>The Possessed</Text>
                        <VerifiedIcon />
                    </Flex>
                    <FavouriteIcon />
                </Flex>
                <Text pt='2px' fontSize='16px' fontWeight='500'>Metarobo War</Text>
                <Flex pt='4px' alignItems='center' gridGap='6px'>
                    <Text color='#BEC9DA'>Price: 0.09 ETH</Text>
                    <Box borderRadius='50%' w='20px' h='20px' bgColor='#212647' display='flex' alignItems='center' justifyContent='center'>
                        <EthIcon />
                    </Box>

                </Flex>
            </Flex>
        </Flex>
    );
};

export default PopularGame;
