function calculateBill(amount, taxRate = 0.05) {
    let total = amount * taxRate
    let finalAmount = total + amount 
    return finalAmount
}
console.log(calculateBill(1000, 0.10));
console.log(calculateBill(1000 ));
