const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Размер пароля не может быть меньше 4 символов').isLength({min : 4}),
    check('password', 'Размер пароля не может быть больше 10 символов').isLength({max : 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/user', authMiddleware, controller.getUsers)

module.exports = router