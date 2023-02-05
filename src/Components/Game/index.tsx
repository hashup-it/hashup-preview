import React from 'react';
import { Flex, Image, Link, Text, Tooltip } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { IGame, IGameToken } from './types';
import { redirect } from '../../utils/redirector';
import { formatUsd, squashArray } from '../../utils/parser';
import { Cartridge } from '../Cartridge';
import {useNavigate} from "react-router-dom";

export const Game = ({ data }: { data: IGame & IGameToken }) => {

	const history = useNavigate()

	const today = new Date();
	const twoWeeksBefore = new Date(today.setDate(today.getDate() - 21));
	const createDate = new Date(data.createdAt);
	const isNew = createDate > twoWeeksBefore;

	const handleNavigate = () => {
		const navigate = history(`/game/${data.address}`);
	};

	return (
		<Link
			textDecoration="none"
			display="flex"
			cursor="pointer"
			flexDirection="column"
			gridGap="16px"
			onClick={handleNavigate}
			position="relative"
			overflow="visible"
		>
			{isNew && (
				<Flex
					position="absolute"
					top="-10px"
					left="-3px"
					borderRadius="4px"
					p="4px 10px"
					fontSize="10px"
					fontWeight="600"
					bg="black"
					overflow="visible"
					textTransform="uppercase"
					color="white"
				>
					Premiere
				</Flex>
			)}
			<Image
				height="auto"
				src={data.media.banner}
				objectFit="cover"
				userSelect="none"
				borderRadius="7px"
			/>
			<Flex
				paddingX="4px"
				flexDirection="column"
				gridGap="16px"
			>
				<Tooltip
					label={data.name}
					placement="bottom-start"
				>
					<Text
						fontSize="14px"
						lineHeight="18px"
						textOverflow="ellipsis"
						whiteSpace="nowrap"
						overflow="hidden"
					>
						{data.name}
					</Text>
				</Tooltip>
				<Flex
					justifyContent="space-between"
					alignItems="center"
				>
					<Cartridge
						type={data.color.toUpperCase()}
						symbol={data.symbol}
						fontSize="12px"
						lineHeight="15px"
						padding="2px 6px"
						fontWeight="400"
						borderRadius="2px"
					/>
					<Text
						fontWeight="600"
						fontSize="12px"
						lineHeight="14px"
					>
						{data.balance
							? `x${Math.floor(Number(data.balance) * 100) / 100}`
							: formatUsd(ethers.utils.formatUnits(data.price, 4))}
					</Text>
				</Flex>
			</Flex>
		</Link>
	);
};
