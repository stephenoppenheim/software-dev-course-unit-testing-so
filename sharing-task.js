function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    return price - price * discountRate;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

const testProducts = [
    {
        name: "sledge hammer",
        type: "hammer",
        cost: 10
    },
    {
        name: "hammer",
        type: "hammer",
        cost: 5
    },
    {
        name: "door hinge",
        type: "hardware",
        cost: 3
    },
    {
        name: "door knob",
        type: "hardware",
        cost: 4
    }
]

module.exports = { calculateDiscount, filterProducts, sortInventory, testProducts };