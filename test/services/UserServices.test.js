const UserService = require('./../../app/services/UserServices')

describe('Test for UserService', () => {
    test("1) Create a new user using the UserService", () => {
        const user = UserService.create(1, "washiprah", "Marcos Silva")

        expect(user.username).toBe("washiprah")
        expect(user.name).toBe("Marcos Silva")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2) Get all user data in a List", () => {
        const User = UserService.create(1, "washiprah", "Marcos Silva")
        const userInfoInList = UserService.getInfo(User)
        
        expect(userInfoInList[0]).toBe(1)   
        expect(userInfoInList[1]).toBe("washiprah")
        expect(userInfoInList[2]).toBe("Marcos Silva")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
})  