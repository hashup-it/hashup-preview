import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { IGame } from '../Game/types';
import axios from 'axios';
import useAsyncEffect from '../../Hooks/effects/async';
import { Purchasable } from '../Purchasable';

export const Wrapper = () => {
	const [games, setGames] = useState<IGame[]>([]);

	useAsyncEffect(async () => {
		const payload = await axios.post('https://open-api.hashup.it/v1/tokens/polygon');
		const data: IGame[] = payload.data;

		setGames(data);
	}, []);

	return (
		<Flex
			flexWrap="wrap"
			gap="24px"
			rowGap="44px"
			justifyContent="center"
			my="32px"
		>
			{games.map(data => (
				<Purchasable
					key={data.address}
					game={data}
				/>
			))}
		</Flex>
	);
};
