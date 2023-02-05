import React, {useState} from 'react';
import {Flex, Text, Box} from "@chakra-ui/react";
import {Colors} from "../colors";
import BackArrows from "../Icons/backArrows";
import {useNavigate, useParams} from "react-router-dom";
import GamesIcon from "../Icons/gamesIcon";
import HeartIcon from "../Icons/heartIcon";
import {emptyGame, IGame} from "../Components/Game/types";
import useAsyncEffect from "../Hooks/effects/async";
import axios from "axios";
import Screenshots from "../Components/PanelGames/screenshots";
import Footer from "../Components/Footer/footer";
import {useHashup} from "@hashup-it/hashup-react-sdk";
import {ethers} from "ethers";


export const SingleGameView = () => {

    const hashup = useHashup();

    const { id } = useParams();

    const [game, setGame] = useState<IGame>(emptyGame);

    useAsyncEffect(async () => {
        const payload = await axios.get(`https://open-api.hashup.it/v1/token/polygon/${id}`);
        const data: IGame = payload.data;

        setGame(data);
    },  [id]);

    const history = useNavigate()
    const navigate = () => {
        history('/games')
    }
    return (

        <Flex bgColor={Colors.primary} p='40px 0px 0px 24px' flexDirection='column'>
            <Flex alignItems='center' gridGap='8px' cursor='pointer' onClick={navigate} >
                <BackArrows />
                <Text>Back</Text>
            </Flex>
            <Flex p='16px 24px 32px 0px'>
                <Box h='320px' w='100%' position='relative' alignItems='center' justifyContent='center' >
                <Box position='relative' filter='blur(4px) brightness(0.45)' justifyContent='center' alignItems='center' backgroundImage={game.media.coverImageUrl} display='flex' h='320px' w='100%' borderRadius='5px'/>
                    <Box position='absolute' h='320px' w='100%' top='0' left='0' >
                        <Flex position='absolute' h='320px' w='100%' justifyContent='center' flexDirection='column' gridGap='12px' alignItems='center'>
                            <Text fontSize='56px' fontWeight='700' color='#EFF1F6' textShadow={`4px 4px 40px ${Colors.primary}`}>{game.name}</Text>
                            <Text textShadow={`4px 4px 40px ${Colors.primary}`} whiteSpace='nowrap' textAlign='center' overflow='hidden' textOverflow='ellipsis' w='70%' h='64px' fontSize='18px' fontWeight='700' color='#BEC9DA'>{game.description}</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <Flex w='100%' pr='24px' justifyContent='space-between' gridGap='68px'>
                <Screenshots screens={game.screenshots} video={game.video} arrowsColor={game.color} />
                <Flex w='381px' flexDirection='column' >
                    <Flex flexDirection='column' gridGap='12px' w='100%'>
                        <Flex justifyContent='space-between' w='100%'>
                            <Text color='#9EAEC7'>Release status</Text>
                            <Text>Released</Text>
                        </Flex>
                        <Flex justifyContent='space-between' w='100%'>
                            <Text color='#9EAEC7'>ICO Price</Text>
                            <Text>{game.price}</Text>
                        </Flex>
                        <Flex justifyContent='space-between' w='100%' >
                            <Text color='#9EAEC7'>Chain</Text>
                            <Text textTransform='capitalize'>{game.chain}</Text>
                        </Flex>
                        <Flex justifyContent='space-between' w='100%' >
                            <Text color='#9EAEC7'>Token</Text>
                            <Text textTransform='uppercase'>{game.symbol}</Text>
                        </Flex>
                    </Flex>
                    <Flex w='100%' justifyContent='space-between' alignItems='center' pt='4px'>
                        <Box h='1px' w='45%' bgColor='red'/>
                        <GamesIcon />
                        <Box h='1px' w='45%' bgColor='red'/>
                    </Flex>
                    <Flex flexDirection='column' gridGap='12px' w='100%'>
                        <Flex justifyContent='space-between' w='100%'>
                            <Text color='#9EAEC7'>Language</Text>
                            <Text>English</Text>
                        </Flex>
                        <Flex justifyContent='space-between' w='100%' >
                            <Text color='#9EAEC7'>Developer</Text>
                            <Text>{game.creator.slice(0,12)}...</Text>
                        </Flex>
                        <Flex justifyContent='space-between' w='100%' >
                            <Text color='#9EAEC7'>Community</Text>
                            <Text>FCON</Text>
                        </Flex>
                    </Flex>
                    <Flex pt='32px' w='100%' gridGap='16px'>
                        <Flex userSelect="none" cursor='pointer' onClick={() => hashup.buyGame(id?? ethers.constants.AddressZero)} h='56px' w='309px' alignItems='center' justifyContent='center' bgColor='#260C40' borderRadius='5px' border='1px solid #5A0852'>
                            Buy Game
                        </Flex>
                        <Flex cursor="not-allowed" h='56px' w='56px' borderRadius='5px' border='1px solid #white' bgColor='#1E1B46' stroke='1px solid #4A6082' alignItems='center' justifyContent='center'>
                            <HeartIcon />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex pt='24px' flexDirection='column' alignItems='flex-start'>
                <Flex alignItems='center' justifyContent='center' gridGap='4px' flexDirection='column'>
                    <Text fontSize='16px' fontWeight='700' >ABOUT</Text>
                    <Box bgColor={Colors.acent} h='2px' w='76px' />
                </Flex>
                <Flex pt='22px'>
                    <Text fontSize='28px' fontWeight='700'>About</Text>
                </Flex>
                <Flex pt='24px' w='40%'>
                    <Text color='#BEC9DA'>{game.description}</Text>
                </Flex>
                <Flex pt='24px' gridGap='10px'>
                    {game.genres.map((genre) => <Flex textTransform='capitalize' p='8px 24px' alignItems='center' justifyContent='center' borderRadius='5px' bgColor={Colors.secondary}>{genre}</Flex>)}
                </Flex>
                <Flex pt='64px' flexDirection='column' alignItems='flex-start'>
                    <Text fontSize='28px' fontWeight='700'>Latest Interactions</Text>
                    <Flex pt='24px' alignItems='center' justifyContent='center' gridGap='4px' flexDirection='column'>
                        <Text fontSize='16px' fontWeight='700' >ACTIVITY</Text>
                        <Box bgColor={Colors.acent} h='2px' w='76px' />
                    </Flex>
                    <Flex p='56px 0px'>
                       <Flex border='1px solid #242D59' p='12px' borderRadius='5px' gridGap='16px' w='677px'>
                            <Box backgroundImage='assets/images/interactions_placeholder.png' h='80px' w='80px' borderRadius='5px'/>
                           <Flex flexDirection='column' gridGap='8px'>
                           <Text>GamerHub #2232</Text>
                               <Flex>
                                   <Text>Bid canceled by</Text>
                                   <Text>0x638ccd7e4...0eb8</Text>
                               </Flex>
                               <Text>5 mins ago</Text>
                           </Flex>
                       </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};

export default SingleGameView;
