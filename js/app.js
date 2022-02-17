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

// clears the error message
function clearError() {
    const commentContainer1 = document.getElementById("error-div-1");
    commentContainer1.innerText = "";
    const commentContainer2 = document.getElementById("error-div-1");
    commentContainer2.innerText = "";
    const commentContainer3 = document.getElementById("error-div-2");
    commentContainer3.innerText = "";
    const commentContainer4 = document.getElementById("error-div-2");
    commentContainer4.innerText = "";



}

// if gets an error message the clears the Expense, balance etc
function clearInp() {
    totalExpense.innerText = "";
    balanceShow.innerText = "";
    saveAmount.innerText = "";
    saveInput.innerText = "";
    remainingBalance.innerText = "";



}

// handles error messages
function errorMessage(path) {
    clearInp();
    if (path == 1) {
        const newComment = document.createElement("p");
        newComment.innerText = "Please input a valid number.";

        const commentContainer = document.getElementById("error-div-1");
        commentContainer.appendChild(newComment);
    } else if (path == 2) {
        const newComment = document.createElement("p");
        newComment.innerText = "Sorry, save amount exceeded balance.";

        const commentContainer = document.getElementById("error-div-2");
        commentContainer.appendChild(newComment);
    } else if (path == 3) {
        const newComment = document.createElement("p");
        newComment.innerText = "Sorry, Expense can not exceed income.";

        const commentContainer = document.getElementById("error-div-1");
        commentContainer.appendChild(newComment);
    } else if (path == 4) {
        const newComment = document.createElement("p");
        newComment.innerText = "Please input a valid number.";

        const commentContainer = document.getElementById("error-div-2");
        commentContainer.appendChild(newComment);
    }

}

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
    clearError();
    if (checkNum()) {
        errorMessage(1);
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
        } else errorMessage(3);
    }
});

// Starts working if the below button if clicked
document.getElementById("savingButton").addEventListener("click", function () {
    clearError();
    if (checkNum() || totalExpense.innerText == '' || balanceShow.innerText == '') {
        errorMessage(4);

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
            errorMessage(2);

        }
    }
});