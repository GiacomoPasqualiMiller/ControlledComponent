import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [nameError, setNameError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hairColor, sethairColor] = useState("");

  const handleSubmit = (e) => {
    console.log(name);
    e.preventDefault();
  };

  useEffect(() => {
    if (name.length < 2) {
      setNameError("Name must be two or more value");
    } else {
      setNameError("");
    }
  }, [name]);

  return (
    <form onSubmit={handleSubmit}>
      {nameError && <p>Name must be two or more value</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => sethairColor(e.target.value)}
      />
      <button type="submit" placeholder="Name" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
