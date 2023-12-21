import { useContext } from 'react'
import { AuthContext } from '../../main'
import { useState } from 'react'

const SettingsTab = () => {
	const { user, setUser } = useContext(AuthContext)
	const [settings, setSettings] = useState(false)
	const handleCheckboxChange = () => {
		setSettings(!settings)
	}
	const handleLogout = () => {
		setUser(null)
		localStorage.removeItem('userId')
	}
	return (
		<>
			<p className='hidden text-center mt-10 font-bold text-xl md:block md:text-2xl'>
				Пока что пусто, но скоро мы это исправим
			</p>
			<div className='flex justify-between items-center mt-5 md:hidden'>
				<p className='text-lg font-semibold'>
					Минималистичный вид меню{' '}
					<span className='text-sm text-white/50'>(Скоро)</span>
				</p>
				<label className='flex cursor-pointer select-none items-center'>
					<div className='relative'>
						<input
							type='checkbox'
							checked={settings}
							onChange={handleCheckboxChange}
							className='sr-only'
						/>
						<div
							className={`box block h-6 w-10 rounded-full ${
								settings ? 'bg-white/50' : 'bg-white/50'
							}`}
						></div>
						<div
							className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition translate-x-1/2`}
						></div>
					</div>
				</label>
			</div>
			<div
				className={`${
					user ? 'block' : 'hidden'
				} text-end text-danger font-bold text-md mt-5 md:hidden`}
				onClick={handleLogout}
			>
				Выход
			</div>
		</>
	)
}

export default SettingsTab
