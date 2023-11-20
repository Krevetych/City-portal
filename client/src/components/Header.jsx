import RealTimeCount from './RealTimeCount'
import MDHeader from './headers/MDHeader'
import PCHeader from './headers/PCHeader'

const Header = () => {
	return (
		<>
			<PCHeader />
			<MDHeader />
			<RealTimeCount />
		</>
	)
}

export default Header
