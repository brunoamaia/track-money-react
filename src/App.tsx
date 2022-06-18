import { Fragment } from 'react'
import { GlobalStyle } from '@/GlobalStyle'
import Router from './routes'

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<Router />
		</Fragment>
	)
}

export default App
