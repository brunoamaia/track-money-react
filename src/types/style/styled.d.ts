import 'styled-components'
import { CommonStyles} from './commonStyles'

declare module 'styled-components' {
	export interface DefaultTheme {
		background: string;
		body: string;
		tableBody: string,
		tableBodyDark: string,
		tableBodyLight: string,
		tableHeader: string,
		text: string;
		commonStyles: CommonStyles
	}
}
