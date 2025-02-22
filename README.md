# XRPL Project 1: My First Blockchain Project on the XRP Ledger

Welcome to **XRPL Project 1** – my first hands-on blockchain project using the XRP Ledger (XRPL)! This project demonstrates how to interact with XRPL via code, showcasing key functionalities like wallet creation, token issuance, and basic transaction handling on the Testnet.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Acknowledgements](#acknowledgements)

## Overview
In this project, I built a simple application that:
- Connects to the XRPL Testnet.
- Creates and manages XRPL wallets.
- Demonstrates issuing custom tokens (IOUs) on the ledger.
- Processes basic Payment transactions.
- Retrieves and displays account balances and transaction history.

The goal was to understand XRPL’s core features, including fast settlement, low fees, and transparency, while applying blockchain concepts to real-world scenarios like micro-lending and tokenized assets.

## Features
- **Wallet Creation**: Generate new wallets using the XRPL Testnet faucet.
- **Token Issuance**: Issue a custom token (for example, "MYTOKEN") from an issuer account.
- **Trust Line Setup**: Enable trust lines between accounts to accept custom tokens.
- **Payment Transactions**: Transfer custom tokens between accounts.
- **Balance Check**: Retrieve and display both XRP and custom token balances.

## Technologies Used
- **Programming Language**: JavaScript (Node.js)
- **Blockchain**: XRP Ledger (Testnet)
- **Library**: [xrpl.js](https://github.com/XRPLF/xrpl.js)
- **Version Control**: Git and GitHub

## Setup & Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/cloudnine-alt/xrpl-proj1.git
   cd xrpl-proj1
