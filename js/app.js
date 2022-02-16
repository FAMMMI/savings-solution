function ExpensesCalculation() {

    const foodCostText = document.getElementById('foodInput').value;
    const foodCost = parseFloat(foodCostText);

    const rentCostText = document.getElementById('rentInput').value;
    const rentCost = parseFloat(rentCostText);

    const clothesCostText = document.getElementById('clothInput').value;
    const clothesCost = parseFloat(clothesCostText);

    if (foodCost > 0 && rentCost > 0 && clothesCost > 0) {
        const totalCost = foodCost + rentCost + clothesCost;
        document.getElementById('expense').innerText = totalCost;
    }

}

function incomeExpenseCalculation() {
    const incomeText = document.getElementById('incomeInput').value;
    const income = parseFloat(incomeText);
    const totalCostText = document.getElementById('expense').innerText;
    const totalCost = parseFloat(totalCostText);
    const balance = income - totalCost;
    if (income > 0 && balance > 0) {
        document.getElementById('balance').innerText = balance;
    }
    ExpensesCalculation();

}

document.getElementById('calculation').addEventListener('click', function () {
    ExpensesCalculation();
    incomeExpenseCalculation()
}) 