const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevTokenAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so exchangeContract here is a factory for instances of our Exchange contract.
  */
 const exchangeContract = await ethers.getContractFactory("Exchange");

 // Here we deploy the contract.
 const deployedExchangeContract = await exchangeContract.deploy(
  cryptoDevTokenAddress
 );

 await deployedExchangeContract.deployed()

 // Print the address of the deployed contract.
 console.log("Exchange Contract Address: ", deployedExchangeContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(()=> process.exit(0))
  .catch((error)=> {
    console.error(error);
    process.exit(1);
  })