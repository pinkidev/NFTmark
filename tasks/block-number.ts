const { task } = require("hardhat/config");

task("block-number", "Prints block number").setAction(async (taskArgs: any[], hre:any) => {
  const blockNumber = await hre.ethers.provider.getBlockNumber();
  console.log("The block number is: ", blockNumber);
});

module.exports = {};