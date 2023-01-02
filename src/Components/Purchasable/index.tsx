import { Button, Flex } from '@chakra-ui/react';
import { IGame } from '../Game/types';
import { Game } from '../Game';

interface IPurchasable {
	game: IGame;
}

export const Purchasable = ({ game }: IPurchasable) => {
	const handlePurchase = () => {
	};

	return (
		<Flex direction="column" gap="16px">
			<Game data={game} />
			<Button onClick={handlePurchase}>Buy Now</Button>
		</Flex>
	);
};
