import { ThemeProvider } from 'styled-components'
import { useTheme } from '@/hooks/useTheme'
import Router from '@/routes'
import { GlobalStyle } from '@/GlobalStyle'
import { darkTheme, lightTheme } from '@/Styles/Themes'

function ApplicationTheme() {
	const { isDarkTheme } = useTheme()

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	)
}

ApplicationTheme.displayName = 'components/ApplicationTheme'

export default ApplicationTheme
