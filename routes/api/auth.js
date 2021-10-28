const express = require('express')
const authController = require('../../controllers/auth')
const { controllerWrapper, validation, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../models/user')
const router = express.Router()


router.post('/register', validation(joiSchema), controllerWrapper(authController.register))

router.post('/login', validation(joiSchema), controllerWrapper(authController.login))

router.get('/logout', authenticate, controllerWrapper(authController.logout))
router.get('/current', authenticate, controllerWrapper(authController.current))

module.exports = router