import { Fragment } from 'react'
import Body from '@/components/Body'
import Header from '@/components/Header'
import ModalUseContext from '@/components/GenericComponents/ModalUseContext'

function Finance() {
	return (
		<Fragment>
			<Header page={'Resumo'} />
			<Body />
			<ModalUseContext />
		</Fragment>
	)
}

export default Finance
