require("@nomiclabs/hardhat-waffle");

const {readFileSync} = require('fs');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
const INFURA_PROJECT_ID = "08864891c9864a53a830ed0045f21885";
const RINKEBY_PRIVATE_KEY = readFileSync('./note').toString();

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  paths: {
    sources: "./contracts",
    artifacts: "./build",
  },
  solidity: "0.5.1",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
