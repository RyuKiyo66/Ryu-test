import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <p style={contentStyle}>How are you?</p>
      <p style={contentLadyStyle}>How are you?</p>
      <button onClick={onClickButton}>BUTTON</button>
    </>
  );
};

export default App;
