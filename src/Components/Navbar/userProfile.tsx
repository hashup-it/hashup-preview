import React from 'react';
import {Box, Flex, Modal, ModalContent, Text, useDisclosure} from "@chakra-ui/react";
import {Colors} from "../../colors";
import ChevronDown from "../../Icons/chevronDown";

export const UserProfile = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Flex cursor='pointer' onClick={onOpen} h='72px' w='273px' border='1px solid #0F204C' p='20px 22px 10px 22px' gridGap='16px'
              alignItems='flex-start'>
            <Flex justifyContent='space-between' w='100%'>
                <Flex>
                    <Box backgroundImage='/assets/images/userprofile_placeholder.png' backgroundPosition="center"
                         backgroundRepeat="no-repeat" backgroundSize="cover" w='40px' h='40px' borderRadius='50%'
                         border='1px solid #BA1280' display='flex'/>
                    <Flex justifyContent='space-between' flexDirection='column' pl='16px'>
                        <Text color='#BEC9DA'>Gamer 1</Text>
                        <Box h='1px' bgColor={Colors.acent} w='100%'/>
                    </Flex>
                </Flex>
                <Flex alignItems='center'>
                    <Box position='relative'>
                        <Box display='flex' w='24px' h='24px'>
                        <ChevronDown/>
                        </Box>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalContent userSelect="none" position='absolute' right='40px' w='269px' h='120px' bgColor='transparent' border='1px solid #FFFFFF15'
                                              borderRadius='5px'>
                                    <Flex alignItems='center' backdropFilter='blur(24px)' w='100%' h='100%' p='16px 8px'
                                          border='1px solid #FFFFFF15' borderRadius='5px'>
                                        <Flex flexDirection='column' gridGap='12px' w='100%'>
                                            <Text pl="16px" cursor="not-allowed">Profile</Text>
                                            <Box bgColor='#FFFFFF15' w='100%' h='1px'/>
                                            <Text pl="16px" cursor="pointer">Sign Out</Text>
                                        </Flex>
                                    </Flex>
                                </ModalContent>
                            </Modal>

                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default UserProfile;
