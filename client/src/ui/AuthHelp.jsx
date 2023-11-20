import { NavLink } from 'react-router-dom'

const AuthHelp = ({ text, title, link }) => {
	return (
		<>
			<p className='mb-5 font-semibold md:text-lg'>
				{text}{' '}
				<NavLink
					to={link}
					className='text-primary font-bold underline duration-300 hover:text-secondary'
				>
					{title}
				</NavLink>
			</p>
		</>
	)
}

export default AuthHelp
