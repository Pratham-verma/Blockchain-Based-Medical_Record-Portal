import React, { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { submitRecord } from "../../store/interactions";

const Form = () => {
    const provider = useSelector((state) => state.provider.connection);
    const medical = useSelector((state) => state.medical.contract);
    const account = useSelector((state) => state.provider.account);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        bloodType: "",
        allergies: "",
        diagnosis: "",
        treatment: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await submitRecord(
                formData.name,
                formData.age,
                formData.gender,
                formData.bloodType,
                formData.allergies,
                formData.diagnosis,
                formData.treatment,
                provider,
                medical,
                dispatch
            );
            setFormData({
                name: "",
                age: "",
                gender: "",
                bloodType: "",
                allergies: "",
                diagnosis: "",
                treatment: ""
            });
        } catch (error) {
            console.error("Error submitting record:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            {account ? (

                <form onSubmit={submitHandler} className="patient-form">
                    <h1>Patient Details</h1>
                    <div className="form-group">
                        <label htmlFor="name">Patient Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onChange={handleChange}
                            value={formData.name}
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            required
                            onChange={handleChange}
                            value={formData.age}
                            placeholder="30"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select
                            name="gender"
                            id="gender"
                            required
                            onChange={handleChange}
                            value={formData.gender}
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bloodType">Blood Type:</label>
                        <input
                            type="text"
                            id="bloodType"
                            name="bloodType"
                            required
                            onChange={handleChange}
                            value={formData.bloodType}
                            placeholder="A positive"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="allergies">Allergies:</label>
                        <input
                            type="text"
                            id="allergies"
                            name="allergies"
                            required
                            onChange={handleChange}
                            value={formData.allergies}
                            placeholder="Penicillin, Peanuts"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="diagnosis">Diagnosis:</label>
                        <input
                            type="text"
                            id="diagnosis"
                            name="diagnosis"
                            required
                            onChange={handleChange}
                            value={formData.diagnosis}
                            placeholder="Hypertension"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="treatment">Treatment:</label>
                        <input
                            type="text"
                            id="treatment"
                            name="treatment"
                            required
                            onChange={handleChange}
                            value={formData.treatment}
                            placeholder="Prescribed medication"
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="submit-btn">
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
    ) : (
        <>
            <div className="connect-message">
                <h1>Please connect your wallet to access the system</h1>
                <p>Ensure you have MetaMask or a compatible wallet installed and connected to the correct network.</p>
            </div>
        </>
    )
}
        </div >
    );
};

export default Form;