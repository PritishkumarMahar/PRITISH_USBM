import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Step1 formData={formData} setFormData={setFormData} />} />
          <Route path="/step2" element={<Step2 formData={formData} setFormData={setFormData} />} />
          <Route path="/step3" element={<Step3 formData={formData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
