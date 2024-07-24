import React from "react";
import ReactDOM from "react-dom/client";

const newRoot = React.createElement("div", { id: "Div" }, [
  React.createElement("h1", { id: "heading." }, "This iS H1 Tag"),
  React.createElement("h2", { id: "heading.." }, "This iS H2 Tag"),
  React.createElement("h3", { id: "heading..-" }, "This iS H3 Tag"),
  React.createElement("h4", { id: "heading..." }, "This iS H4 Tag"),
  React.createElement("h4", { id: "heading...." }, "This iS H4 Tag")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(newRoot);
