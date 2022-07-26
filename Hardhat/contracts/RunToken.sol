// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RunToken is ERC20{
    constructor() ERC20("RunToken","RUN"){
        _mint(msg.sender,20*10**6);
    }

    function mintToken(address account, uint amount) public {
        _mint(account,amount);
    }
}