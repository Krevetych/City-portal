import { NavLink, Navigate } from 'react-router-dom'
import { register } from '../utils/constants'
import AuthForm from '../ui/AuthForm'
import AuthBtn from '../ui/AuthBtn'
import AuthHelp from '../ui/AuthHelp'
import AuthArrow from '../ui/AuthArrow'
import AuthHeader from '../ui/AuthHeader'
import { useState } from 'react'
import useTitle from '../hooks/useTitle'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../main'

const Registration = () => {
	useTitle({ title: 'Регистрация' })
	const [form, setForm] = useState()
	const naviagte = useNavigate()
	const [err, setErr] = useState()
	const handleSubmit = async e => {
		e.preventDefault()
		const user = await UserService.register(form)
		if (user.error) {
			setErr('Пользователь с таким логином или почтой уже существует')
		} else {
			naviagte('/login')
		}
	}
	return (
		<main className='relative'>
			<AuthHeader title={'Регистрация'} />
			<AuthArrow />
			<form
				className='flex flex-col max-h-screen gap-y-3 px-4 mt-5 md:grid md:place-content-center md:mt-0 md:w-full'
				onSubmit={handleSubmit}
			>
				<p className='text-danger font-bold text-lg'>
					*Проверяйте данные. После отправки <br /> формы их нельзя будет
					изменить
				</p>
				{register.map(item => (
					<AuthForm
						{...item}
						key={item.id}
						setForm={setForm}
						form={form}
						validate={true}
					/>
				))}
				<p className='text-danger font-bold'>{err}</p>
				<div className='flex gap-3 items-center w-full'>
					<input
						className='w-[15px] h-[15px] md:w-[20px] md:h-[20px]'
						type='checkbox'
						name='rules'
						id='rules'
						required
					/>
					<label htmlFor='rules' className='font-semibold md:text-xl'>
						С{' '}
						<NavLink
							to='/rules'
							className='underline duration-300 text-primary hover:text-secondary'
						>
							правилами
						</NavLink>{' '}
						портала ознакомлен
					</label>
				</div>
				<AuthBtn title={'Зарегестрироваться'} />
				<AuthHelp text={'Уже есть аккаунт?'} title={'Войти'} link={'/login'} />
			</form>
		</main>
	)
}

export default Registration
