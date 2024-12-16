import React from "react";
import { useNavigate } from "react-router-dom";

const Step3 = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Form Submitted Successfully!");
    console.log("Submitted Data:", formData);
  };

  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <ul>
        <li><strong>First Name:</strong> {formData.firstName}</li>
        <li><strong>Last Name:</strong> {formData.lastName}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Address:</strong> {formData.address}</li>
        <li><strong>City:</strong> {formData.city}</li>
        <li><strong>Postal Code:</strong> {formData.postalCode}</li>
      </ul>
      <button type="button" onClick={() => navigate("/step2")}>
        Back
      </button>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Step3;
