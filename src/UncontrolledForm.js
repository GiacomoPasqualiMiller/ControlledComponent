import React, { useRef } from "react";

export const UncontrolledForm = () => {
  const nameInput = useRef();
  const ageInput = useRef();
  const hairColorInput = useRef();

  const handleSubmit = (e) => {
    console.log(nameInput.current);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameInput} />
      <input type="number" name="age" placeholder="Age" ref={ageInput} />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" placeholder="Name" value="Submit" />
    </form>
  );
};
