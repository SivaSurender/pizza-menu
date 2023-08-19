import React from "react";

function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Proceed To Next Question
    </button>
  );
}

export default NextButton;
