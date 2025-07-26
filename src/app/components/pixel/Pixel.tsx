import React, { useState, useEffect } from "react";

// Define el componente Pixel
const Pixel = ({ isOn, togglePixel, pixelSize }: any) => {
  return (
    <div
      onClick={togglePixel}
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        backgroundColor: isOn ? "black" : "#aaa",
        boxShadow: "inset 0px 0px 0px 1px #95ff00",
        cursor: "pointer",
      }}
    ></div>
  );
};

// Define el componente Grid
const Grid = ({ rows = 9, cols = 8, drawPattern }: any) => {
  const [pixels, setPixels] = useState(
    Array(rows)
      .fill(null)
      .map(() => {
        const pixel = Array(cols);
        console.log(pixel);
        return pixel.fill(false);
      })
  );

  const [pixelSize, setPixelSize] = useState(10); // Tamaño inicial

  // Cambia el tamaño dinámicamente según la resolución
  useEffect(() => {
    if (window.innerWidth < 800) {
      setPixelSize(40);
    }
  }, []);

  const togglePixel = (row: any, col: any) => {
    const newPixels = pixels.map((r, rowIndex) =>
      r.map((c, colIndex) => (rowIndex === row && colIndex === col ? !c : c))
    );
    setPixels(newPixels);
  };

  const draw = (pattern: any) => {
    const newPixels = Array(rows)
      .fill(null)
      .map((_, rowIndex) =>
        Array(cols)
          .fill(false)
          .map((_, colIndex) => pattern[rowIndex]?.[colIndex] || false)
      );
    setPixels(newPixels);
  };

  useEffect(() => {
    if (drawPattern) {
      draw(drawPattern);
    }
  }, [drawPattern]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, ${pixelSize}px)`,
        gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
      }}
    >
      {pixels.map((row, rowIndex) =>
        row.map((isOn, colIndex) => (
          <Pixel
            key={`${rowIndex}-${colIndex}`}
            isOn={isOn}
            togglePixel={() => togglePixel(rowIndex, colIndex)}
            pixelSize={pixelSize}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
