const hre = require("hardhat");

async function main() {
    console.log("Displaying the smart contract..");
    const Medical = await hre.ethers.getContractFactory("MedicalRecord");
    const medical = await Medical.deploy();
    
    console.log("Deploying contract...");
    await medical.waitForDeployment();
    
    const address = await medical.getAddress();
    console.log(`Medical contract deployed to address: ${address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });