import { Fragment } from 'react'
import Body from '@/components/Body'
import Header from '@/components/Header'
import ModalConfirmActions from '@/components/GenericComponents/ModalConfirmActions'

function Finance() {
	return (
		<Fragment>
			<Header page={'Resumo'} />
			<Body />
			<ModalConfirmActions />
		</Fragment>
	)
}

export default Finance
