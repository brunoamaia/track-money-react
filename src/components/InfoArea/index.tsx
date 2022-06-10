import { formatCurrentMonth } from '@/helpers/dateFilter'
import ResumeItem from '@/components/InfoArea/ResumeItem';
import * as Stl from '@/styles/components/infoArea';

interface Props {
	currentMonth: string
	expense: number
	income: number
	onMonthChange: (newMonth: string) => void
}

const InfoArea = ({ currentMonth, expense, income, onMonthChange }: Props) => {
	const changeMonth = (isNext: boolean) => {
		const [year, month] = currentMonth.split('-')
		let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

		currentDate.setMonth( isNext ? currentDate.getMonth() + 1 : currentDate.getMonth() - 1)

		onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
	}
	const handlePrevMonth = () => changeMonth(false)
	const handleNextMonth = () => changeMonth(true)

	return (
		<Stl.Container>
			<Stl.MonthArea>
				<Stl.MonthArrow onClick={handlePrevMonth} >⬅️</Stl.MonthArrow>
				<Stl.MonthTitle>{formatCurrentMonth(currentMonth)}</Stl.MonthTitle>
				<Stl.MonthArrow onClick={handleNextMonth}>➡️</Stl.MonthArrow>
			</Stl.MonthArea>
			<Stl.ResumeArea>
				<ResumeItem title='Receitas' value={income} />
				<ResumeItem title='Despesas' value={expense} />
				<ResumeItem title='Balanço' value={income - expense} color={ (income - expense) < 0 ? 'red' : 'green'} />
			</Stl.ResumeArea>
		</Stl.Container>
	)
}

export default InfoArea
