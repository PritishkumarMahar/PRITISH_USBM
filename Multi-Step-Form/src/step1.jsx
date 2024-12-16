import React from "react";
import { useNavigate } from "react-router-dom";

const Step1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }
    navigate("/step2");
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;
