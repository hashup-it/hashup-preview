import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { useEthereum } from './useEthereum';

import StoreV0_ABI from '../abi/HashupStoreV0.json';

import ERC20_ABI from '../abi/ERC20.json';
import useAsyncEffect from '../../../Hooks/effects/async';

const STORE_ADDRESS = '0x9741708b2DeDE32c972D3EF7959Fa3262860E485';

export const useHashup = () => {
	const { isLoading, isNetworkValid, account, walletInstalled } = useEthereum();

	const [storeContract, setStoreContract] = useState<ethers.Contract | null>();
	const [paymentTokenContract, setPaymentTokenContract] = useState<ethers.Contract | null>();
	const [contractsLoaded, setContractsLoaded] = useState<boolean>(false);
	const [paymentTokenApprovedAmount, setPaymentTokenApprovedAmount] = useState(0);

	const buyGame = async (address: string, amount: number) => {
		if (contractsLoaded && storeContract && paymentTokenContract) {
			/** Check allowance */
			if (amount > paymentTokenApprovedAmount) {
				/** Approve */
				const approvementTransaction = await paymentTokenContract.approve(
					STORE_ADDRESS,
					ethers.constants.MaxUint256
				);
				await approvementTransaction.wait();
			}

			/** Purchase */
			const purchaseTransaction = await storeContract['buyCartridge(address,uint256)'](address, amount * 100);
			await purchaseTransaction.wait();
		}
	};

	/** Refresh on data change */
	useEffect(() => {
		(window as any).ethereum.on('accountsChanged', () => window.location.assign('/'));
		(window as any).ethereum.on('chainChanged', () => window.location.assign('/'));
	}, [walletInstalled]);

	useEffect(() => {
		if (!isLoading && isNetworkValid) {
			let provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

			provider.getSigner();

			const newStoreContract = new ethers.Contract(STORE_ADDRESS, StoreV0_ABI, provider.getSigner());

			console.log(newStoreContract);

			const newPaymentTokenContract = new ethers.Contract(
				'0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
				ERC20_ABI,
				provider.getSigner()
			);

			setPaymentTokenContract(newPaymentTokenContract);
			setStoreContract(newStoreContract);
		}
	}, [isNetworkValid, isLoading]);

	useEffect(() => {
		if (isNetworkValid && storeContract) {
			setContractsLoaded(true);
		}
	}, [isLoading, storeContract, isNetworkValid]);

	/** Cache allowance */
	useAsyncEffect(async () => {
		if (!paymentTokenContract || !account) {
			return;
		}

		const approval = await paymentTokenContract.allowance(account, STORE_ADDRESS);
		setPaymentTokenApprovedAmount(approval);
	}, [paymentTokenContract, account]);

	return {
		isLoading,
		isNetworkValid,
		buyGame,
		contractsLoaded,
	};
};
