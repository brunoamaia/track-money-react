import { Fragment } from 'react'
import Header from '@/components/Header'
import Body from '@/components/Body'

interface Props {
	switchTheme: () => void;
}

function Finance({ switchTheme }: Props) {
	return (
		<Fragment>
			<Header switchTheme={switchTheme} page={'Resumo'} />
			<Body />
		</Fragment>
	)
}

export default Finance
