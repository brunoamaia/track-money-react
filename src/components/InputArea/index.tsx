import { FormEvent, useState } from 'react';
import categories from '@/data/categories'
import { formatDateToBrowser } from  '@/helpers/dateFilter'
import { Item } from '@/types/data'
import * as Sty from './styles'

interface Props {
	onAddItem: (item: Item) => void;
}

const InputArea = ({ onAddItem }: Props) => {
	const actualDate = formatDateToBrowser(new Date())
	const [ selectedDate, setSelectedDate] = useState<string>(actualDate);
	const [ selectedCategory, setSelectedCategory] = useState<string>('');
	const [ selectedTitle, setSelectedTitle] = useState<string>('');
	const [ selectedValue, setSelectedValue] = useState<number>(0);
	const categoryKeys: string[] = Object.keys(categories);

	const resetFormData = () => {
		setSelectedCategory('')
		setSelectedDate(actualDate)
		setSelectedTitle('')
		setSelectedValue(0)
	}

	const getFormatDataToSave = (): Date => {
		const [year, month, day] = selectedDate.split('-')
		
		return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
	}

	const handleSubmit = (event: FormEvent): void => {
		const formatDate = getFormatDataToSave()
		const newItem: Item = {
			date: formatDate,
			category: selectedCategory,
			title: selectedTitle,
			value: selectedValue
		}
		
		onAddItem(newItem)
		resetFormData()
		event.preventDefault();
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
						value={selectedDate}
						onChange={(event) => setSelectedDate(event.target.value)}
						required
					/>
				</Sty.Input>
				<Sty.Input>
					<label htmlFor='category'>Categoria</label>
					<select
					name="category"
					id="category"
					onChange={event => setSelectedCategory(event.target.value)}
					value={selectedCategory}
					required
					>
						<option value={''}>Selecione uma categoria</option>
						{
							categoryKeys.map((key, index) => (
								<option key={index} value={key}>{categories[key].title}</option>
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
						value={selectedTitle}
						onChange={(event) => setSelectedTitle(event.target.value)}
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
						value={selectedValue}
						onChange={(event) => setSelectedValue(parseFloat(event.target.value))}
						required
					/>
				</Sty.Input>
				<button>Adicionar Item</button>
			</Sty.Form>
		</Sty.Container>
	)
}

export default InputArea
