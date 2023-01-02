export const redirect = (uri: string, newTarget = true) => {
	window.open(uri, newTarget ? '_blank' : '_self')?.focus();
};
