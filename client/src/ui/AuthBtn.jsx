const AuthBtn = ({ title, onClick }) => {
	return (
		<>
			<button
				type='submit'
				className='bg-primary rounded-lg duration-500 mt-5 py-2 px-4 text-xl font-semibold hover:bg-secondary md:text-2xl'
				onClick={onClick}
			>
				{title}
			</button>
		</>
	)
}

export default AuthBtn
