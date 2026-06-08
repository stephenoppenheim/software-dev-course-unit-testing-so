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

    test("applies a valid discount rate - $100 and 10%", () => {
        expect(calculateDiscount(100, .1)).toBe(90);
    });

    test("applies a valid discount rate - $60 and 25%", () => {
        expect(calculateDiscount(60, .25)).toBe(45);
    });

    test("applies a valid discount rate - $100 and 30%", () => {
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

describe("sortInventory", () => {

    test("returns empty array if inventory is not an array", () => {
        expect(sortInventory("100", "hardware")).toEqual([]);
    });

    test("returns empty array if key is not a string", () => {
        expect(sortInventory(testProducts, 100)).toEqual([]);
    });

    test("returns empty array if key argument is not passed", () => {
        expect(sortInventory(testProducts)).toEqual([]);
    });

    test("returns empty array if no arguments are passed", () => {
        expect(sortInventory()).toEqual([]);
    });

    test("returns unsorted array if key does not exist in objects", () => {
        expect(sortInventory(testProducts, "testKey")).toEqual([{name: "sledge hammer",type: "hammer",cost: 10},{name: "door hinge",type: "hardware",cost: 3},{name: "door knob",type: "hardware",cost: 4},{name: "hammer",type: "hammer",cost: 5}]);
    });

    test("returns array sorted by name", () => {
        console.log("TEST", sortInventory(testProducts, "name"));
        expect(sortInventory(testProducts, "name")).toEqual([{name: "door hinge",type: "hardware",cost: 3},{name: "door knob",type: "hardware",cost: 4},{name: "hammer",type: "hammer",cost: 5},{name: "sledge hammer",type: "hammer",cost: 10}]);
    });

    test("returns array sorted by type", () => {
        expect(sortInventory(testProducts, "type")).toEqual([{name: "sledge hammer",type: "hammer",cost: 10},{name: "hammer",type: "hammer",cost: 5},{name: "door hinge",type: "hardware",cost: 3},{name: "door knob",type: "hardware",cost: 4}]);
    });

    test("returns array sorted by cost", () => {
        expect(sortInventory(testProducts, "cost")).toEqual([{name: "door hinge",type: "hardware",cost: 3},{name: "door knob",type: "hardware",cost: 4},{name: "hammer",type: "hammer",cost: 5},{name: "sledge hammer",type: "hammer",cost: 10}]);
    });
})