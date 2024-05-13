// TODO: this file! :)
//State
const state = {
    bank: [],
    oddsSorted: [],
    evensSorted: [],
}

// References
const numberBank = document.querySelector("#numberBank output");
const oddsBank = document.querySelector("#odds output");
const evensBank = document.querySelector("#evens output");
const form = document.querySelector("form");
const addNumberButton = document.querySelector("button#addNumber"); // Reference for the "Add Number" button
const sortOneButton = document.querySelector("#sortOne"); // Reference for the "Sort One" button
const sortAllButton = document.querySelector("#sortAll"); // Reference for the "Sort All" button


// Event Listeners tied to the 3 buttons that can be clicked in html
form.addEventListener("submit", addNumbers);
sortOneButton.addEventListener("click", sortOne); // Event listener for the "Sort One" button
sortAllButton.addEventListener("click", sortAll); // Event listener for the "Sort All" button



// render();

// const input = "123"

//!isNan() is used to validate input and ensure that the input is a number
//before performing operations that require numerical data.
function processUserInput(input) {
    if (!isNaN(input)) {
        const userNumber = Number(input);
        return userNumber;
    } else {
        console.log("Please enter a valid number")
    }
}
// const userNumber = processUserInput(input)
// console.log(userNumber)

function render() {
    numberBank.textContent = state.bank !== null ? state.bank : ''; // Check if bank is not null before rendering
    oddsBank.textContent = state.oddsSorted !== null ? state.oddsSorted : ''; // Check if oddsSorted is not null before rendering
    evensBank.textContent = state.evensSorted !== null ? state.evensSorted : ''; // Check if evensSorted is not null before rendering
}

function addNumbers(event) {
    event.preventDefault();
    
    const numberInput = form.querySelector("input[name='number']");
    const inputValue = numberInput.value.trim();
    const userNumber = processUserInput(inputValue);
    
    if (userNumber !== undefined) {
        state.bank = userNumber;
        render();
    }
    
}
function sortOne() {
    if (state.bank !== null && state.bank.toString().length > 0) {
        const firstNumber = state.bank.toString().charAt(0); // Get the first number from numberBank
        const firstDigit = parseInt(firstNumber); // Extract the first digit
        if (firstDigit % 2 === 0) {
            state.evensSorted.push(firstNumber);
        } else {
            state.oddsSorted.push(firstNumber);
        }
        state.bank = state.bank.toString().slice(1); // Remove the first digit from numberBank
    }
    render();
}


function sortAll() {
    if (state.bank !== null && state.bank.toString().length > 0) {
        state.bank = state.bank.toString(); // I had to add this line into sortAll.  The for loop requires that state.bank be a string.  The SortOne turned state.bank wben clicked which allowed this function to work only after SortOne was clicked.
        const bankLength = state.bank.length;
        for (let i = 0; i < bankLength; i++) {
            const currentNumber = parseInt(state.bank[i]); // Parse the current number
            const firstDigit = parseInt(currentNumber.toString().charAt(0)); // Extract the first digit of the current number
            if (!isNaN(currentNumber)) {
            if (firstDigit % 2 === 0) {
                state.evensSorted.push(currentNumber);
            } else {
                state.oddsSorted.push(currentNumber);
            }
        }
    }
}
// Clear the bank array after sorting all elements
    // state.bank = [];
    render();
}

render()