"use client";

import React from "react";
import Grid from "../pixel/Pixel";

const G = [
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, false, false, false, false, false],
  [false, true, true, false, true, true, true, false],
  [false, true, true, false, true, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
];

const A = [
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, false, false, true, true, false],
];

const S = [
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, false, false, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, false, false, false, false, true, true, false],
  [false, false, false, false, false, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
];

const P = [
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, false, false, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, false, false, false],
  [false, true, true, false, false, false, false, false],
  [false, true, true, false, false, false, false, false],
];

const E = [
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, false, false, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, false, false, false, false],
  [false, true, true, false, false, false, false, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, true, true, true, true, false],
];

const N = [
  [false, true, true, false, false, true, true, false],
  [false, true, true, true, false, true, true, false],
  [false, true, true, true, false, true, true, false],
  [false, true, true, true, false, true, true, false],
  [false, true, true, true, true, true, true, false],
  [false, true, true, false, true, true, true, false],
  [false, true, true, false, true, true, true, false],
  [false, true, true, false, true, true, true, false],
  [false, true, true, false, false, true, true, false],
];

const LETTERS = [
  { key: "G1", pattern: G },
  { key: "G2", pattern: G },
  { key: "G3", pattern: G },
  { key: "A", pattern: A },
  { key: "S", pattern: S },
  { key: "P", pattern: P },
  { key: "E", pattern: E },
  { key: "N", pattern: N },
];

const CharGrid = () => {
  return (
    <div className="flex justify-center mt-4">
      {LETTERS.map((letter) => (
        <Grid
          key={letter.key}
          rows={9}
          cols={8}
          drawPattern={letter.pattern} // Pasamos directamente el patrón
        />
      ))}
    </div>
  );
};

export default CharGrid;
