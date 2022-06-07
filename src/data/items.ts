interface Item { 
	date: Date,
	category: string,
	title: string,
	value: number
}

const items: Item[] = [
	{ date: new Date(2022, 5, 6), category: 'food', title: 'McDonalds', value: 15.12 },
	{ date: new Date(2022, 5, 6), category: 'food', title: 'Burger King', value: 30.00 },
	{ date: new Date(2022, 4, 18), category: 'rent', title: 'Aluguel Apt', value: 2300.00 },
	{ date: new Date(2022, 4, 22), category: 'salary', title: 'Salário ACME', value: 4500.00 }
]

export default items
