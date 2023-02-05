import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import HomeIcon from "../../Icons/homeIcon";
import {useNavigate} from "react-router-dom";

export interface INavbarMenu {
    icon: React.ReactNode;
    text: string
    isActive?: boolean
    path: string
}

export const NavbarMenu = ({icon, text, isActive, path} : INavbarMenu) => {
    const history = useNavigate()
    const navigate = () => {
        history(path)
    }
    return (
        <Flex flexDir='column' alignItems='center' justifyContent='center' gridGap='8px' onClick={navigate} cursor='pointer'>
            <Flex alignItems='center' gridGap='15px' h='56px' w='230px' pl='32px' bgColor={isActive ? '#2C3252' : 'none'} border={isActive ? '1px solid rgba(239, 241, 246, 0.1)' : 'none'} borderRadius='6px'>
                {icon}
                <Text> {text} </Text>
            </Flex>
        </Flex>
    );
};

export default NavbarMenu;
