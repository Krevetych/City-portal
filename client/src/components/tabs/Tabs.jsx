import { useState } from 'react'
import InfoTab from './InfoTab'
import ProblemTab from './ProblemTab'
import SettingsTab from './SettingsTab'

const Tabs = () => {
	const [tab, setTab] = useState('info')

	const infoTab = () => {
		setTab('info')
	}

	const problemTab = () => {
		setTab('problem')
	}

	const settingsTab = () => {
		setTab('settings')
	}
	return (
		<div className='relative'>
			<div className='flex items-center justify-between text-sm md:text-2xl md:justify-around'>
				<p
					className={
						tab === 'info'
							? 'bg-primary duration-300 px-2 py-1 rounded-md'
							: 'px-2 py-1'
					}
					onClick={infoTab}
				>
					Информация
				</p>
				<p
					className={
						tab === 'problem'
							? 'bg-primary duration-300 px-2 py-1 rounded-md'
							: 'px-2 py-1'
					}
					onClick={problemTab}
				>
					Заявки
				</p>
				<p
					className={
						tab === 'settings'
							? 'bg-primary duration-300 px-2 py-1 rounded-md'
							: 'px-2 py-1'
					}
					onClick={settingsTab}
				>
					Настройки
				</p>
			</div>
			<div>
				{tab === 'info' ? (
					<InfoTab />
				) : tab === 'problem' ? (
					<ProblemTab />
				) : (
					<SettingsTab />
				)}
			</div>
		</div>
	)
}

export default Tabs
