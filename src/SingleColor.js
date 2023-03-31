import React from "react";
import rgbToHex from "./utils";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  //const [hex, weight] = color;
  const save = async () => {
    console.log("1");
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("copied to clipboard");
      } catch (error) {
        toast.error("failed to copy");
      }
    } else {
      toast.error("cannot access to clipboard");
    }
  };
  return (
    <article
      onClick={save}
      className={index > 10 ? "color-light" : "color"}
      style={{ background: `#${color.hex}` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
};

export default SingleColor;
