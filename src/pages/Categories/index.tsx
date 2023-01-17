import { Fragment } from 'react'
import Body from '@/components/Body'
import Header from '@/components/Header'

function Categories() {
	return (
		<Fragment>
			<Header page={'Categorias'} />
			<Body />
		</Fragment>
	)
}

Categories.displayName = 'pages/Categories'

export default Categories
