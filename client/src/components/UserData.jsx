import { useContext } from 'react'
import { AuthContext } from '../main'

const UserData = () => {
	const { user } = useContext(AuthContext)
	return (
		<>
			<div className='flex flex-col items-center gap-y-1 justify-center md:gap-y-3'>
				<p className='text-2xl md:text-3xl md:font-bold'>
					{user?.surname} {user?.name} aka{' '}
					<span className='text-primary'>{user?.login}</span>
				</p>
				<p className='text-xl md:text-2xl md:font-semibold text-white/50'>
					{user?.email}
				</p>
				<p className='text-sm md:text-xl md:font-semibold text-white/50'>
					{user?.role === 'user' ? 'Пользователь' : 'Администратор'}
				</p>
			</div>
		</>
	)
}

export default UserData
