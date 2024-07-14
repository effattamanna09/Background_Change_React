import React, { useState } from "react";
import BgButton from './BgButton.jsx';

export default function BgChange() {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  // Array of color options
  const colorOptions = ["red", "blue", "green", "yellow"];

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor }}>
        <div className="flex justify-center gap-3 mt-6">
          {colorOptions.map((color, index) => (
            <BgButton key={index} btnColor={color} onClick={handleColorChange} />
          ))}
        </div>
      </div>
    </>
  );
}
