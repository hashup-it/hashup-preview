import React from 'react';
import {Box, Flex, Input, InputGroup, Text} from "@chakra-ui/react";
import {Colors} from "../../colors";
import SearchIcon from "../../Icons/searchIcon";

export const SearchBox = ({setSearch, search} : {search: string; setSearch: React.Dispatch<React.SetStateAction<string>>}) => {

    return (
        <InputGroup bgColor={Colors.secondary} h='48px' w='305px'>
            <Input value={search} onChange={(event) => setSearch(event.target.value)} _focus={{ boxShadow: 'none', outline: '0 !important' }} border='none' w='100%' position='relative' h='48px' alignItems='center' pl='24px' borderRadius='5px' placeholder='Search'/>
            <Flex position='absolute' justifyContent='flex-end' alignItems='flex-end' left='85%'>
            <Box cursor="pointer" onClick={() => setSearch(prev => prev)} display='flex' w='48px' h='48px' bgColor='#222746' justifyContent='center' alignItems='center' borderRadius='3px' zIndex='100000'>
                <SearchIcon />
            </Box>
            </Flex>
        </InputGroup>
    );
};

export default SearchBox;
