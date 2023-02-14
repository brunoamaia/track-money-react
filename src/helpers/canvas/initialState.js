import createPieChart from './chartTypes/pie'

const clearChart = (ctx, heightTotal, widthTotal) => ctx.clearRect(0, 0, widthTotal, heightTotal)

const setInitialState = (canvas, data) => {
	const ctx = canvas.getContext('2d')
	const width = canvas.attributes.width.value
	const height = canvas.attributes.height.value

	clearChart(ctx, height, width)
	createPieChart(canvas, data)
}

const chartController = (currentData) => {
	const canvas = document.getElementById('canvas')

	if (canvas.getContext)
		setInitialState(canvas, currentData)
}

export default chartController
