const {findUserByEmail, updateUser, deleteUser} = require("./user")

const db = [
    {id: 1, name: "Devi", email: "devi@gmail.com"},
    {id: 2, name: "Eleanor", email: "eleanor@gmail.com"},
    {id: 3, name: "Fabiola", email: "fabiola@gmail.com"},
]

describe("Testing User's file.", () => {
    describe("Testing findUserByEmail function.", () => {
        it("Should return the user with the given email.", () => {
            expect(findUserByEmail("devi@gmail.com", db)).toEqual(db[0])
        })
    })

    describe("Testing updateUser function.", () => {
        it("Should return 'User updated successfully' if the user was found.", () => {
            expect(updateUser(1, {name: "DeviStarlight", email: "devi@gmail.com"}, db)).toEqual("User updated successfully")
        })
    })

    describe("Testing deleteUser function.", () => {
        it("Should return 'User deleted successfully' if the user was found.", () => {
            expect(deleteUser(3, db)).toEqual("User deleted successfully")
        })
    })
})