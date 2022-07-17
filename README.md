# Lottery Contract

A lottery contract implementation!
A manager creates, by deploying, the contract and players can enter the game by sending ETH to the contract.
The manager then, at some point, ends the lottery and this randomly picks a winner!

----
Test with:

```npm test```

Compile with:

```node compile```

Deploy with:

```node deploy```

This requires that you have set the appropriate deployment environment variables.
Specifically, you need your Infura URL for whichever test network you want to deploy to and you need the private key (or mnemonic) of the deployer address.
You can get the address, e.g., by creating a new Metamask account in a Brave browser.
DANGER: Don't share the private key with anyone and DON'T under any circumstances use your dev wallet (this metamask account just created) to store *real money* in (aka don't use the mainnet account here).
