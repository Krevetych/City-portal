export const validData = {
	surname: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[а-яёА-ЯЁ]+$/i.test(data) && 'Только кириллица'
	},
	name: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[а-яёА-ЯЁ]+$/i.test(data) && 'Только кириллица'
	},
	patronymic: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[а-яёА-ЯЁ]+$/i.test(data) && 'Только кириллица'
	},
	login: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^[a-zA-Z]+$/i.test(data) && 'Только латиница'
	},
	email: data => {
		return data.length === 0
			? 'Обязательное поле'
			: !/^\S+@\S+\.\S+$/.test(data) && 'Невалидная почта'
	},
	password: data => {
		return data.length < 6 && 'Пароль короче 6 символов'
	},
	twoPassword: data => {
		return data.length < 6 && 'Пароль короче 6 символов'
	}
}
