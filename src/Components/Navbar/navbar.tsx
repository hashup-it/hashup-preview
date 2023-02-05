import React, {useEffect, useState} from 'react';
import {Box, Flex, Text} from "@chakra-ui/react";
import GamerhubLogo from "../../Icons/gamerhubLogo";
import {Colors} from "../../colors";
import NavbarMenu, {INavbarMenu} from "./navbarMenu";
import HomeIcon from "../../Icons/homeIcon";
import GamesIcon from "../../Icons/gamesIcon";
import {useLocation, useNavigate} from "react-router-dom";


export const Navbar = () => {

    const history = useNavigate()
    const location = useLocation()
    const navigate = () => {
        history('/')
    }

    return (
        <Flex w='264px' bgColor={Colors.secondary} pt='30px' justifyContent='center'>
            <Flex flexDir='column' gridGap='40px' alignItems='center'>
                <Box cursor='pointer' onClick={navigate}><GamerhubLogo/></Box>
                <Flex flexDir='column' gridGap='8px'>
                    <NavbarMenu icon= {<HomeIcon />} text='Home' path='/' isActive={location.pathname === '/'} />
                    <NavbarMenu icon= {<GamesIcon />} text='Games' path='/games' isActive={location.pathname.startsWith('/game')} />
                    <NavbarMenu icon= {<HomeIcon />} text='Marketplace' path='/marketplace' isActive={location.pathname === '/marketplace'} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
