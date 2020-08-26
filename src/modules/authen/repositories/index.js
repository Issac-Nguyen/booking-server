const UserRepository = require('./userRepository');
const RoleRepository = require('./roleRepository');
const model = require('../models');

const userRepository = new UserRepository(model.User);
const roleRepository = new RoleRepository(model.Role);

module.exports = {
    userRepository,
    roleRepository
}