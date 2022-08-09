import { useGenericModal } from '@/hooks/useGenericModal'
import { Item } from '@/types/data'
import { medium } from '@/constants/styles/dimensions'
import edit from '/edit.svg'
import * as Sty from './styles'

interface Props {
	item: Item
}

const TableItem = ({ item }: Props) => {
	const { openGenericModal } = useGenericModal()
	const title = 'Editar conteúdo'
	const handleSave = () => console.log('Salvar')
	const dimensions = {
		height: medium,
		width: medium
	}
	const ModalContent = (
		<div>
			<div> Data: { JSON.stringify(item.date) }</div>
			<div>Categoria: { item.category }</div>
			<div>Título: { item.title }</div>
			<div>Valor: { item.value }</div>
		</div>
	)
	const modalParameters = {
		dimensions,
		ModalContent,
		title,
		confirmAction: () => handleSave
	}
	const habilitar = () => openGenericModal(modalParameters)
	
	return (
		<Sty.EditWrapper className="edit-item">
			<button type="button" onClick={habilitar}>
				<img src={edit} />
			</button>
		</Sty.EditWrapper>
	)
}

export default TableItem
