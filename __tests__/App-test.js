import {incrementFunc} from '../helper';

describe("increment function test", () => {
    it("increment 1 should be 2", () => {
        let num = 1;
        let res = incrementFunc(num);
        expect(res).toEqual(2)
    })
})
