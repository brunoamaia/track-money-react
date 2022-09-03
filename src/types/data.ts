export type Category = { 
	[tag: string]: {
		color: string
		expense: boolean
		title: string
		id: string
	}
}

export type Item = { 
	date: Date
	category: string
	title: string
	value: number
	id: string
}
