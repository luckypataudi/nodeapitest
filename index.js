const express = require("express")
const app = express();
const Web3 = require("web3");
const url = require("url");
const port = process.env.port;

const web3test = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/"); //test bscscan
const web3main = new Web3("https://bsc-dataseed.binance.org/"); // bscscan
var web3 = 0;


// const TEST_TOKEN_TRANSFER_ADDRESS3 = "0x1786B6908aB390C774Eb5D11D5522DA695385337";  //test tokentrasfer

// const abitesttoekntransfer3 = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "BasePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "BuyPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DecrementalPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "SellPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnTokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "checkUpdateAgain", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "destruct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "incrementalPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mintTokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_amountOfTokens", "type": "uint256" }], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "address[]", "name": "_contributors", "type": "address[]" }, { "internalType": "uint256[]", "name": "_tokenBalance", "type": "uint256[]" }], "name": "sendToAllToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "showBoolean", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "showTerms", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipientFrom", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferAny", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "transferForBuy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bool", "name": "_boolValue", "type": "bool" }, { "internalType": "uint256", "name": "mode_", "type": "uint256" }], "name": "upgradeBoolean", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_comm", "type": "uint256" }, { "internalType": "uint256", "name": "mode_", "type": "uint256" }], "name": "upgradeTerm", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]; //testtoken


const TEST_TOKEN_TRANSFER_ADDRESS3 = "0x55d398326f99059ff775485246999027b3197955";  //test tokentrasfer

const abitesttoekntransfer3 = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]; //testtoken


const TEST_TOKEN_TRANSFER_ADDRESS = "0x60657750337a274b7A8d292A137F21cB276E50e4";  //main


const abitesttoekntransfer = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"LOCKED_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LOCKUP_CONTRACT","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LOCK_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"LOCK_START_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_RELEASES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TOTAL_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"release","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"releaseCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address[]","name":"_contributors","type":"address[]"},{"internalType":"uint256[]","name":"_tokenBalance","type":"uint256[]"}],"name":"transferToToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];  //main



const TEST_TOKEN_TRANSFER_ADDRESS2 = "0x20Cd9Fd4d2327c1Fb83e7CD532f45E33F99B3BA0";  //main


const abitesttoekntransfer2 = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"address[]","name":"_contributors","type":"address[]"},{"internalType":"uint256[]","name":"_tokenBalance","type":"uint256[]"}],"name":"transferToToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];  //main



var myTestTokenTransfer = new web3test.eth.Contract(abitesttoekntransfer, TEST_TOKEN_TRANSFER_ADDRESS);

var myTestTokenTransfer2 = new web3test.eth.Contract(abitesttoekntransfer2, TEST_TOKEN_TRANSFER_ADDRESS2);

var myTestTokenTransfer3 = new web3test.eth.Contract(abitesttoekntransfer3, TEST_TOKEN_TRANSFER_ADDRESS3);


const pancakeRouter = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const pancakeAbi = [{ "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WETH", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];//main


var pancakeContract = new web3main.eth.Contract(pancakeAbi, pancakeRouter);




//example http://localhost:3001/txinfo/?txid=0x5dfe.....&net=1   net = 1 for mainnet 2 for test.
app.get("/txinfo", async (req, res) => {

  const requrl = req.url;
  console.log(requrl);

  var queryObject = url.parse(requrl, true);
  console.log(queryObject)
  console.log(queryObject.pathname)


  if (queryObject.pathname == "/txinfo/") {

    var queryobjectquery = queryObject.query;
    console.log(queryobjectquery);

    if (queryobjectquery) {

      var txid = 0;
      var network = 0;

      if (queryobjectquery.txid) {

        txid = queryobjectquery.txid;
        console.log(txid);

        if (txid.length == 66) {
        } else {
          res.write("txidlengthissue");
          res.end();
          return false;
        }

      } else {
        res.write("txidissue");
        res.end();
        return false;

      }

      if (queryobjectquery.net) {

        network = queryobjectquery.net;
        network = network.toString();
        console.log(network);

        if (network == "1" || network == "2") {

          if (network == 1) {
            web3 = web3main;
          } else if (network == 2) {
            web3 = web3test;
          }

        } else {
          res.write("netnumissue");
          res.end();
          return false;
        }

      } else {
        res.write("netissue");
        res.end();
        return false;
      }

      var txdetails = await getTx(txid);

      console.log(111);
      console.log(txdetails);
      if (txdetails == null) {
        res.write("txdetailissue");
        res.end();
        return false;
      }

      console.log(121);


      if (typeof (txdetails.input) != "undefined" || typeof (txdetails.input) != 'object') {

        var data = JSON.stringify({
          contract: txdetails.to,
          from: txdetails.from,
          value: txdetails.value,
          txstatus: txdetails.status
        })

        console.log(data);
        res.send(data);
        return false;



      } else {
        res.write("input not found");
        res.end();
        return false;
      }



    } else {
      res.write("urlqueryissue");
      res.end();
      return false;

    }

  }

  res.write("endtxinfo");
  res.end();
  return false;

});


const getTx = async (_getId) => {

  try {
    console.log(13);
    var meta = await web3.eth.getTransactionReceipt(_getId);
    console.log(meta);
    // return meta;

  } catch (err) {
    console.log(err);

  }

  try {

    if (meta == null) {

      return meta;

    }
    console.log(12 + "-" + _getId);
    var getTxInfo = await web3.eth.getTransaction(_getId);
    console.log(getTxInfo);

    console.log(getTxInfo.status = meta.status);

    return (getTxInfo);

  } catch (err) {
    console.log(err);
    return "error";
  }
}


////////////////token info
//http://localhost:3001/txinfotoken/?txid=0xb81ba87225ff8dcd715808426d4525956a5e1ba877d65696c09062d7fc6381bc&net=1

app.get("/txinfotoken", async (req, res) => {

  const requrl = req.url;
  console.log(requrl);

  var queryObject = url.parse(requrl, true);
  console.log(queryObject)
  console.log(queryObject.pathname)


  if (queryObject.pathname == "/txinfotoken/") {

    var queryobjectquery = queryObject.query;
    console.log(queryobjectquery);

    if (queryobjectquery) {

      var txid = 0;
      var network = 0;

      if (queryobjectquery.txid) {

        txid = queryobjectquery.txid;
        console.log(txid);

        if (txid.length == 66) {
        } else {
          res.write("txidtokenlengthissue");
          res.end();
          return false;
        }

      } else {
        res.write("txidtokenissue");
        res.end();
        return false;

      }

      if (queryobjectquery.net) {

        network = queryobjectquery.net;
        network = network.toString();
        console.log(network);

        if (network == "1" || network == "2") {

          if (network == 1) {
            web3 = web3main;
          } else if (network == 2) {
            web3 = web3test;
          }

        } else {
          res.write("nettokennumissue");
          res.end();
          return false;
        }

      } else {
        res.write("nettokenissue");
        res.end();
        return false;
      }

      var txdetails = await getTxToken(txid);

      console.log(111);
      console.log(txdetails);
      if (txdetails == null) {
        res.write("txtokendetailissue");
        res.end();
        return false;
      }

      console.log(1211);
      console.log(221);




      //just only for transfer function not sendtoall transfer
      if (typeof (txdetails.input) != "undefined" || typeof (txdetails.input) != 'object' || (txdetails.input).length > 2) {

        console.log(44);

        const erc20TransferABI = [
          {
            type: "address",
            name: "receiver",
          },
          {
            type: "uint256",
            name: "amount",
          },
        ];

        var meta = await web3.eth.abi.decodeParameters(
          erc20TransferABI,
          txdetails.input.slice(10)
        );
        console.log(55);
        console.log(meta);

        var data = JSON.stringify({
          contract: txdetails.to,
          from: txdetails.from,
          to: meta.receiver,
          toAmount: meta.amount,
          value: txdetails.value,
          status: txdetails.status
        })
        console.log(66);
        console.log(data);
        res.send(data);
        return false;



      } else {
        res.write("token input not found");
        res.end();
        return false;
      }



    } else {
      res.write("urlquerytokenissue");
      res.end();
      return false;

    }

  }

  res.write("endtxinfotoken");
  res.end();
  return false;

});


const getTxToken = async (_getId) => {

  try {
    console.log(13);
    var meta = await web3.eth.getTransactionReceipt(_getId);
    console.log(meta);
    console.log(1313);
    console.log(meta.logs);
    // return meta;

  } catch (err) {
    console.log(err);

  }

  try {

    if (meta == null) {

      return meta;

    }
    console.log(12 + "-" + _getId);
    var getTxInfo = await web3.eth.getTransaction(_getId);
    console.log(getTxInfo);

    console.log(getTxInfo.status = meta.status);

    return (getTxInfo);

  } catch (err) {
    console.log(err);
    return "error";
  }
}


/////////////////token info end


// http://localhost:3001/pricepancake/?adda=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&addb=0xCA1aCAB14e85F30996aC83c64fF93Ded7586977C
app.get("/pricepancake", async (req, res) => {


  const requrl = req.url;
  console.log(requrl);

  var queryObject = url.parse(requrl, true);
  console.log(queryObject)
  console.log(queryObject.pathname)


  if (queryObject.pathname == "/pricepancake/") {

    var queryobjectquery = queryObject.query;
    console.log(queryobjectquery);

    if (queryobjectquery) {

      var add1 = 0;
      var add2 = 0;

      if (queryobjectquery.adda && queryobjectquery.addb) {

        add1 = queryobjectquery.adda;
        console.log(add1);
        add2 = queryobjectquery.addb;
        console.log(add2);

        if (add1.length == 42) {
        } else {
          res.write("addalengthissue");
          res.end();
          return false;
        }

        if (add2.length == 42) {
        } else {
          res.write("addblengthissue");
          res.end();
          return false;
        }

      } else {
        res.write("addissue");
        res.end();
        return false;

      }

      var priceOnly = await getPricePancake(add1, add2);

      console.log(123);
      console.log(priceOnly);

      if (priceOnly == null) {
        res.write("priceOnlyissue");
        res.end();
        return false;
      }

      if (priceOnly[1] && priceOnly[1] > 0) {

       var valueether = await web3main.utils.fromWei(priceOnly[1], 'ether');



        var data = JSON.stringify({
          price: priceOnly[1],
          priceineth: valueether,
          currency: "1000000000000000000"
        })

        console.log(data);
        res.send(data);
        return false;
      }else{

        console.log(priceOnly[1]);
        res.write("pricepancakeissue");
        res.end();
        return false;
      }







      console.log("we3");


    }
  }
  res.write("endpricepancake");
  res.end();
  return false;

});


const getPricePancake = async (ad1, ad2) => {


  try {


    console.log(12 + "-" + ad1 + " -- " + ad2);

    let myArray = [ad1, ad2];

    var getTxInfo = await pancakeContract.methods.getAmountsOut("1000000000000000000", myArray).call()

    console.log(323);
    console.log(getTxInfo);

    return (getTxInfo);


  } catch (err) {
    console.log(err);
    return "error";
  }
}


//(from) address and contract address fix hai..
// http://localhost:3001/outtoken/?to=0x4ce9834628ceADd49a7a90aED79EC524287e3735&amount=10000000000000000&net=2

app.get("/outtoken", async (req, res) => {


  const requrl = req.url;

  console.log(requrl);

  var queryObject = url.parse(requrl, true);

  console.log(queryObject);


  console.log(1212);


  if (queryObject.pathname == "/outtoken/") {

    var queryObjectquery = url.parse(requrl, true).query;

    console.log(queryObjectquery);
    console.log(212);

    if (queryObjectquery) {

    } else {
      res.write("nodataouttoken");
      return false;
    }

    if (queryObjectquery.to) {


      var toadd = queryObjectquery.to;
      if (toadd.length == 42) {
      } else {
        res.write("tolength = " + toadd.length);
        res.end();
        return false;
      }



      var fromadd = 0;
      if (queryObjectquery.from) {
        
         fromadd = queryObjectquery.from;

        if (fromadd.length == 42 || fromadd.length == 47) {
        } else {
          res.write("fromaddlength = " + fromadd.length);
          res.end();
          return false;
        }
      }

      var fromkey = 0;
      if (queryObjectquery.fromkey) {
        
        fromkey = queryObjectquery.fromkey;

        if (fromkey.length == 64) {
        } else {
          res.write("fromkeylength = " + fromkey.length);
          res.end();
          return false;
        }
      }




      var tovlaue = queryObjectquery.amount;
      if (tovlaue > 0) {

      } else {
        res.write("incorrectvalue");
        res.end();
        return false;
      }


      var nettype = queryObjectquery.net;

      if (nettype == "1" || nettype == "2") {
        if (nettype == 1) {
          web3 = web3main;
        } else if (nettype == 2) {
          web3 = web3test;
        }
      } else {
        res.write("nettypetokenissue");
        res.end();
        return false;
      }

  

   	// if (nettype == 1) {
      //   tx = await tokenSendMain(fromadd,fromkey,toadd, tovlaue);
      // } else if (nettype == 2) {
      //   tx = await tokenSendTest(fromadd,fromkey,toadd, tovlaue);
      // }
      
        tx = await tokenSendTest(fromadd,fromkey,toadd, tovlaue);





      if (tx.to && tx.transactionHash && tx.status) {



      } else {
        res.write("nodetailsfetch");
        return false;
      }


      var data = JSON.stringify({
        to: tx.to,
        trxid: tx.transactionHash,
        status: tx.status
      })

      console.log(data);
      res.send(data);
      return false;



    } else {
      res.write("nototoken");
      return false;
    }


  }

  res.write("endouttoken");
  res.end();
  return false;


});



const tokenSendTest = async (fromadd, fromkey, gettoadd, gettovalue) => {

  try {

    var fromacc = fromadd;   //main
    var privatekey = fromkey;
    var getAddress = gettoadd;
    var value = gettovalue;
    console.log("441");

	console.log(fromacc);

		if(fromacc == "0x29Df76FE067D9486af39d3Bd5ff1EB502555800f"){
			// myTestTokenTransfer = myTestTokenTransfer2 ;
			// TEST_TOKEN_TRANSFER_ADDRESS = TEST_TOKEN_TRANSFER_ADDRESS2;
			console.log("442");
			console.log("442");
		    var gasPrice = await web3.eth.getGasPrice();



		    console.log("gasPrice", gasPrice) // "0"

		    //  var gasEstimate = await myTestTokenTransfer.methods.sendTokenIBEP20(getAddress, value).estimateGas({ from: fromacc })

		    // console.log(myTestTokenTransfer.methods);

		    var gasEstimate = await myTestTokenTransfer2.methods.transfer(getAddress, value).estimateGas({ from: fromacc })

		    console.log("gasEstimate", gasEstimate) // "0"

		    let tx = {
		      from: fromacc,
		      to: TEST_TOKEN_TRANSFER_ADDRESS2,
		      gasPrice: gasPrice,
		      gas: 60242,
		      data: await myTestTokenTransfer2.methods.transfer(getAddress, value).encodeABI()
		    };

		    let signedTx = await web3.eth.accounts.signTransaction(tx, privatekey);
		    let result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);


		    console.log(result);
		    return result;
		}else if(fromacc.includes("usdt1")){
			// myTestTokenTransfer = myTestTokenTransfer2 ;
			// TEST_TOKEN_TRANSFER_ADDRESS = TEST_TOKEN_TRANSFER_ADDRESS2;
			console.log("4445");
			console.log(fromacc);

			fromacc = fromacc.replace("usdt1", "");

			console.log(fromacc);



			console.log("4446");
		    var gasPrice = await web3.eth.getGasPrice();



		    console.log("gasPrice", gasPrice) // "0"

		    //  var gasEstimate = await myTestTokenTransfer.methods.sendTokenIBEP20(getAddress, value).estimateGas({ from: fromacc })

		    // console.log(myTestTokenTransfer.methods);

		    var gasEstimate = await myTestTokenTransfer3.methods.transfer(getAddress, value).estimateGas({ from: fromacc })

		    console.log("gasEstimate", gasEstimate) // "0"

		    let tx = {
		      from: fromacc,
		      to: TEST_TOKEN_TRANSFER_ADDRESS3,
		      gasPrice: gasPrice,
		      gas: 60242,
		      data: await myTestTokenTransfer3.methods.transfer(getAddress, value).encodeABI()
		    };

		    let signedTx = await web3.eth.accounts.signTransaction(tx, privatekey);
		    let result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);


		    console.log(result);
		    return result;
		}else{


					console.log("443");
		    var gasPrice = await web3.eth.getGasPrice();



		    console.log("gasPrice", gasPrice) // "0"

		    //  var gasEstimate = await myTestTokenTransfer.methods.sendTokenIBEP20(getAddress, value).estimateGas({ from: fromacc })

		    // console.log(myTestTokenTransfer.methods);

		    var gasEstimate = await myTestTokenTransfer.methods.transfer(getAddress, value).estimateGas({ from: fromacc })

		    console.log("gasEstimate", gasEstimate) // "0"

		    let tx = {
		      from: fromacc,
		      to: TEST_TOKEN_TRANSFER_ADDRESS,
		      gasPrice: gasPrice,
		      gas: 60242,
		      data: await myTestTokenTransfer.methods.transfer(getAddress, value).encodeABI()
		    };

		    let signedTx = await web3.eth.accounts.signTransaction(tx, privatekey);
		    let result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);


		    console.log(result);
		    return result;
	}


	




  } catch (err) {

  }


}


// const tokenSendTest = async (fromadd,fromkey,gettoadd, gettovalue) => {

//   try {
//      var fromadd = fromadd;
//     var privateKey = fromkey;

//     console.log("44");
//     const senderAddress = fromadd;
//     web3.eth.accounts.wallet.add(privateKey);
//     web3.eth.defaultAccount = senderAddress;
//     console.log("45");


//     var gasPrice = await web3.eth.getGasPrice();
//     console.log(gasPrice);
//     const recipientAddress = gettoadd;
//     const amount = gettovalue; // This represents 1 token


//     var gasEstimate = await myTestTokenTransfer.methods.transfer(gettoadd, gettovalue).estimateGas({ from: fromadd });

//     //     console.log("sds");
//         console.log("gasEstimate = " + gasEstimate);

    

//     let receiptvalue;
//     function transferTokens(senderAddress, recipientAddress, amount, gasPrice) {
//       return new Promise((resolve, reject) => {
//         myTestTokenTransfer.methods.transfer(recipientAddress, amount).send({
//           from: senderAddress,
//           gasPrice: gasPrice,
//           gas: "70000"
//         })
//           .on('transactionHash', function (hash) {
//             // console.log('Transaction hash:', hash);
//           })
//           .on('receipt', function (receipt) {
//             // console.log('Transaction receipt:', receipt);
//             resolve(receipt);
//           })
//           .on('error', function (error) {
//             console.error('Error:', error);
//             resolve(error);
//           });
//       });
//     }

//     // Call the transferTokens function and wait for the receipt
//     console.log("5566");
//     return transferTokens(senderAddress, recipientAddress, amount, gasPrice)
//       .then((receipt) => {
//         console.log('Receipt value:', receipt);

//         return receipt;
//         // Do something with the receipt value here
//       })
//       .catch((error) => {
//         console.error('Transfer failed:', error);
//         return error;
//       });





//   } catch (err) {

//   }


// }

// const tokenSendTest = async (gettoadd, gettovalue) => {

//   try {
//     var fromadd = "0x47613c5602b14449E9C1AA5Ae251c956375A0DA0";
//     var privateKey = "40c5ef133b9046df5ac1b1983b705bd4804179534cef8645ed0bfe0fcf20d6d7";

//     console.log("44");
//     const senderAddress = fromadd;
//     web3.eth.accounts.wallet.add(privateKey);
//     web3.eth.defaultAccount = senderAddress;
//     console.log("45");
    
    
//     var gasPrice = await web3.eth.getGasPrice();
//         console.log(gasPrice);
//     const recipientAddress = gettoadd;
//     const amount = gettovalue; // This represents 1 token
  

//     // var gasEstimate = await myTestTokenTransfer.methods.transfer(gettoadd, gettovalue).estimateGas({ from: fromadd });

//     //     console.log("sds");
//     //     console.log("gasEstimate = " + gasEstimate);



//     myTestTokenTransfer.methods.transfer(recipientAddress, amount).send({ from: senderAddress,gasPrice:gasPrice,
//       gas: "37197" })
//       .on('transactionHash', function (hash) {
//         console.log('Transaction hash:', hash);
//       })
//       .on('receipt', function (receipt) {
//         console.log('Transaction receipt:', receipt);
//       })
//       .on('error', function (error) {
//         console.error('Error:', error);
//       });
//       console.log("46");
//   } catch (err) {

//   }


// }

app.get('/checkbep20ad', function (req, res) {
  
  web3 = web3main;
  const requrl = req.url;
  var queryObject = url.parse(requrl, true);
  var data = JSON.stringify({
    status: false
  });
  if (queryObject.pathname == "/checkbep20ad/") {
      queryObject = url.parse(req.url, true).query;
      if (queryObject.get) {
        var getA = queryObject.get;
        if(web3.utils.isAddress(getA)){          
          data = JSON.stringify({
            status: true,
            ad:web3.utils.toChecksumAddress(getA)
          });
        }
      }
  }
  res.status(200).send(data);
})


app.enable('trust proxy')
app.use((req, res, next) => {
    return res.status(404).send("File not found");
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})
app.listen(port);
// app.listen(3001, () => {
//   console.log("server running on 3001 ")
// })