import React from "react";
import { useNavigate } from "react-router-dom";

const Step2 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (!formData.address || !formData.city || !formData.postalCode) {
      alert("Please fill in all fields.");
      return;
    }
    navigate("/step3");
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <form>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
        />
        <button type="button" onClick={() => navigate("/")}>
          Back
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Step2;
