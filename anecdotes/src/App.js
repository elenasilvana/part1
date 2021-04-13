import React from "react";
import "./App.css";
import { ReactComponent as FavoriteIcon } from "./favorite-icon.svg";

const buttonStyles = { padding: "8px 16px", border: "none", margin: "5px 5px" };

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const MessageBox = ({ header, message, votes, background }) => {
  const renderVotes =
    votes === 1 ? (
      <span>
        <FavoriteIcon />
      </span>
    ) : (
      <span>
        <FavoriteIcon />
        <span>{votes}</span>
      </span>
    );

  return (
    <>
      <h3>{header}</h3>
      <div
        style={{
          width: "100%",
          height: 250,
          background: background || "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <div>
          <div>
            <span>
              <strong style={{ fontSize: "1em" }}>{message}</strong>
            </span>
          </div>
          {votes !== undefined && renderVotes}
        </div>
      </div>
    </>
  );
};

function App() {
  const [points, setPoints] = React.useState({});
  const [mostVoted, setMostVoted] = React.useState(undefined);
  const [selected, setSelected] = React.useState(0);

  const calculateNumber = (min, max) => {
    console.log("min", min);
    console.log("max", max);
    const result = Math.floor(Math.random() * max - min + min);
    console.log("result", result);
    return result;
  };

  const handleNextAnecdote = () => {
    setSelected(calculateNumber(1, anecdotes.length));
  };

  const handleVote = () => {
    setMostVoted((currentIndex) => {
      const newIndex =
        points[currentIndex] < points[selected] ? selected : currentIndex;
      return currentIndex !== undefined ? newIndex : selected;
    });

    setPoints((currentPoints) => {
      let updatePoints = {
        ...currentPoints,
        [selected]: currentPoints[selected] ? currentPoints[selected] + 1 : 1,
      };
      return updatePoints;
    });
  };

  return (
    <>
      <MessageBox
        message={anecdotes[selected]}
        votes={points[selected]}
        header="Coding anecdote of the day"
        background="#d8dada"
      />

      <div>
        <button
          style={{ ...buttonStyles, background: "#00bcd4" }}
          onClick={handleNextAnecdote}
        >
          Next anecdote
        </button>
        <button
          style={{ ...buttonStyles, background: "#87CEEB" }}
          onClick={handleVote}
        >
          vote
        </button>
      </div>
      {mostVoted !== undefined && (
        <MessageBox
          message={anecdotes[mostVoted]}
          votes={points[mostVoted]}
          header="Most voted coding anecdote"
        />
      )}
    </>
  );
}

export default App;
