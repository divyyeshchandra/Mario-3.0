// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";
contract RunnerCollection is ERC1155 {

    string public name;
    string public symbol;
    uint256 public tokenCount;
    string public baseUri;

constructor(string memory _name, string memory _symbol, string memory _baseUri) ERC1155 (_baseUri){
    name=_name;
    symbol=_symbol;
    baseUri=_baseUri;
}

function mint(uint256 amount) public{
    tokenCount+=1;
    _mint(msg.sender,tokenCount,amount,"");
}

function uri(uint256 _tokenId) override public view returns (string memory){
    return string(
        abi.encodePacked(
            baseUri,
            Strings.toString(_tokenId),
            ".json"
        )
    );
}

}