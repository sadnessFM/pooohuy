import React from "react";
import "./styles.css";
import ColorCard from "./ColorCard";

export default function App() {
  const [items] = React.useState([1, 2]);

  return (
      <div className="App">
        {items.map((item) => (
            <ColorCard key={item} />
        ))}
      </div>
  );
}
