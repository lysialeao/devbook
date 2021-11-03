import {add} from './Calculate';

describe("Calculator", () => {
    test("Add to numbers",() => {
        expect(add(1,2)).toEqual(3)
    })
})