const User = require("./../../app/models/user")

describe("Unit Test for User class", () => {
    test("1) Create a user object", () => {

        const user = new User(1, "Washiprah", "Marcos Silva", "Bio", "dateCreated", "lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("Washiprah")
        expect(user.name).toBe("Marcos Silva")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    }) 
}) 