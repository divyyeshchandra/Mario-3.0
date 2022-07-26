let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    console.log("Account address:", await signer.getAddress());

    const balance = await signer.getBalance();
    const convertToEth = 1e18;
    console.log("account's balance in ether:", balance.toString() / convertToEth);
}

async function claimTokens() {
    const runTokenContractAddress = "0x44092A48D957FBaC2B7CD8c7817990c7B2870fd0";
    const runTokenContractAbi = [
        "function mintToken(address account, uint256 amount) public",
    ];
    const runTokenContract = new ethers.Contract(runTokenContractAddress, runTokenContractAbi, provider);
    let convertToWei = 1000000000;
    let amountToClaim = window.totalGweiScore * convertToWei;
    await runTokenContract.connect(signer).mintToken(signer.getAddress(), amountToClaim.toString());
}

async function claimNft() {
    const nftContractAddress = "0x64b24705343A679aF48334E8971658a49027F8b9";
    const mintContractAbi = [
        "function mint(uint256 amount) public",
    ];
    const nftContract = new ethers.Contract(nftContractAddress, mintContractAbi, provider);
    await nftContract.connect(signer).mint(window.totalNFTScore.toString());
}