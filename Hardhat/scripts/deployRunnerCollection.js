const hre = require("hardhat");

async function main() {

  const Lock = await hre.ethers.getContractFactory("RunnerCollection");
  const lock = await Lock.deploy(
    "Runner",
    "RUN",
    "https://ipfs.io/ipfs/QmTCsMc4vjxTSx4vfBz8ZDaugvF3XGcdWuxcN8HN8CobJ6/",
  );
  await lock.deployed();
  console.log("RunnerCollection ContractAddress:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x64b24705343A679aF48334E8971658a49027F8b9
