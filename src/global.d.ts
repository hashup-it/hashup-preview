import { ExternalProvider } from '@ethersproject/providers';

interface EthereumProvider extends ExternalProvider {
	_state: {
		accounts: string[];
	};

	on(event: 'close' | 'accountsChanged' | 'chainChanged' | 'networkChanged', callback: (payload: any) => void): void;

	once(
		event: 'close' | 'accountsChanged' | 'chainChanged' | 'networkChanged',
		callback: (payload: any) => void
	): void;

	removeAllListeners(): void;
}

declare global {
	interface Window {
		ethereum: EthereumProvider;
	}
}
