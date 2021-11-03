const users = {
    name: 'lysia',
    email : 'gata'
}


describe("Match objects", () => {
    test("basic usage",() => {
        expect(users.name).toBeDefined()
        expect(users.age).not.toBeDefined()
    })
})