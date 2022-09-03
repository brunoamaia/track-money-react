import { FormEvent, useState } from 'react'
import categories from '@/data/categories'
import { createNewAlphanumericCode } from '@/helpers/alphanumericGenerateHelpers'
import { formatDateToBrowser } from '@/helpers/dateFilter'
import { useItems } from '@/hooks/useItems'
import { Item } from '@/types/data'
import * as Sty from './styles'

interface Props {
	onAddItem: (item: Item) => void;
}

const InputArea = ({ onAddItem }: Props) => {
	const { itemsInUse } = useItems()
	const actualDate = formatDateToBrowser(new Date())
	const [ formDate, setFormDate] = useState<string>(actualDate)
	const [ formCategory, setFormCategory] = useState<string>('')
	const [ formTitle, setFormTitle] = useState<string>('')
	const [ formValue, setFormValue] = useState<number>(0)
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

	const handleSubmit = (event: FormEvent): void => {
		const formatDate = getFormatDataToSave()
		const newItem: Item = {
			date: formatDate,
			category: formCategory,
			title: formTitle,
			value: formValue,
			id: createNewAlphanumericCode(itemsInUse)
		}
		
		onAddItem(newItem)
		resetFormData()
		event.preventDefault()
	}

	return (
		<Sty.Container>
			<Sty.Form onSubmit={handleSubmit}>
				<Sty.Input>
					<label htmlFor='date'>Data</label>
					<input 
						type="date"
						id="date"
						name="date"
						value={formDate}
						onChange={(event) => setFormDate(event.target.value)}
						required
					/>
				</Sty.Input>
				<Sty.Input>
					<label htmlFor='category'>Categoria</label>
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
					<label htmlFor='title'>Titulo</label>
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
					<label htmlFor='value'>Valor</label>
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
				<button>Adicionar Item</button>
			</Sty.Form>
		</Sty.Container>
	)
}

export default InputArea
