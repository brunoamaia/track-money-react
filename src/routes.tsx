import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categories from '@/pages/Categories'
import Home from '@/pages/Finance'
import NoMatch from '@/pages/NoMatch'

const Router = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/edit/categories' element={<Categories />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
