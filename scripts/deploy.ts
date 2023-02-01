import { ethers, run, network  } from "hardhat";

async function main() {
  const NFTmarkFactory = await ethers.getContractFactory("User");
  const NFTmark = await NFTmarkFactory.deploy();

  await NFTmark.deployed();

  if (network.config.chainId === 5) {
    await NFTmark.deployTransaction.wait(6);
    await verify(NFTmark.address, []);
  } else {
    console.log('Chain id is not 5');
  }

  console.log(`Deployed contract to ${NFTmark.address}`);
}

async function verify(contractAddress: string, args: any[]) {
  console.log("Verifying Contract");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e.message);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
