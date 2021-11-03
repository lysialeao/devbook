const users = ['lysia', 'leao']

describe("Match Arrays", () => {

    test("verify array elements",() => {
        expect(users).toContainEqual('lysia')
        expect(users).toContain(users[1])
    })
})