const UserService = require('../services/usersService');
const UserRepository = require('../repositories/userRepository');

const database = [];
const repository = new UserRepository(database);
const userService = new UserService(repository);

userService.createUser('Isa Moura', 'mouraisa@example.com');

console.log(userService.findAll());
