const hre = require("hardhat");

async function main() {

  const Lock = await hre.ethers.getContractFactory("RunToken");
  const lock = await Lock.deploy();
  await lock.deployed();
  console.log("RunToken ContractAddress:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x44092A48D957FBaC2B7CD8c7817990c7B2870fd0
