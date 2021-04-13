import React from "react";
import { FeedbackForm } from "./FeedbackForm";
import { Statics } from "./Statics";
import "./App.css";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);

  const experienceFields = [
    {
      name: "good",
      value: good,
      score: 1,
      updateValue: setGood,
      color: "green",
    },
    {
      name: "neutral",
      value: neutral,
      score: 0,
      updateValue: setNeutral,
      color: "#b56822",
    },
    {
      name: "bad",
      value: bad,
      score: -1,
      updateValue: setBad,
      color: "#963017",
    },
  ];

  return (
    <div className="App">
      <FeedbackForm formOptions={experienceFields} />
      <Statics fields={experienceFields} />
    </div>
  );
};

export default App;
