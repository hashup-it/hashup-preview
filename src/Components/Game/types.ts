export interface IGame {
	colors: {
		actionColor: string;
		textColor: string;
		backgroundColor: string;
	};
	socials: {
		facebook: string;
		twitter: string;
		youtube: string;
		discord: string;
	};
	screenshots: string[];
	genres: string[];
	platforms: string[];
	creatorFee: string;
	creator: string;
	symbol: string;
	color: string;
	name: string;
	totalSupply: string;
	address: string;
	price: string;
	description: string;
	gameUrl: string;
	gamepaper: string;
	video: string;
	isVerified: true;
	chain: string;
	chainId: number;
	minimumAge: number;
	createdAt: string;
	updatedAt: string;
}

export interface IGameToken {
	address?: string;
	balance?: string;
}
