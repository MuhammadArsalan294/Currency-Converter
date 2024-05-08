#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("----------Welcome To My Currency Converter----------"));
const currency = {
    USD: 1, // Base Currency
    EUR: 0.91, // Euro
    GBP: 0.76, // 
    INR: 74.57, // Indian Rupees
    PKR: 280, // Pakistani Rupees
    DIN: 0.31 // Kuwaiti Dinar
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.magenta('Enter From Currency'),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', "DIN"]
    },
    {
        name: 'to',
        message: chalk.magenta('Enter To Currency'),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', "DIN"]
    },
    {
        name: 'amount',
        message: chalk.magenta("Enter Your Amount"),
        type: 'number'
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
