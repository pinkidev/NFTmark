// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import './PriceConverter.sol';
// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract NFTmark {
  using PriceConverter for uint256;
  address currencyPriceFeedAddress;

  constructor(address _currencyPriceFeedAddress){
    currencyPriceFeedAddress = _currencyPriceFeedAddress;
  }
}
