const UserService = require('./../../app/services/UserServices')

describe('Test for UserService', () => {
    test("1) Create a new user using the UserService", () => {
        const user = UserService.create(1, "washiprah", "Marcos Silva")

        expect(user.username).toBe("washiprah")
        expect(user.name).toBe("Marcos Silva")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})  