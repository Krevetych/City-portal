import { NavLink } from 'react-router-dom'
import useHeader from '../../hooks/useHeader'
import useScroll from '../../hooks/useScroll'
import { navigationPC } from '../../utils/constants'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../main'

const PCHeader = () => {
	const location = useHeader()
	const scroll = useScroll()
	const { user, setUser } = useContext(AuthContext)
	const loc = useLocation()
	const handleLogout = () => {
		setUser(null)
		localStorage.removeItem('userId')
	}

	return (
		<>
			<div
				className={`${
					location
						? 'hidden'
						: `hidden fixed z-10 top-0 right-0 left-0 duration-300 ${
								scroll ? 'bg-main' : 'bg-transparent'
						  } items-center py-3 md:flex md:justify-between md:px-5 lg:justify-around`
				}`}
			>
				<NavLink to='/'>
					<img src='./logo.svg' alt='Logo' className='w-[60px] h-[60px]' />
				</NavLink>
				<div className='flex items-center gap-4'>
					{user ? (
						<>
							<NavLink
								to='/profile'
								className={`${
									loc.pathname === '/profile' ? 'hidden' : 'block'
								} bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary`}
							>
								Профиль
							</NavLink>
							<NavLink
								to='/problems'
								className={`${
									loc.pathname === '/problems' ? 'hidden' : 'block'
								} bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary`}
							>
								Создать заявку
							</NavLink>
							<div
								className={`${
									user ? 'block' : 'hidden'
								} bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary`}
								onClick={handleLogout}
							>
								Выход
							</div>
						</>
					) : (
						navigationPC.map(item => (
							<NavLink
								key={item.id}
								to={item.link}
								className='bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary'
							>
								{item.title}
							</NavLink>
						))
					)}
					<NavLink
						to='/problems'
						className={`${
							loc.pathname === '/problems' || user ? 'hidden' : 'block'
						} bg-primary rounded-lg duration-500 py-2 px-4 text-xl font-semibold hover:bg-secondary`}
					>
						Создать заявку
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default PCHeader
