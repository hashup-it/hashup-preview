import { styles } from './global';
import { button } from './components/button';
import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
	styles,
	colors: {
		action: '#FF3F3F',
	},
	components: {
		Button: button,
	},
});
