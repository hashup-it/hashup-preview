import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import GamerhubLogo from "../../Icons/gamerhubLogo";
import {Colors} from "../../colors";
import TelegramIcon from "../../Icons/telegramIcon";
import DiscordIcon from "../../Icons/discordIcon";
import TwitterIcon from "../../Icons/twitterIcon";
import MediumIcon from "../../Icons/mediumIcon";
import { redirect } from '../../utils/redirector';

export const Footer = () => {
    const data = ['home', 'about', 'tokenomics', 'roadmap', 'whitepaper']

    return (
        <Flex bgColor={Colors.primary} w='100%' p='120px 0px 64px 96px'>
            <Flex gridGap='128px' justifyContent='space-between' w='60%' alignItems='flex-start'>

                <Flex flexDirection='column'>
                    <GamerhubLogo/>
                    <Text pt='38px' fontSize='14px'>GamerHub is introducing a multichain-based gaming aggregator platform that will give gamers unprecedented optionality in the field of play-to-earn.</Text>
                    <Text pt='20px' fontSize='16px'>Connect with the community</Text>
                    <Flex gridGap='24px' pt='20px' pb='80px'>
                        <TelegramIcon />
                        <DiscordIcon />
                        <TwitterIcon />
                        <MediumIcon />
                    </Flex>
                </Flex>

                    <Flex flexDirection='column' gridGap='32px' fontSize='14px'>
                        {data.map((datum) => <Text cursor="pointer" textTransform="capitalize" onClick={() => redirect('https://www.gamer-hub.io/')}>{datum}</Text>)}
                    </Flex>
            </Flex>
        </Flex>
    );
};

export default Footer;
