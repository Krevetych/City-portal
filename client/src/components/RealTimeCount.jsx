import { useContext, useEffect, useState } from 'react'
import { ProblemContext } from '../main'

const RealTimeCount = () => {
	const { problem } = useContext(ProblemContext)
	const [count, setCount] = useState(
		problem?.filter(e => e.status === 'Решена').length
	)

	useEffect(() => {
		let time = setInterval(() => {
			const prevCount = problem?.filter(e => e.status === 'Решена').length
			if (prevCount !== count) {
				playMusic()
			}
			setCount(prevCount)
		}, 1000)

		return () => {
			clearInterval(time)
		}
	})

	const playMusic = () => {
		const audio = new Audio('./notify.mp3')
		audio.play()
	}

	return (
		<div
			className={`fixed z-50 flex gap-2 bottom-[81px] text-sm bg-primary w-fit opacity-20 font-bold right-0 p-3 m-2 rounded-lg duration-500 hover:opacity-100 md:bottom-0 md:text-xl`}
		>
			Решенных заявок: {count}
		</div>
	)
}

export default RealTimeCount
