import { useState } from 'react'
import Modal from '@/components/GenericComponents/Modal'
import { Item } from '@/types/data'
import edit from '/edit.svg'
import * as Sty from './styles'

interface Props {
	item: Item
}

const TableItem = ({ item }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const confirmAction = () => console.log('Editar')
	const onChangeModalState = (newState: boolean) => {
		console.log('Modal normal',newState)
		setIsOpen(newState)
	}
	
	return (
		<Sty.EditWrapper className="edit-item">
			<button type="button" onClick={() => onChangeModalState(true)}>
				<img src={edit} />
			</button>
			<Modal
				isOpen={isOpen}
				modalTitle={'Editar item'}
				onChangeModalState={onChangeModalState}
				onConfirmModalAction={confirmAction}
			>
				<div>
					<div> Data: { JSON.stringify(item.date) }</div>
					<div>Categoria: { item.category }</div>
					<div>Título: { item.title }</div>
					<div>Valor: { item.value }</div>
				</div>
			</Modal>
		</Sty.EditWrapper>
	)
}

export default TableItem
