require('dotenv').config();

console.log("Deploying the Lottery contract...");

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { abi, evm } = require('./compile');
 
// You get the env variables from your local environment
// (set them in your ~/.zshrc file or what is appropriate for your shell)
provider = new HDWalletProvider(
  process.env.DEPLOYER_PRIVATE_KEY,
  process.env.KOVAN_URL
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [accounts[0]] })
    .send({ gas: '1000000', from: accounts[0] });
 
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
 
deploy();