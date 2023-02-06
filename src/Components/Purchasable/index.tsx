import { IGame } from '../Game/types';
import { Game } from '../Game';

interface IPurchasable {
	game: IGame;
}

export const Purchasable = ({ game }: IPurchasable) => {
	return <Game data={game} />;
};
