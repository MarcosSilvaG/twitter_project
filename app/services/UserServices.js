const User = require('./../models/user')

class UserService {

    static create(id, username, name){
        const NewUser = new User(id, username, name, "Sin bio") 
        return NewUser
    }

    static getInfo(user){
        //This requirement can also be solved by returning an explicit list.->return  [user.id, id.username, user.name, user.bio]
        return Object.values(user)
    }
}
module.exports = UserService