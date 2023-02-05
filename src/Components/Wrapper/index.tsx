import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IGame } from '../Game/types';
import axios from 'axios';
import useAsyncEffect from '../../Hooks/effects/async';
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";
import Banner from "../Banner/banner";
import PanelGames from "../PanelGames/panelGames";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleGameView from "../../pages/singleGameView";
import Marketplace from "../../pages/Marketplace/marketplace";
import Games from "../../pages/Games/games";
import Footer from "../Footer/footer";

export const Wrapper = () => {
	const [games, setGames] = useState<IGame[]>([]);
	const [search, setSearch] = useState('');

	const pages = [
		{
			path: '/game/:id',
			element: <SingleGameView />,
		},
		{
			path: '/games',
			element: <Games search={search} />,
		},
		{
			path: '/marketplace',
			element: <Marketplace search={search} />,
		},
		{
			path: '/',
			element: <><Banner />
				<PanelGames games={games} title='All games'/><Footer /></>,
		}

	].map((element, index) => ({ ...element, id: `${element.path}_${index}` }));

	useAsyncEffect(async () => {
		const payload = await axios.post('https://open-api.hashup.it/v1/tokens/filter', { "isVerified": true, "chainId": 137, "$or": [
				{"address": {"$regex": `${search}.*`, "$options": "i"}},
				{"creator": {"$regex": `${search}.*`, "$options": "i"}},
				{"name": {"$regex": `${search}.*`, "$options": "i"}},
			]});
		const data: IGame[] = payload.data;

		setGames(data.filter(datum => datum.isVerified));
	}, [search]);

	console.log('search to:', search)

	return (
		<Flex minH='100vh' >
			<BrowserRouter>
		<Navbar />
			<Flex direction='column' w='100%'>
			<Header setSearch={setSearch} search={search} />
					<Routes>
						{pages.map(({ path, element, id }) => (
							<Route path={path} element={element} key={id} />
						))}
					</Routes>

			</Flex>
		</BrowserRouter>
		</Flex>
	);
};
