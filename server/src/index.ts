import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { AppDataSource } from './data-source.js'
import UserController from './controllers/UserController.js'
import ProblemController from './controllers/ProblemController.js'
import CategoryController from './controllers/CategoryController.js'
import User, { Role } from './models/User.model.js'
import { UserRepo } from './repositories/UserRepo.js'

dotenv.config()
const PORT = process.env.PORT || 4570

const app: Application = express()
app.use(express.json({ limit: '15mb' }))
app.use(cors())

app.get('/users/:id', UserController.getById)
app.post('/users/register', UserController.register)
app.post('/users/login', UserController.login)

app.get('/problems', ProblemController.getAll)
app.post('/problems', ProblemController.create)
app.patch('/problems/:id', ProblemController.update)
app.delete('/problems/:id', ProblemController.delete)

app.get('/categorys', CategoryController.getAll)
app.post('/categorys', CategoryController.create)
app.delete('/categorys/:id', CategoryController.delete)

app.listen(PORT, () => {
	console.log(`SERVER 🎉 on PORT: ${PORT}`)

	try {
		AppDataSource.initialize()
			.then(() => console.log(`DB 🎉`))
			.catch(error => console.log('DB error: ', error))
		const time = setTimeout(() => {
			const defaultUser = new User()
			defaultUser.role = Role.ADMIN
			defaultUser.surname = 'х'
			defaultUser.name = 'х'
			defaultUser.patronymic = 'х'
			defaultUser.login = 'admin'
			defaultUser.email = 'admin@example.com'
			defaultUser.password = '123456'
			defaultUser.problems = []
			UserRepo.save(defaultUser)
		}, 2000)
		clearTimeout(time)
		console.log('User ok')
	} catch (error) {
		console.log(error)
	}
})
