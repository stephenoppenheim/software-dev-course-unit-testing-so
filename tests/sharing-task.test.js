const { calculateDiscount, filterProducts, sortInventory } = require("../sharing-task.js");

describe("calculateDiscount", () => {

    test("returns null if price is not a number", () => {
        expect(calculateDiscount("100", 0.1)).toBe(null);
    });

    test("returns null if discountRate is not a number", () => {
        expect(calculateDiscount(100, "0.1")).toBe(null);
    });

    test("returns null if discountRate is a negative number", () => {
        expect(calculateDiscount(100, -0.1)).toBe(null);
    });

    test("returns null if discountRate is greater then one", () => {
        expect(calculateDiscount(100, 1.1)).toBe(null);
    });

    test("applies a valid discount rate", () => {
        expect(calculateDiscount(100, .1)).toBe(90);
    });

    test("applies a valid discount rate", () => {
        expect(calculateDiscount(60, .25)).toBe(45);
    });

    test("applies a valid discount rate", () => {
        expect(calculateDiscount(60, .3)).toBe(42);
    });

    test("handles edge case with price of 0", () => {
        expect(calculateDiscount(0, 0.1)).toBe(0);
    });
})