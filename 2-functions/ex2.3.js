function calculateCircleArea(radius) {
    return 3.141592 * radius * radius;
}

console.log(`area: ${calculateCircleArea(5)}`);
console.log(`rounded area: ${calculateCircleArea(5).toFixed(2)}`);