require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { ROPSTEN_LINK, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    ropsten:{
      url:ROPSTEN_LINK,
      accounts: [PRIVATE_KEY],
    },
  },
};
