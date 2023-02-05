import React from 'react';
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import VerifiedIcon from '../../Icons/verifiedIcon';
import FavouriteIcon from '../../Icons/favouriteIcon';
import EthIcon from '../../Icons/ethIcon';
import { IGame } from '../../Components/Game/types';
import { formatUsd, trimAddress } from '../../utils/parser';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: IGame;
}

export const PopularGame = ({ data }: Props) => {
    const history = useNavigate()
    const navigate = (path: string) => {
        history(path)
    }

    return (
        <Flex bgColor='#1F2850' border='1px solid #D7007B80' p='8px' cursor="pointer"
              onClick={() => navigate('/game/' + data.address)}>
            <Flex flexDirection='column'>
                <Box backgroundImage={data.media.coverImageUrl} backgroundSize="cover"
                     backgroundPosition="center center" backgroundRepeat="no-repeat" h='224px' w='216px'
                     borderRadius='5px' />
                <Flex justifyContent='space-between' alignItems='center' pt='4px'>
                    <Flex gridGap='6px' alignItems='center'>
                        <Tooltip placement="top-start" label={data.creator}>
                            <Text fontSize='12px' fontWeight='500' color='#9EAEC7'>{trimAddress(data.creator)}</Text>
                        </Tooltip>
                        <VerifiedIcon />
                    </Flex>
                    <Box cursor="not-allowed">
                        <FavouriteIcon />
                    </Box>
                </Flex>
                <Tooltip placement="top-start" label={data.address}>
                    <Text pt='2px' fontSize='16px' fontWeight='500'>{data.name}</Text>
                </Tooltip>
                <Flex pt='4px' alignItems='center' gridGap='6px'>
                    <Text color='#BEC9DA'>Price: {formatUsd(ethers.utils.formatUnits(data.price, 4))} USDC</Text>
                    <Box borderRadius='50%' w='20px' h='20px' bgColor='#212647' display='flex' alignItems='center'
                         justifyContent='center'>
                        <EthIcon />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default PopularGame;
