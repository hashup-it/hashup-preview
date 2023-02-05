import {ethers} from "ethers";

export const emptyGame: IGame = {
	address: ethers.constants.AddressZero,
	color: '',
	chain: "",
	chainId: 0,
	minimumAge: 0,
	colors: { actionColor: '', backgroundColor: '', textColor: '' },
	createdAt: '',
	description: '',
	gameUrl: '',
	gamepaper: '',
	isVerified: false,
	media: { cover:'', icon: '', banner: '', coverImageUrl: '', logoUrl: '' },
	name: '',
	price: '0',
	screenshots: [],
	socials: { discord: '', facebook: '', twitter: '', youtube: '' },
	symbol: '',
	updatedAt: '',
	video: '',
	genres: [],
	platforms: [],
	totalSupply: '',
	creator: '',
	creatorFee: '',
	marketplaceFee: ''
};


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
	media: {
		cover: string;
		logoUrl: string /** used */;
		banner: string /** used */;
		icon: string;
		coverImageUrl: string /** used */;
	},
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
	isVerified: boolean;
	chain: string;
	chainId: number;
	minimumAge: number;
	createdAt: string;
	updatedAt: string;
	marketplaceFee: string,
}

export interface IGameToken {
	address?: string;
	balance?: string;
}
