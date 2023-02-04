// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
	// 1000000000
	function getPrice(address _priceFeedAddress) internal view returns (uint256) {
    AggregatorV3Interface priceFeedFunc = AggregatorV3Interface(_priceFeedAddress);

		(, int256 price, , , ) = priceFeedFunc.latestRoundData();
		// ETH/USD rate in 18 digit
		// uint256 ftmPrice = (uint256(price) * 10000000000);
    // uint256 ftmAmountInUsd = (ftmPrice * ftmAmount) / 1e8;
		// return ftmAmountInUsd;
		return uint256(price);
	}
}
