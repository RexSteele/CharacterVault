async function main() {

    const [deployer] = await ethers.getSigners("localhost:8545");

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const CVF = await ethers.getContractFactory("CharacterVault");
    const CV = await CVF.deploy();

    console.log("CharacterVault contract address:", CV.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
