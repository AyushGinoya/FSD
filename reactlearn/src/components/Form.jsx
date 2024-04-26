import React, { useState } from "react";

const Form = ({ skills }) => {
  const skill = skills || ["English", "Gujrati", "Hindi"];

  const obj = {
    name: "",
    rollno: "",
    FSD: false,
    PPS: false,
    selectedOption: "",
  };
  const [form, setForm] = useState(obj);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const displayMessage = () => {
    if (form.selectedOption === "IT") {
      return <p style={{ color: "green" }}>You have selected IT.</p>;
    } else if (form.selectedOption === "CE") {
      return <p style={{ color: "green" }}>You have selected CE.</p>;
    } else {
      return <p style={{ color: "red" }}>Please select a branch.</p>;
    }
  };

  return (
    <form>
      Name:{" "}
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <br />
      Roll No:{" "}
      <input
        type="number"
        name="rollno"
        value={form.rollno}
        onChange={handleChange}
      />
      <br />
      FSD:{" "}
      <input
        type="checkbox"
        name="FSD"
        checked={form.FSD}
        onChange={handleChange}
      />
      <br />
      PPS :
      <input
        type="checkbox"
        name="PPS"
        checked={form.PPS}
        onChange={handleChange}
      />
      <br />
      IT:{" "}
      <input
        type="radio"
        name="selectedOption"
        value="IT"
        checked={form.selectedOption === "IT"}
        onChange={handleChange}
      />
      CE:{" "}
      <input
        type="radio"
        name="selectedOption"
        value="CE"
        checked={form.selectedOption === "CE"}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
      <p>Name: {form.name}</p>
      <p>Roll No: {form.rollno}</p>
      <p>FSD: {form.FSD ? "Yes" : "No"}</p>
      <p>PPS: {form.PPS ? "Yes" : "No"}</p>
      <p>Selected Branch: {form.selectedOption}</p>
      <h4>Skills:</h4>
      <ul>
        {skill.map((skillItem, index) => (
          <li key={index}>{skillItem}</li>
        ))}
      </ul>
      {displayMessage()}
    </form>
  );
};

export default Form;
