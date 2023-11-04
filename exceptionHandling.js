function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
try {
    var result = divide(10, 2);
    console.log("Result:", result);
    var result2 = divide(5, 0); // This will throw an exception
    console.log("Result 2:", result2); // This line won't be executed
}
catch (error) {
    console.error("An error occurred:", error.message);
}
