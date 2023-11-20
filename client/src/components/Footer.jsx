import { Link, NavLink } from 'react-router-dom'
import useFooter from '../hooks/useFooter'
import { useContext } from 'react'
import { ProblemContext } from '../main'

const Footer = () => {
	const location = useFooter()
	const { problem } = useContext(ProblemContext)
	return (
		<>
			<footer
				className={`${
					location || problem?.length === 0
						? 'hidden'
						: 'hidden items-center justify-center gap-2 mb-3 md:flex'
				}`}
			>
				<NavLink to='/'>
					<img src='./logo.svg' alt='logo' className='w-[25px] h-[25px]' />
				</NavLink>
				<p className='font-semibold'>
					&copy; {new Date().getFullYear()}. Права принадлежат{' '}
					<Link
						to='https://github.com/Krevetych'
						className='font-bold duration-300 hover:text-secondary'
					>
						Krevetych
					</Link>
				</p>
			</footer>
		</>
	)
}

export default Footer
