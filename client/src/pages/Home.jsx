import { useContext } from 'react'
import useTitle from '../hooks/useTitle'
import { ProblemContext } from '../main'
import HomeCard from '../ui/HomeCard'

const Home = () => {
	useTitle({ title: 'Главная' })
	const { problem } = useContext(ProblemContext)
	return (
		<main className='flex flex-col gap-y-5 mb-[90px] px-4 md:px-0 md:mb-5'>
			<p className='flex items-center justify-center font-semibold text-2xl pt-5 md:hidden'>
				Главная
			</p>
			<hr className='block border-white/60 border-solid md:hidden' />
			<div className='relative'>
				<img
					src='./home/hero.png'
					alt='hero'
					className='rounded-md w-full object-cover brightness-50 max-h-screen'
				/>
				<div className='absolute bottom-3 left-3 flex flex-col gap-y-2 md:bottom-10 md:max-w-[900px] md:gap-y-4 md:left-8'>
					<p className='font-bold text-2xl md:text-6xl'>
						Сделаем город лучше вместе
					</p>
					<p className='text-white/80 md:text-3xl md:font-semibold'>
						Оставьте заявку на нашем портале и мы обязательно ее рассмотрим
					</p>
				</div>
			</div>

			<p className='font-semibold text-lg px-0 md:px-4 md:text-4xl md:font-bold'>
				Последние решенные проблемы
			</p>
			{problem?.filter(e => e.status === 'Решена').length === 0 ? (
				<p className='text-center mt-5 font-bold text-xl md:text-2xl'>
					Мы еще не решили ни одной проблемы
				</p>
			) : (
				<div className='grid grid-cols-2 gap-4'>
					{problem &&
						[...problem]
							.filter(e => e.status === 'Решена')
							.slice(0, 2)
							.map(item => <HomeCard item={item} key={item.id}/>)}
				</div>
			)}
		</main>
	)
}

export default Home
