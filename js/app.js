// constant variables
const incomeInput = document.getElementById("incomeInput");
const rentInput = document.getElementById("rentInput");
const clothesInput = document.getElementById("clothInput");
const foodInput = document.getElementById("foodInput");
const totalExpense = document.getElementById("expense");
const balanceShow = document.getElementById("balance");
const balanceInput = document.getElementById("balance");
const saveAmount = document.getElementById("savingAmount");
const saveInput = document.getElementById("savingPercent");
const remainingBalance = document.getElementById("remainingBalance");

// gets the total sum
function getSum(Rent, Clothes, Food) {
    let sum = Rent + Clothes + Food;
    return sum;
}


// checks if the given input is number or not
function checkNum() {
    if (
        isNaN(incomeInput.value) ||
        isNaN(rentInput.value) ||
        isNaN(clothesInput.value) ||
        isNaN(foodInput.value) ||
        incomeInput.value < 0 ||
        rentInput.value < 0 ||
        clothesInput.value < 0 ||
        foodInput.value < 0 || isNaN(saveInput.value) || saveInput.value < 0 || incomeInput.value == '' || rentInput.value == '' || clothesInput.value == '' || foodInput.value == '') {
        return true;
    }
    else return false;
}

// Starts working if the below button if clicked 
document.getElementById("calculation").addEventListener("click", function () {
    if (checkNum()) {

    } else {
        const totalSum = getSum(
            parseFloat(foodInput.value),
            parseFloat(clothesInput.value),
            parseFloat(rentInput.value)
        );
        if (totalSum <= incomeInput.value) {
            totalExpense.innerText = totalSum;
            const balanceInp =
                parseFloat(incomeInput.value) - parseFloat(totalExpense.innerText);
            balanceShow.innerText = balanceInp;
        }
    }
});

// Starts working if the below button if clicked
document.getElementById("savingButton").addEventListener("click", function () {

    if (checkNum() || totalExpense.innerText == '' || balanceShow.innerText == '') {

    } else {
        const saveBalance =
            (parseFloat(incomeInput.value) * parseFloat(saveInput.value)) / 100;

        if (saveBalance <= parseFloat(balanceInput.innerText)) {
            saveAmount.innerText = saveBalance;
            const totalExpense =
                parseFloat(incomeInput.value) -
                (getSum(
                    parseFloat(foodInput.value),
                    parseFloat(clothesInput.value),
                    parseFloat(rentInput.value)
                ) +
                    saveBalance);
            const rem_balance = document.getElementById("remainingBalance");
            rem_balance.innerText = totalExpense;
        } else {

        }
    }
});