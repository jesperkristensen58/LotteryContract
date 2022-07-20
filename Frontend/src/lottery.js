import web3 from './web3';

// The address is obtained from first deploying under the Backend folder and
// then querying the Kovan testnet Etherscan site:
const address = '0x8eD4c26E5a452457BA2F05ec9469B6d29Db63127';
// The ABI comes from the compiled code (just copy paste; TODO we can imagine writing a simple wrapper to auto-fill in the future):
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"inputs":[],"name":"enter","outputs":[],"stateMutability":"payable","type":"function","payable":true,"signature":"0xe97dcb62"},{"inputs":[],"name":"getPlayers","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x8b5b9ccc"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x481c6a75"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x5d495aea"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xf71d96cb"}];

export default new web3.eth.Contract(abi, address);
