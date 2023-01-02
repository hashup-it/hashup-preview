import React from 'react';
import { Flex } from '@chakra-ui/react';

export enum CARTRIDGE_TYPE {
	GOLD = '#BEA379',
	RED = '#FF3F3F',
	GRAY = '#9D9D9D',
	CUSTOM = GRAY,
}

export const Cartridge = ({ type, symbol = null, ...props }: any) => {
	const id = type.toString().toUpperCase();

	return (
		<Flex
			p="0 5px"
			justifyContent="center"
			alignItems="center"
			fontSize="10px"
			lineHeight="12px"
			fontWeight="600"
			borderRadius="5px"
			color="white"
			// @ts-ignore
			bg={CARTRIDGE_TYPE[id]}
			{...props}
		>
			{symbol ?? id}
		</Flex>
	);
};
