import { useState } from 'react';
import { Item } from '@/types/data'
import categories from '@/data/categories'
import * as Sty from './styles'

interface Props {
	onAddItem: (item: Item) => void;
}

const InputArea = ({ onAddItem }: Props) => {
	const [ selectedDate, setSelectedDate] = useState<string>();
	const [ selectedCategory, setSelectedCategory] = useState<string>('');
	const [ selectedTitle, setSelectedTitle] = useState<string>('');
	const [ selectedValue, setSelectedValue] = useState<number>();
	let categoryKeys: string[] = Object.keys(categories);

	const handleAddItem = () => {
		const newItem: Item = {
			date: new Date(2022, 6, 10),
			category: 'salary',
			title: 'Item de teste',
			value: 123.45
		}

		onAddItem(newItem)
	}

	const handleSubmit = (event: any) => {
		alert(`Titulo: ${selectedTitle}\nData: ${selectedDate}\nCategoria: ${selectedCategory}\nValor: ${selectedValue}`);
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
					onChange={e => setSelectedCategory(e.target.value)}
					defaultValue={''}
					required
					>
						<option value={''} selected disabled hidden>Selecione uma categoria</option>
						{
							categoryKeys.map((key, index) => (
								<option key={index} value={categories[key].title}>{categories[key].title}</option>
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
