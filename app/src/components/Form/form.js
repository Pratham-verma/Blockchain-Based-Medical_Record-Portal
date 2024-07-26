import React, { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { submitRecord } from "../../store/interactions";
const Form = () => {
    const provider = useSelector((state) => state.provider.connection);
    const medical = useSelector((state) => state.medical.contract);
    const account = useSelector((state) => state.provider.account);
    const [name, setName] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(0);
    const [bloodType, setBloodType] = useState(0);
    const [allergies, setAllergies] = useState(0);
    const [diagnosis, setDiagnosis] = useState(0);
    const [treatment, setTreatment] = useState(0);
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        submitRecord(
            name,
            age,
            gender,
            bloodType,
            allergies,
            diagnosis,
            treatment,
            provider,
            medical,
            dispatch
        );

    };

        return (
            <div className="login-container">
                {account ? (
                    <form onSubmit={submitHandler}>
                        <h1>Patient Detials</h1>
                        <label htmlFor="name">Patient Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name === 0 ? "" : name}
                            placeholder="Pratham verma"
                        />
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            required
                            onChange={(e) => setAge(e.target.value)}
                            value={age === 0 ? "" : age}
                            placeholder="21"
                        />
                        <label htmlFor="gender">Gender:</label>
                        <select
                            name="gender"
                            id="gender"
                            required
                            onChange={(e) => setGender(e.target.value)}
                            value={gender === 0 ? "" : gender}
                        >
                            <option value="" disabled>
                                Select Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label htmlFor="bloodtype">Blood Type:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={bloodType === 0 ? "" : bloodType}
                            onChange={(e) => setBloodType(e.target.value)}
                            placeholder="O positive"
                        />
                        <label htmlFor="allergies">Allergies:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={allergies === 0 ? "" : allergies}
                            onChange={(e) => setAllergies(e.target.value)}
                            placeholder="Pollen allergy"
                        />
                        <label htmlFor="diagnosis">Diagnosis</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={diagnosis === 0 ? "" : diagnosis}
                            onChange={(e) => setDiagnosis(e.target.value)}
                            placeholder="Osteoporosis"
                        />
                        <label htmlFor="address">Treatment:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={treatment === 0 ? "" : treatment}
                            onChange={(e) => setTreatment(e.target.value)}
                            placeholder="Surgery"
                        />
                        <input type="submit" value="submit" />
                    </form>
                ) : (
                    <h1>Connect the account first</h1>
                )};
            </div>
        );
    };
    export default Form;