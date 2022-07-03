import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/GlobalStyle'
import Router from './routes'
import { darkTheme, lightTheme } from '@/Styles/Themes'

function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(true)
	const onSwitchTheme = () => {
		console.log('chamou')
		console.log(isDarkTheme)
		setIsDarkTheme(!isDarkTheme)
	}

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Router switchTheme={onSwitchTheme} />
		</ThemeProvider>
	)
}

export default App
