import React, { type FC, type ReactElement } from "react";

const GameCard: FC = (): ReactElement => {

  
  
  return (
    <div className="w-full gap-3 rounded-md h-96 bg-darkGrey">
      <div className="self-center flexCenterDiv">
        <h1 className="self-center p-5 mt-5 text-2xl text-center uppercase font-heading">

          title
        </h1>
        <p className="self-center pb-3 font-heading">author</p>

        <div className="grid grid-flow-row font-body1">
          <p>complete</p>
          
        </div>
        
          {/* <img src={game.image} alt="Game Home Image" className="rounded-lg w-80 " /> */}
      
        <div className="self-center flexCenterDiv">
        </div>
      </div>
    </div>
  );
};

export default GameCard;