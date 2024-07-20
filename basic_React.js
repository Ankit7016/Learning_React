const newRoot = React.createElement("div", { id: "Div" }, [
  React.createElement("H1", { id: "heading" }, "This iS H1 Tag"),
  React.createElement("H2", { id: "heading" }, "This iS H2 Tag"),
  React.createElement("H3", { id: "heading" }, "This iS H3 Tag"),
  React.createElement("H4", { id: "heading" }, "This iS H4 Tag")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(newRoot);
