import ApplicationTheme from '@/components/ApplicationTheme'
import { GenericModalContextProvider } from '@/context/GenericModalContext'
import { ItemsContextProvider } from '@/context/ItemsContext'
import { ThemeContextProvider } from '@/context/ThemeContext'

function App() {

	return (
		<ThemeContextProvider>
			<GenericModalContextProvider>
				<ItemsContextProvider>
					<ApplicationTheme />
				</ItemsContextProvider>
			</GenericModalContextProvider>
		</ThemeContextProvider>
	)
}

export default App
