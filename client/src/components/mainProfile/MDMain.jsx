import UserData from '../UserData'
import Tabs from '../tabs/Tabs'

const MDMain = () => {
	return (
		<div className='flex flex-col gap-y-5 mb-[90px] px-4 md:hidden'>
			<p className='flex items-center justify-center font-semibold text-2xl pt-5 md:hidden'>
				Профиль
			</p>
			<hr className='border-white/60 border-solid' />
			<UserData />
			<hr className='border-white/60 border-solid' />
			<Tabs />
		</div>
	)
}

export default MDMain
