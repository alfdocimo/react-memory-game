import React from "react";

const GamePanel = ({ currentRound, resetSelected, leftToSelect }) => {
  return (
    <div>
      <p>{currentRound}</p>
      <button onClick={() => resetSelected()}>Reset!</button>
      <p>{leftToSelect}</p>
    </div>
  );
};

export default GamePanel;
