const { calculateDiscount, filterProducts, sortInventory, testProducts } = require("../sharing-task.js");

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

describe("filterProducts", () => {

    test("returns empty array if products is not an array", () => {
        expect(filterProducts("100", (product) => product.type === "hardware")).toEqual([]);
    });

    test("returns empty array if callback is not a function", () => {
        expect(filterProducts(testProducts, "function")).toEqual([]);
    });

    test("returns empty array if callback is missing", () => {
        expect(filterProducts(testProducts)).toEqual([]);
    });

    test("returns empty array if no arguments are passed", () => {
        expect(filterProducts()).toEqual([]);
    });

    test("returns array of all hardware items", () => {
        expect(filterProducts(testProducts, (product) => product.type === "hardware")).toEqual([{name: "door hinge",type: "hardware",cost: 3},{name: "door knob",type: "hardware",cost: 4}]);
    });
})