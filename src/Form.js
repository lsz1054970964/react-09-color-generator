import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("#f15025");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h3>color generator</h3>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        ></input>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        ></input>
        <button className="btn" type="submit" style={{ background: color }}>
          generate
        </button>
      </form>
    </section>
  );
};

export default Form;
