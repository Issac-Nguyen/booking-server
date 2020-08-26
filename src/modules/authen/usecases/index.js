const LoginUsecase = require('./loginUsecase');
const RegisterUseCase = require('./registerUsecase');
const TestUserCase = require('./testUsecase');

const userRepository = require('../repositories');

const repoTest = require('../../../modules/booking/repositories');

const loginUsecase = new LoginUsecase(userRepository.userRepository);
const registerUsecase = new RegisterUseCase(userRepository.userRepository);
const testUsecase = new TestUserCase(userRepository.userRepository, userRepository.roleRepository, repoTest);


module.exports = {
    loginUsecase,
    registerUsecase,
    testUsecase
}