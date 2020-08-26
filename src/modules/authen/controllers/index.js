const LoginController = require('./loginController');
const RegisterController = require('./registerController');
const TestController = require('./testController');

const useCases = require('../usecases');

const loginController = new LoginController(useCases.loginUsecase);
const registerController = new RegisterController(useCases.registerUsecase);
const testController = new TestController(useCases.testUsecase);

module.exports = {
    loginController,
    registerController,
    testController
}
