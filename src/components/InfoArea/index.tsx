import { formatCurrentMonth } from '@/helpers/dateFilter'
import ResumeItem from '@/components/InfoArea/ResumeItem';
import * as Sty from './styles';

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
		<Sty.Container>
			<Sty.MonthArea>
				<Sty.MonthArrow onClick={handlePrevMonth}>&#8656;</Sty.MonthArrow>
				<Sty.MonthTitle>{formatCurrentMonth(currentMonth)}</Sty.MonthTitle>
				<Sty.MonthArrow onClick={handleNextMonth}>&#8658;</Sty.MonthArrow>
			</Sty.MonthArea>
			<Sty.ResumeArea>
				<ResumeItem title='Receitas' value={income} />
				<ResumeItem title='Despesas' value={expense} />
				<ResumeItem title='Balanço' value={income - expense} color={ (income - expense) < 0 ? 'red' : 'green'} />
			</Sty.ResumeArea>
		</Sty.Container>
	)
}

export default InfoArea
