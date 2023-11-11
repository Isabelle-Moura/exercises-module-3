const User = require('../entities/userEntity');

class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    createUser(name, email) {
        const newUser = new User(name, email);
        this.repository.create(newUser);
        return newUser;
    }

    findAll(){
        return this.repository.findAll();
    }

    getUserByEmail(email) {
        return this.repository.find((user) => user.email === email);
    }
}

module.exports = UserService;