import { useContext, useState } from 'react'
import { AuthContext } from '../main'
import Card from '../ui/Card'

const Cards = () => {
	const { user } = useContext(AuthContext)
	const problem = user.problems && [...user.problems].reverse()
	const [filteredData, setFilteredData] = useState(problem)

	const filteredByStatus = status => {
		setFilteredData(problem.filter(problem => problem.status === status))
	}
	const stats = Array.from(new Set(problem?.map(problem => problem.status)))

	const data = () => {
		if (filteredData?.length === 0 || filteredData === undefined) {
			return problem
		} else {
			return filteredData
		}
	}

	console.log(problem?.length)

	return (
		<>
			{problem?.length === 0 || problem === undefined ? null : (
				<>
					<select
						onChange={e => filteredByStatus(e.target.value)}
						className='py-2 px-3 mt-5 w-full text-center rounded-lg text-lg text-black font-semibold outline-none placeholder: placeholder:font-extralight md:w-1/3 md:mx-5'
					>
						<option value='#' className='text-lg font-semibold'>
							Статус заявки:
						</option>
						{stats.map(stat => (
							<option key={stat} className='text-lg font-semibold'>
								{stat}
							</option>
						))}
					</select>
					<div className='mt-5 flex flex-col gap-y-5'>
						{data()?.map(item => (
							<div key={item.id}>
								<Card item={item} />
							</div>
						))}
					</div>
				</>
			)}
		</>
	)
}

export default Cards
