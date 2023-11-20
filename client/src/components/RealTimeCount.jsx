import { useContext, useEffect, useState } from 'react'
import { ProblemContext } from '../main'

const RealTimeCount = () => {
	const { problem } = useContext(ProblemContext)
	const [visible, setVisible] = useState(true)
	const [count, setCount] = useState(
		problem?.filter(e => e.status === 'Решена').length
	)

	const click = () => {
		if (
			confirm(
				'Вы уверены? Вернуть счетчик можно будет только перезагрузкой страницы'
			)
		) {
			setVisible(false)
		} else {
			alert('Спасибо, что не стали скрывать счетчик')
		}
	}

	useEffect(() => {
		let time = setInterval(() => {
			setCount(problem?.filter(e => e.status === 'Решена').length)
		}, 1000)

		return () => {
			clearInterval(time)
		}
	})

	return (
		<div
			className={`${
				!visible ? 'opacity-0' : 'opacity-100'
			} fixed z-50 flex gap-2 bottom-[81px] text-md bg-primary w-fit font-bold right-0 p-3 m-2 rounded-lg duration-500 md:bottom-0 md:text-xl`}
		>
			Количество решенных заявок: {count}
			<img src='./modal/close.svg' alt='' onClick={click} />
		</div>
	)
}

export default RealTimeCount
