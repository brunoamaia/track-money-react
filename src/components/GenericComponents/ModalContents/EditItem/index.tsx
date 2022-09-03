import { useEffect, useState } from 'react'
import categories from '@/data/categories'
import { handleEditItem } from '@/helpers/data/editItems'
import { formatDateToBrowser } from '@/helpers/dateFilter'
import { useGenericModal } from '@/hooks/useGenericModal'
import { useItems } from '@/hooks/useItems'
import { Item } from '@/types/data'
import * as Sty from './styles'

interface Props {
	item: Item
}

const EditItem = ({ item }: Props) => {
	const { itemsInUse, setItemsInUse } = useItems()
	const { handleConfirmAction, finishConfirmAction } = useGenericModal()
	const actualDate = formatDateToBrowser(item.date)
	const [ formDate, setFormDate] = useState<string>(actualDate)
	const [ formCategory, setFormCategory] = useState<string>(item.category)
	const [ formTitle, setFormTitle] = useState<string>(item.title)
	const [ formValue, setFormValue] = useState<number>(item.value)
	const categoryKeys: string[] = Object.keys(categories)

	const resetFormData = () => {
		setFormCategory('')
		setFormDate(actualDate)
		setFormTitle('')
		setFormValue(0)
	}

	const getFormatDataToSave = (): Date => {
		const [year, month, day] = formDate.split('-')
		
		return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
	}

	const handleSubmit = (): void => {
		const formatDate = getFormatDataToSave()
		const newItem: Item = {
			date: formatDate,
			category: formCategory,
			title: formTitle,
			value: formValue,
			id: item.id
		}
		
		handleEditItem(itemsInUse, setItemsInUse, newItem)
		resetFormData()
	}
	
	useEffect(() => {
		if (handleConfirmAction) {
			handleSubmit()
			finishConfirmAction()
		}
	}, [handleConfirmAction])

	return (
		<Sty.Container>
			<Sty.Form onSubmit={handleSubmit}>
				<Sty.Input>
					<label htmlFor='date'>Data:</label>
					<input 
						type="date"
						id="date"
						name="date"
						value={formDate}
						onChange={(event) => setFormDate(event.target.value)}
						autoFocus={false}
						required
					/>
				</Sty.Input>
				<Sty.Input>
					<label htmlFor='category'>Categoria:</label>
					<select
						name="category"
						id="category"
						onChange={event => setFormCategory(event.target.value)}
						value={formCategory}
						required
					>
						<option value={''}>Selecione uma categoria</option>
						{
							categoryKeys.map((key, index) => (
								<option key={index} value={key}>{ categories[key].title }</option>
							))
						}

					</select>
				</Sty.Input>
				<Sty.Input>
					<label htmlFor='title'>Titulo:</label>
					<input 
						type="text"
						id="title"
						name="title"
						value={formTitle}
						onChange={(event) => setFormTitle(event.target.value)}
						required
					/>
				</Sty.Input>
				<Sty.Input>
					<label htmlFor='value'>Valor:</label>
					<input
						type="number"
						id="value"
						name="value"
						step="0.01"
						min='0'
						value={formValue}
						onChange={(event) => setFormValue(parseFloat(event.target.value))}
						required
					/>
				</Sty.Input>
			</Sty.Form>
		</Sty.Container>
	)
}

export default EditItem
