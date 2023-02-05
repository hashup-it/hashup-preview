import React, {useState} from 'react';
import {Flex, Grid} from "@chakra-ui/react";
import {Purchasable} from "../Purchasable";
import {IGame} from "../Game/types";
import useAsyncEffect from "../../Hooks/effects/async";
import axios from "axios";

export const AllGames = ({category, search} : {search: string; category: string}) => {

    const [games, setGames] = useState<IGame[]>([]);

    useAsyncEffect(async () => {
        const payload = await axios.post(
			'https://open-api.hashup.it/v1/tokens/filter/',
			category === 'All'
				? {
						isVerified: true,
						chainId: 137,
						$or: [
							{ address: { $regex: `${search}.*`, $options: 'i' } },
							{ creator: { $regex: `${search}.*`, $options: 'i' } },
							{ name: { $regex: `${search}.*`, $options: 'i' } },
						],
				  }
				: {
						genres: { $in: [category.toLowerCase()] },
						isVerified: true,
						chainId: 137,
						$or: [
							{ address: { $regex: `${search}.*`, $options: 'i' } },
							{ creator: { $regex: `${search}.*`, $options: 'i' } },
							{ name: { $regex: `${search}.*`, $options: 'i' } },
						],
				  }
		);
		const data: IGame[] = payload.data;

        setGames(data.filter(datum => datum.isVerified));
    }, [category, search]);

    return (
        <Flex>
            <Grid templateColumns='repeat(4, 1fr)' gap='32px' alignItems='flex-end'>
                {games.map(data => (
                    <Purchasable
                        key={data.address}
                        game={data}
                    />
                ))}
            </Grid>
        </Flex>
    );
};

export default AllGames;
