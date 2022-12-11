import React, { type FC, type ReactElement } from "react";
import GameCard from "./GameCard";

const GameList: FC = (): ReactElement => {

  
  
  return (
    <div className="grid grid-cols-4 gap-3 mx-2 place-items-center">
      <GameCard/>
      <GameCard/>
      <GameCard/>
    </div>
  );
};

export default GameList;
