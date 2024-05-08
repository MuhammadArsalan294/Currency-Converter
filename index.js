#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("----------Welcome To My Currency Converter----------"));
const currency = {
    USD: 1, // Base Currency
    EUR: 0.91, // Euro
    GBP: 0.76, // Great British Pound
    INR: 74.57, // Indian Rupees
    PKR: 280, // Pakistani Rupees
    DIN: 0.31 // Kuwaiti Dinar
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.magenta('Enter From Currency'),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: 'to',
        message: chalk.magenta('Enter To Currency'),
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: 'amount',
        message: chalk.magenta('Enter Your Amount'),
        type: 'number'
    },
]);
/*
let fromAmount = currency[user_answer.from] // Exchange Rate
let toAmount = currency[user_answer.to]     // Exchange Rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount        // USD Base Currency.   15000 / 280
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
 */ 
