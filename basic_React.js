import React from "react";
import ReactDOM from "react-dom/client";

const NeH1FunctionalComponent = () => (
  <h1 className="h1Title">This Is React first functional component</h1>
);
const NeH2FunctionalComponent = () => (
  <div id="thiisDiv">
    <NeH1FunctionalComponent />
    <h1 className="h1Title">This Is React second functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NeH2FunctionalComponent />);
