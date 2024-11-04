
// Import the Blockchain and Transaction classes
const { Blockchain, Transaction } = require('./blockchain');

// Initialize the blockchain
let eduCoin = new Blockchain();

// Create some transactions
eduCoin.createTransaction(new Transaction('address1', 'address2', 100));
eduCoin.createTransaction(new Transaction('address2', 'address1', 50));

// Mine the transactions
console.log("\nStarting the miner...");
eduCoin.minePendingTransactions('miner_address');

// Check balances
console.log('\nBalance of address1:', eduCoin.getBalanceOfAddress('address1'));
console.log('Balance of address2:', eduCoin.getBalanceOfAddress('address2'));
console.log('Balance of miner_address:', eduCoin.getBalanceOfAddress('miner_address'));

// Mine again to get reward
console.log("\nMining another block...");
eduCoin.minePendingTransactions('miner_address');

console.log('Balance of miner_address after mining another block:', eduCoin.getBalanceOfAddress('miner_address'));
