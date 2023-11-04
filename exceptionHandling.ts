function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 2);
    console.log("Result:", result);

    const result2 = divide(5, 0); // This will throw an exception

    console.log("Result 2:", result2); // This line won't be executed
} catch (error: any) {
    console.error("An error occurred:", error.message);
}
