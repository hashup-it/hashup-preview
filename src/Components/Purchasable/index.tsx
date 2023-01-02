import { Button, Flex } from '@chakra-ui/react';
import { IGame } from '../Game/types';
import { Game } from '../Game';
import { useHashup } from '../../lib/hashup-react-sdk';

interface IPurchasable {
	game: IGame;
}

const LICENCES_BOUGHT = 1;

export const Purchasable = ({ game }: IPurchasable) => {
	const { buyGame } = useHashup();

	const handleLicenseBuy = async () => {
		await buyGame(game.address, LICENCES_BOUGHT);
	};

	return (
		<Flex
			direction="column"
			gap="16px"
		>
			<Game data={game} />
			<Button onClick={handleLicenseBuy}>Buy Now</Button>
		</Flex>
	);
};
