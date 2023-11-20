import { useContext } from 'react'
import useTitle from '../hooks/useTitle'
import { ProblemContext } from '../main'

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
				<p className='text-center mt-5 font-bold text-2xl'>
					Мы еще не решили ни одной проблемы
				</p>
			) : (
				problem &&
				[...problem]
					.filter(e => e.status === 'Решена')
					.slice(0, 2)
					.map(item => (
						<div className='flex flex-col gap-y-1' key={item.id}>
							<div className='relative'>
								<img
									src={item.afterImg}
									alt=''
									className='w-full h-[150px] opacity-100 object-cover rounded-lg scale-95 ease-in duration-300 hover:opacity-0 hover:scale-100 md:h-[500px] md:duration-500'
								/>
								<img
									src={item.beforeImg}
									alt=''
									className='absolute top-0 left-0 opacity-0 w-full h-[150px] object-cover rounded-lg scale-95 ease-in duration-300 hover:scale-100 hover:opacity-100 md:h-[500px] md:duration-500'
								/>
							</div>
							<div className='flex flex-col gap-y-2 scale-95 md:gap-y-5'>
								<p className='font-bold text-xl md:text-3xl md:font-black'>
									{item.title}
								</p>
								<div className='flex items-center justify-between'>
									<p className='text-sm font-bold text-white/50 md:text-xl'>
										Категория: {item.category.title}
									</p>
									<p className='text-sm font-bold text-white/50 md:text-xl'>
										{new Date(item?.createdAt).toLocaleString('ru-RU', {
											hour: '2-digit',
											minute: '2-digit',
											second: '2-digit',
											year: 'numeric',
											month: 'numeric',
											day: '2-digit'
										})}
									</p>
								</div>
							</div>
						</div>
					))
			)}
		</main>
	)
}

export default Home
