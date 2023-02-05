import React, {useEffect} from 'react';
import {Flex, Text} from "@chakra-ui/react";
import WalletIcon from "../../Icons/walletIcon";
import ChevronDown from "../../Icons/chevronDown";
import {Colors} from "../../colors";
import {fetchAccounts} from "../../utils/ethereum";
import {trimAddress} from "../../utils/parser";

export const WalletBox = ({user, setUser}: {user: string, setUser: React.Dispatch<React.SetStateAction<string>>}) => {

    const handleConnect = async () => {
        const result = await fetchAccounts()
        setUser(result[0])
    }

    useEffect(() => void handleConnect(), [])


    return (
      <Flex cursor='pointer' onClick={handleConnect} bgColor={Colors.secondary} alignItems='center' justifyContent='center' h='48px' borderRadius='5px' gridGap='10px' paddingX='10px' border='1px solid rgba(255, 255, 255, 0.05)'>
          <WalletIcon />
          {user ? (<Flex alignItems='center'> <Text fontSize='15px'>{trimAddress(user)}</Text> <ChevronDown/> </Flex> ) : <Text fontSize='15px'>Connect wallet</Text>}
      </Flex>
    );
};

export default WalletBox;
