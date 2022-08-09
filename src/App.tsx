import ApplicationTheme from '@/components/ApplicationTheme'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { GenericModalContextProvider } from '@/context/GenericModalContext'

function App() {

	return (
		<ThemeContextProvider>
			<GenericModalContextProvider>
				<ApplicationTheme />
			</GenericModalContextProvider>
		</ThemeContextProvider>
	)
}

export default App
