import { createGlobalStyle } from 'styled-components';
import { theme } from './theme.styles';

export const GlobalStyle = createGlobalStyle`
    body {
		font-family: ${theme.font};
		margin: ${theme.navbarHeight} auto 0;
		/* max-width: 1440px; */
		background-color: ${theme.colors.background};

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
