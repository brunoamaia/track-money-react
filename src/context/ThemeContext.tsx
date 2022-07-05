import { createContext, ReactNode, useState } from 'react'

interface ThemeContextProps {
	isDarkTheme: boolean,
	handleChangeTheme: () => void,
}
  
export const ThemeContext = createContext({} as ThemeContextProps)

interface ThemeProps {
  children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeProps){
	const [isDarkTheme, setIsDarkTheme] = useState(true)

	const handleChangeTheme = () => {
		setIsDarkTheme(!isDarkTheme)
	}

	return (
		<ThemeContext.Provider 
			value={{ 
				isDarkTheme, 
				handleChangeTheme 
			}}
		>
			{ children }
		</ThemeContext.Provider>
	)
}
