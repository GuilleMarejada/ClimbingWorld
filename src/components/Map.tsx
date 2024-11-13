// Map.tsx
import React from "react";
import testroco from "@image/testroco.jpg?url";

const ruteador = (x: number, y: number) => {
  console.log({ x, y });
};

const Map = () => {
  return (
    <div>
      <h1>Mapaa</h1>
      <img
        onClick={(e) => ruteador(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        src={testroco}
        alt="Map placeholder"
      />
    </div>
  );
};

export default Map;
