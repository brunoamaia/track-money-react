import { primaryColors } from '../colors'
import categories from '@/data/categories'

const removeCenterOfPie = (ctx, centerOfCircle, radius, customBackgroundColor = null) => {
	const totalCircle = 2 * Math.PI
	const backgroundColor = customBackgroundColor || primaryColors.background

	ctx.strokeStyle = backgroundColor
	ctx.fillStyle = backgroundColor
	ctx.beginPath()
	ctx.arc(centerOfCircle.xAxis, centerOfCircle.yAxis, radius/2, totalCircle, false)
	ctx.fill()
	ctx.stroke()
}

const getCategoriesAndValues = (data) => {
	const keys = [...new Set(data.map(item => item.category))]
	let categoriesAndValues = []

	for (let currentKey of keys) {
		const value = data.reduce((sum, {category, value}) => currentKey === category ? sum + value : sum, 0)
		let color

		Object.entries(categories).forEach(([key, value]) => {
			if (key === currentKey)
				color = value.color
		})

		categoriesAndValues.push({category: currentKey, color, value})
	}

	console.log(data)
	console.log(categoriesAndValues)
	return categoriesAndValues
}

const createPieChart = (ctx, centerOfCircle, data, radiusOfCircle) => {
	const categoriesAndValues = getCategoriesAndValues(data)
	const totalData = data.reduce((sum, {value}) => sum + value, 0)
	let currentAngle = 0

	for (let category of categoriesAndValues) {
		const { color, value} = category
		let proportionalAngle = (value / totalData) * 2 * Math.PI

		//drawing an arc and a line to the center to differentiate the slice from the rest
		ctx.beginPath()
		ctx.arc(centerOfCircle.xAxis, centerOfCircle.yAxis, radiusOfCircle, currentAngle, currentAngle + proportionalAngle)
		currentAngle += proportionalAngle
		ctx.lineTo(centerOfCircle.xAxis, centerOfCircle.yAxis)
		ctx.fillStyle = color
		ctx.fill()
	}
}

const drawPieChart = (canvas, data) => {
	const ctx = canvas.getContext('2d')
	const width = canvas.attributes.width.value
	const border = 10
	const radiusOfCircle = (width - 2*border)/2
	const centerOfCircle = {
		xAxis: radiusOfCircle + border,
		yAxis: radiusOfCircle + border
	}

	createPieChart(ctx, centerOfCircle, data, radiusOfCircle)
	removeCenterOfPie(ctx, centerOfCircle, radiusOfCircle)
}

export default drawPieChart
