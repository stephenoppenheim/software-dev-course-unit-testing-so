
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
    return [...inventory].sort((a, b) => {
        if (typeof a[key] === 'string') {
            const lowerCaseA = a[key].toLowerCase();
            const lowerCaseB = b[key].toLowerCase();
            if (lowerCaseA < lowerCaseB) return -1
            else if (lowerCaseA > lowerCaseB) return 1;
            return 0;
        }
        return a[key] - b[key];
    });
}

const testProducts = [
    {
        name: "sledge hammer",
        type: "hammer",
        cost: 10
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
    },
    {
        name: "hammer",
        type: "hammer",
        cost: 5
    },
]

module.exports = { calculateDiscount, filterProducts, sortInventory, testProducts };