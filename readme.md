# Simple Blockchain in JavaScript

This is a basic implementation of a blockchain and a simple transaction system in JavaScript. This project includes a `Blockchain` class to manage blocks, a `Transaction` class for handling transactions, and a `Block` class to represent each block in the chain.

## Features

- **Basic Blockchain Structure**: Each block contains a timestamp, transactions, a hash, and the hash of the previous block.
- **Transactions**: Simulate transferring values between addresses.
- **Mining and Proof of Work**: Adds a basic mining system with a configurable difficulty level.
- **Rewards**: Provides a mining reward for each mined block.
- **Address Balance**: Check the balance of any address based on the blockchain data.

## Project Structure

```plaintext
hmicn/course-blockchain-js/
├── blockchain.js        # Contains Block, Transaction, and Blockchain classes
├── main.js              # Script to create a blockchain instance and test transactions
└── README.md            # Project documentation
```