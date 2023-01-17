import ItemData from '@/components/GenericComponents/ModalContents/ItemData'
import { useGenericModal } from '@/hooks/useGenericModal'
import { Item } from '@/types/data'
import { small, medium } from '@/constants/styles/dimensions'
import edit from '/edit.svg'
import * as Sty from './styles'

interface Props {
	item: Item
}

const EditItem = ({ item }: Props) => {
	const { openGenericModal } = useGenericModal()
	const title = 'Editar conteúdo'
	const handleSave = () => console.log('Salvar')
	const dimensions = {
		height: medium,
		width: small
	}
	const ModalContent = <ItemData item={item} />
	const modalParameters = {
		nameConfirmAction: 'Editar',
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

EditItem.displayName = 'components/TableArea/TableItem/EditItem'

export default EditItem
