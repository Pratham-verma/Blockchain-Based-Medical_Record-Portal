const hre = require("hardhat");
const config = require("../src/config.json");

const wait = (seconds) => {
    const milliseconds = seconds * 1000;
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function main() {
    const { chainId } = await hre.ethers.provider.getNetwork();
    console.log(`Using chainId ${chainId}`);
    const accounts = await hre.ethers.getSigners();
    const medical = await hre.ethers.getContractAt(
        "MedicalRecord",
        config[chainId].MedicalRecord.address
    );
    console.log(`MedicalRecord smart contract fetched at ${medical.address}`);
    
    const user1 = accounts[0];
    const transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Aman Gupta",
            44,
            "Male",
            "B positive",
            "Allergic rhinitis",
            "Hypertension ",
            "Medications"
        );
    
    console.log(`Transaction hash: ${transactionResponse.hash}`);
    await transactionResponse.wait();
    console.log("Transaction confirmed");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });