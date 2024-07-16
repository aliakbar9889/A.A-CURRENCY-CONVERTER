import inquirer from "inquirer";
let exchangecurrency = {
    "USD": 1,
    "EUR": 1.07,
    "TL": 0.031,
    "CAD": 0.73,
    "AUD": 0.67,
    "PKR": 280
};
console.log("WELCOME TO A.A CURRENCY CONVERTER");
let userans = await inquirer.prompt([
    {
        name: "convertingfrom",
        type: "list",
        message: "SELECT THE CURRENCY YOU WANT TO CONVERT FROM",
        choices: ["USD", "EUR", "TL", "CAD", "AUD", "PKR"]
    },
    {
        name: "convertinginto",
        type: "list",
        message: "SELECT THE CURRENCY YOU WANT TO CONVERT INTO",
        choices: ["USD", "EUR", "TL", "CAD", "AUD", "PKR"]
    },
    {
        name: "message",
        type: "input",
        message: "ENTER YOUR AMOUNT"
    }
]);
let from_amount = exchangecurrency[userans.convertingfrom];
let to_amount = exchangecurrency[userans.convertinginto];
let amount = userans.message;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Converted Amount = ${converted_amount}`);
