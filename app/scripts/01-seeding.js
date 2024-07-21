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

    try {
        const medical = await hre.ethers.getContractAt(
            "MedicalRecord",
            config[chainId].MedicalRecord.address
        );
        console.log(`MedicalRecord smart contract fetched at ${medical.address}`);

        let recordId;
        try {
            recordId = await medical.getRecordId();
            console.log(`Current record ID: ${recordId}`);
        } catch (error) {
            console.error("Error calling getRecordId():", error);
            // If getRecordId() fails, we'll use 0 as the starting ID
            recordId = 0;
        }

        const user1 = accounts[0];
        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
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

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Ethan Clark",
                23,
                "Male",
                "O negative",
                "Drug allergy",
                "Bronchitis ",
                "Radiation therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Sofia Wright",
                83,
                "Female",
                "O positive",
                "Sun allergy ",
                "Coronary artery disease ",
                "Behavioral interventions"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Mia Khalifa",
                25,
                "Female",
                "B negative",
                "Chemical allergy ",
                "Rheumatoid arthritis ",
                "Alternative therapies"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Olivia Robinson",
                77,
                "Female",
                "A negative",
                "Animal dander allergy ",
                "Acute appendicitis ",
                "Occupational therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Ryan GupMillerta",
                34,
                "Male",
                "AB positive",
                "Latex allergy",
                "Pneumonia ",
                "Physical therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Ethan Clark",
                23,
                "Male",
                "O negative",
                "Drug allergy",
                "Bronchitis ",
                "Radiation therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "David Wright",
                45,
                "Male",
                "B positive",
                "Insect sting allergy ",
                "Asthma ",
                "Surgery"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Michael Miller",
                34,
                "Male",
                "A negative",
                "Pollen allergy ",
                "Type 2 diabetes ",
                "Psychotherapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
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

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Victoria Robinson",
                93,
                "Female",
                "O negative",
                "Food allergy",
                "Congestive heart failure ",
                "Surgery"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Sofia Wright",
                83,
                "Female",
                "O positive",
                "Sun allergy ",
                "Coronary artery disease ",
                "Behavioral interventions"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Mia Clark",
                29,
                "Female",
                "B negative",
                "Chemical allergy ",
                "Rheumatoid arthritis ",
                "Alternative therapies"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Olivia Robinson",
                77,
                "Female",
                "A negative",
                "Animal dander allergy ",
                "Acute appendicitis ",
                "Occupational therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Michael Miller",
                34,
                "Male",
                "A negative",
                "Pollen allergy ",
                "Type 2 diabetes ",
                "Psychotherapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Victoria Robinson",
                93,
                "Female",
                "O negative",
                "Food allergy",
                "Congestive heart failure ",
                "Surgery"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Sofia Wright",
                83,
                "Female",
                "O positive",
                "Sun allergy ",
                "Coronary artery disease ",
                "Behavioral interventions"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Olivia Robinson",
                77,
                "Female",
                "A negative",
                "Animal dander allergy ",
                "Acute appendicitis ",
                "Occupational therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Ethan Clark",
                23,
                "Male",
                "O negative",
                "Drug allergy",
                "Bronchitis ",
                "Radiation therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "David Wright",
                45,
                "Male",
                "B positive",
                "Insect sting allergy ",
                "Asthma ",
                "Surgery"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
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

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Victoria Robinson",
                93,
                "Female",
                "O negative",
                "Food allergy",
                "Congestive heart failure ",
                "Surgery"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Sofia Wright",
                83,
                "Female",
                "O positive",
                "Sun allergy ",
                "Coronary artery disease ",
                "Behavioral interventions"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Mia Clark",
                29,
                "Female",
                "B negative",
                "Chemical allergy ",
                "Rheumatoid arthritis ",
                "Alternative therapies"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Emma Gupta",
                23,
                "Female",
                "B positive",
                "Dust mite allergy ",
                "Osteoporosis ",
                "Speech therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

        console.log(`Record added with id ${await medical.getRecordId()}`);
        transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Olivia Robinson",
                77,
                "Female",
                "A negative",
                "Animal dander allergy ",
                "Acute appendicitis ",
                "Occupational therapy"
            );

        console.log(`Transaction hash: ${transactionResponse.hash}`);
        await transactionResponse.wait();

    }  catch (error) {
        console.error("Error fetching the contract:", error);
        process.exit(1);
    }
}

main()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });