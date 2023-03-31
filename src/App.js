import React, { useState } from "react";
import Form from "./Form";
import Values from "values.js";
import ColorList from "./ColorList";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
