export const trimAddress = (address: string) => `${address.slice(0, 6)}…${address.slice(34, 38)}`;
export const trimTransactionId = (id: string) => `${id.slice(0, 6)}…${id.slice(63, 67)}`;

export const trimString = (ifLongerThan: number, target: string) => {
	return target.length > ifLongerThan ? `${target.substring(0, ifLongerThan)}…` : target;
};

const formatFixedDecimals = (amount: string | number, decimals: number) => Number(amount).toFixed(decimals);
export const formatUsd = (amount: string | number) => `$${formatFixedDecimals(amount, 2)}`;
export const formatCartridge = (amount: string | number) => formatFixedDecimals(amount, 2);

export const convertSnakeToCamelCase = (token: string) =>
	token.toLowerCase().replace(/(_\w)/g, group => group.toUpperCase().replace('_', ''));

export const isLinkExternal = (uri: string) => uri.startsWith('http');

export const capitalizeFirstLetter = (content: string) => `${content.charAt(0).toUpperCase()}${content.slice(1)}`;

/**
 * value                decimal places
 * [0, 0.0009]          full
 * [0.001, 0.999]       2
 * [1.00, 999.99]       2
 * [1000.0, 99999.9]    1
 * [100000, +inf]       0
 * @param balance input string
 */
export const trimBalance = (balance: string) => {
	const numericApproximation = parseFloat(balance);

	const decimalSeparatorIndex = balance.indexOf('.');

	if (numericApproximation >= 0 && numericApproximation < 0.001) {
		return balance;
	}
	if (numericApproximation >= 0.001 && numericApproximation < 1) {
		return balance.substring(0, decimalSeparatorIndex + 3);
	}
	if (numericApproximation >= 1 && numericApproximation < 1000) {
		return balance.substring(0, decimalSeparatorIndex + 3);
	}
	if (numericApproximation >= 1000 && numericApproximation < 100000) {
		return balance.substring(0, decimalSeparatorIndex + 2);
	}
	if (numericApproximation >= 100000) {
		return balance.substring(0, decimalSeparatorIndex);
	}

	return balance;
};

export const squashArray = <T>(data: Array<T>): T[] => data.filter(datum => !!datum);
