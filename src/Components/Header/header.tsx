import React, { useEffect, useState } from 'react';
import {Flex, Text, Box} from "@chakra-ui/react";
import {Colors} from "../../colors";
import SearchBox from "./searchBox";
import WalletBox from "./walletBox";
import UserProfile from "../Navbar/userProfile";
import { useLocation } from 'react-router-dom';

export const Header = ({setSearch, search} : {search: string; setSearch: React.Dispatch<React.SetStateAction<string>>}) => {
    const location = useLocation();

    const [user, setUser] = useState('')

    /** reset search on page change */
    useEffect(() => setSearch(''), [location])

    return (
        <Flex  userSelect="none" bgColor={Colors.primary} h='72px' alignItems='center' paddingX='24px' gridGap='40px' w='100%' justifyContent='space-between'>
            <SearchBox setSearch={setSearch} search={search}/>
            <Flex gridGap='40px' alignItems='center'>
                <WalletBox user={user} setUser={setUser} />
                {user && <UserProfile />}
            </Flex>
        </Flex>
    );
};

export default Header;
