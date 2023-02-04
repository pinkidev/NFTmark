import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "dotenv/config";
import "./tasks/block-number";
import "solidity-coverage";
import "@typechain/hardhat";
import "hardhat-deploy";

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_TESTNET = process.env.GOERLI_TESTNET;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
	solidity: "0.8.17",
	networks: {
		goerli: {
			url: GOERLI_TESTNET,
			accounts: [PRIVATE_KEY],
			chainId: 5,
		},
		localhost: {
			url: "http://localhost:7545",
			chainId: 5777,
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	gasReporter: {
		enabled: true,
		currency: "USD",
		outputFile: "gas-report.txt",
		noColors: true,
		coinmarketcap: COINMARKETCAP_API_KEY,
		token: "FTM",
	},
};
