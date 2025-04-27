import loveFunc from "./love";

describe("love", () => {
    it("should return 0", () => {
        const result = loveFunc([1, -1]);
        expect(result).toBe(0);
    });
    it("should return 0 regardless of the values", () => {
        const result = loveFunc([2000, -200]);
        expect(result).toBe(0);
    });
    // No more tests are needed since the function is deterministic
});