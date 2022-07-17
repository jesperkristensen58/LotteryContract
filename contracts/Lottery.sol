// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;


contract Lottery {

    address private manager;  // the manager who can trigger the end-of-auction event and reset
    address payable[] private players;  // who is entered into the lottery (no need to know the amount per player)
    uint private potSize;  // the lottery pot [wei]

    modifier onlyManager() {
        // Restrict access to a function allowing *only* the Manager to call it
        require(msg.sender == manager, "Only the manager of this lottery is allowed to call this function!");
        _;
    }

    constructor (address _manager) {
        // The contract deployer becomes the manager
        manager = _manager;
    }

    function enter(address payable player) external payable {
        // Enter a player into the lottery.
        // This player is an address which can receive money in case they win later on.
        // Note: Does not check for duplicates (we could via a mapping though)
        // When a player enters, they need to pay an amount of eth to enter
        // maybe we have a threshold to enter...
        require(msg.value > 0, "Please enter with a finite amount of ether!");
        potSize += msg.value;

        players.push(player);
    }

    function pickWinner() payable external onlyManager {
        // step 1: randomly pick a player from the array
        // TODO: replace by VRF
        require(players.length > 0, "Nobody has been entered into the lottery yet!");

        uint random_number = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, players, potSize)));
        // step 2: convert this random number into an index into the array
        uint playerIndex = random_number % players.length;  // the winning player

        // now send all the money to the winner
        address payable winner = players[playerIndex];
        uint tmpPotsize = potSize;

        _reset(); // reset state before transfer

        winner.transfer(tmpPotsize);
    }

    function _reset() private {
        potSize = 0;
        players = new address payable[](0);

        // sanity check
        require(players.length == 0);
        require(potSize == 0);
    }
}