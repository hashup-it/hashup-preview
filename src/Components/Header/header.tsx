import React, {useState} from 'react';
import {Flex, Text, Box} from "@chakra-ui/react";
import {Colors} from "../../colors";
import SearchBox from "./searchBox";
import WalletBox from "./walletBox";
import UserProfile from "../Navbar/userProfile";

export const Header = ({setSearch} : {setSearch: React.Dispatch<React.SetStateAction<string>>}) => {

    const [user, setUser] = useState('')

    return (
        <Flex bgColor={Colors.primary} h='72px' alignItems='center' paddingX='24px' gridGap='40px' w='100%' justifyContent='space-between'>
            <SearchBox setSearch={setSearch}/>
            <Flex gridGap='40px' alignItems='center'>
                <WalletBox user={user} setUser={setUser} />
                {user && <UserProfile />}
            </Flex>
        </Flex>
    );
};

export default Header;
