import React from "react";
import Button from "../Button";
import Banner from "../Banner";

const GamePanel = ({ currentRound, resetSelected, leftToSelect }) => {
  return (
    <div>
      <Banner fontSize={25} color="tertiary">
        🎯You're in the #{currentRound} round!
      </Banner>
      <Banner fontSize={25} color="secondary">
        💭You have {leftToSelect} cards left!
      </Banner>
      <Button fontSize={30} onClick={() => resetSelected()}>
        Reset!
      </Button>
    </div>
  );
};

export default GamePanel;
