import React from "react";
import ReactDOM from "react-dom";
// function getButtonText() {
//   return "Bet";
// }
const App = () => {
  const buttonText = { text: "submit", name: "mqueen" };
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter Email
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "orange", color: "white" }}>
        {buttonText.name}
      </button>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
