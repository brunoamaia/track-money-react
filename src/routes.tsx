import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Finance'
import Categories from '@/pages/Categories'
import NoMatch from '@/pages/NoMatch'

interface Props {
	switchTheme: () => void
}
const Router = ({ switchTheme }: Props) => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home switchTheme={switchTheme} />} />
				<Route path='/edit/categories' element={<Categories />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
