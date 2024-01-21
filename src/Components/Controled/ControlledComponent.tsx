import React, { FormEvent, useState } from "react";

export default function ControlledComponent() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
    
  };

  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setPerson({ ...person, name: e.target.value });
            }}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(e) => {
              setPerson({ ...person, age: parseInt(e.target.value) });
            }}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
