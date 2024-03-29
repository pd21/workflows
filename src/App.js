import React from "react"
import ImageComp from "./Image";
import ReactDOM  from "react-dom"


if(process.env.NODE_ENC !== "production") {
    const axe = require("@axe-core/react");
    axe(React, ReactDOM,1000); 
}

function App() {
  return (
    <div className="App">
      hello there testingg
      <ImageComp />
    </div>
  );
}

export default App;
