# How Automate Your Smart Contract Verification Programmatically on Celoscan using Hardhat On Every Deployment

This tutorial will guide you through the process of building and deploying a smart contract on Celo's testnet, Alfajores. We'll be using Hardhat, a development environment for Ethereum-like networks, and Solidity, a smart contract programming language.

# Prerequisites

* Node.js
* NPM
* Hardhat

# Getting Started

1. Clone this repository and navigate to its root directory.
2. Run npm install to install the necessary dependencies.
3. Set up a Celo account and obtain some testnet CELO and cUSD.
4. Copy the .env.example file to a new .env file and fill in your account information and private key.
5. Modify the hardhat.config.js file to specify the network paths and variables.
6. Write the smart contract code in contracts/Blogger.sol.
7. Write the deployment script in scripts/deploy.js.
8. Create a separate verify script in utils/verifyContract.js.
9. Update the deployment script to call the verify script.
10. Run npx hardhat run scripts/deploy.js --network alfajores to deploy the contract.

# Installation

1. Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/JovanMwesigwa/automate-smartcontract-verification-on-celoscan
cd <project-name>
```

2. Install the project dependencies:

```bash
npm install
```

3. Create a .env file in the project root and add the following variables:

```bash
ALFAJORES_API_KEY=<your-celoscan-api-key>
ALFAJORES_URL=https://alfajores-forno.celo-testnet.org
PRIVATE_KEY=<your-celo-private-key>
```

You can obtain your ALFAJORES_API_KEY by creating an account on CeloScan and navigating to the API Keys section of your profile.

# Usage

1. Run the following command to compile the smart contract:

```bash
npx hardhat compile
```

2. Run the following command to deploy the smart contract to the Alfajores testnet:

```bash
npx hardhat run --network alfajores scripts/deploy.js
```

3. You should see a message in the console indicating that the contract has been deployed to a specific address on the network. Copy the address to your clipboard.

4. Verify the contract on the network by running the following command:
Try running some of the following tasks:

```bash
npx hardhat run --network alfajores scripts/verify.js --address <contract-address>
```

Replace <contract-address> with the address of the contract you copied in step 3.

5. You should see a message in the console indicating that the contract has been verified on the network.

# Conclusion

Congratulations! You have successfully built and deployed a Solidity smart contract on Celo's Alfajores testnet using Hardhat. This tutorial has provided a basic understanding of the development process for smart contracts and how to deploy them on the Celo network.

# Next Steps

* Modify the smart contract to add more functionality.
* Test the smart contract using Hardhat's testing framework.
* Deploy the smart contract to Celo's mainnet.
* Explore Celo's developer documentation to learn more about developing on the platform.
