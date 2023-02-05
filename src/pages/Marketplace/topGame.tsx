import React from 'react';
import { Flex, Text, Box, Image, Tooltip } from '@chakra-ui/react';
import {Colors} from "../../colors";
import PolygonLogo from "../../Icons/polygonLogo";
import { IGame } from '../../Components/Game/types';
import { useNavigate } from 'react-router-dom';

export const TopGame = ({game}: {game: IGame}) => {
    const history = useNavigate()
    const navigate = (path: string) => {
        history(path)
    }

    return (
        <Flex cursor="pointer"  onClick={() => navigate('/game/' + game.address)} h='280px' bgColor='#060D33' position='relative' borderRadius='10px' flexDirection='column' border={`1px solid ${Colors.acent}`}>
            <Box  borderRadius='10px' w='100%' h='182px' backgroundImage={game.media.coverImageUrl} backgroundSize="cover" backgroundPosition="center center" backgroundRepeat="no-repeat"/>
            <Tooltip placement="top-start" label={game.address}>
                <Flex top='50%' position='absolute' left='18px' alignItems='flex-end' gridGap='12px'>
                    <Image src={game.media.logoUrl} borderRadius='6px' w='88px' h='88px' />
                    <Flex flexDirection='column' gridGap='6px'>
                        <Text fontSize='18px' fontWeight='700'>{game.name}</Text>
                        <Flex alignItems='center' gridGap='6px'>
                            <Box w='24px' h='24px' alignItems='center' justifyContent='center' borderRadius='50%' bgColor='#7B3FE4' display='flex'>
                                <PolygonLogo />
                            </Box>
                            <Text>Polygon</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Tooltip>
        </Flex>
    );
};

export default TopGame;
