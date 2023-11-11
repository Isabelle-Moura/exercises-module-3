class UserRepository {
    constructor(database) {
        this.database = database;
    }

    create(user) {
        this.database.push(user);
        return user;
    }
    findAll(){
        return this.database
    }
}

module.exports = UserRepository;