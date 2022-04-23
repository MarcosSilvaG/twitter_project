const User = require('./../models/user')

class UserService {

    static create(id, username, name){
        const NewUser = new User(id, username, name, "Sin bio") 
        return NewUser
    }

    static getInfo(user){
        return Object.values(user)
    }
}
module.exports = UserService