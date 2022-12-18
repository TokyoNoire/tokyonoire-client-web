import React, { type ReactElement } from "react";
import Image from "next/image";
import { type GameModule } from "../../types/global";
import FadeDiv from "../Helpers/FadeDiv";

interface props {
  gameObject: GameModule;
}

const LocationModule = (props: props): ReactElement => {
  const { gameObject } = props;


  return (
    <FadeDiv>
      <div className="self-center w-full flexCenterDiv shadow-inset1">
        <div className="self-center mb-5 flexCenterDiv">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            {gameObject.title}
          </h1>
          <div className="self-center w-10/12 m-4 flexCenterDiv">

            {gameObject.imageURL? 
            <img
            src={gameObject.imageURL}
            alt="Location Module Image"
            className="rounded-lg"
          />:
          ""}
            
          </div>
          {gameObject.description?   <p className="px-6 mt-2 text-justify font-body1">
            {gameObject.description}
          </p> : ""}
        
        </div>
      </div>

    
    </FadeDiv>
  );
};

export default LocationModule;