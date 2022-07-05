import ApplicationTheme from '@/components/ApplicationTheme'
import { ThemeContextProvider } from '@/context/ThemeContext'

function App() {

	return (
		<ThemeContextProvider>
			<ApplicationTheme />
		</ThemeContextProvider>
	)
}

export default App
