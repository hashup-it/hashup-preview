import React, {useState} from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {Colors} from "../../colors";
import FilterIcon from "../../Icons/filterIcon";
import PanelGames from "../../Components/PanelGames/panelGames";
import AllGames from "../../Components/AllGames/allGames";
import Footer from "../../Components/Footer/footer";
import axios from "axios";

const data = ['All', 'Adventure', 'NFT', 'Metaverse', 'Moba', 'Strategy', 'RPG', 'Multiplayer']

export const Games = () => {

    const [category, setCategory] = useState('All')

    console.log('kategoria to', category)

    return (
       <Flex w='100%' p='42px 24px' flexDirection='column' bgColor={Colors.primary}>
         <Text fontSize='42px' fontWeight='700'>Games</Text>
           <Flex pt='32px' alignItems='center' gridGap='16px'>
               {data.map(datum => <Flex cursor='pointer' onClick={() => setCategory(datum)} p='12px 28px' alignItems='center' justifyContent='center' bgColor={datum === category ? '#2A365A' : '#040B2A'} borderRadius='5px' border='1px solid #1B223E'>
               <Text>{datum}</Text>
           </Flex>)}
           </Flex>
           <Flex w='100%' justifyContent='space-between' pt='46px'>
                <Text fontSize='28px' fontWeight='700'>Games</Text>
               <Flex p='12px 40px' justifyContent='center' alignItems='center' gridGap='10px' bgColor='#222B52' borderRadius='5px' border='1px solid #2F385D'>
                   <Text>Filter</Text>
                   <FilterIcon />
               </Flex>
           </Flex>
           <Flex pt='38px'>
              <AllGames category={category}/>
           </Flex>
           <Footer />
       </Flex>
    );
};

export default Games;
