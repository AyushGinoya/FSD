import React, { useState } from "react";

const Form = () => {
  const obj = {
    name: "",
    rollno: "",
    FSD: false,
    PPS: false,
    selectedOption: "",
  };
  const [form, setForm] = useState(obj);

  const skill = ["JS", "CSS", "HTML", "Python", "C++", "JAVA"];

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
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
    </form>
  );
};

export default Form;
