import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
import { type GameModules } from "../../Components/Editor/ModuleForms";
import ModuleForms from "../../Components/Editor/ModuleForms";
// import Link from "next/link";

export type saveGameInfo = {
  titleOfGame: string;
  isPublished: string;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image?: string;
  estimatedTimeMinutes?: number | string | null;
  gameModules?: GameModules;
  startLocationCoordinates?: Array<number>;
};

const Editor: NextPage = () => {
  const [gameData, setGameData] = useState<saveGameInfo>({
    titleOfGame: "",
    isPublished: "false",
  });

  useEffect(() => {
    console.log(gameData);
  }, [gameData]);
  const saveGame = async () => {
    await axios.post("editor", gameData);
  };
  return (
    <>
      <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 place-items-stretch">
        <DragAndDropEditor />
        <ModuleForms setGameData={setGameData} gameData={gameData} />
        <button id="themeButton" className=" w-1/2 mt-10 mb-5">
          Publish Game
        </button>
        <button
          id="themeButton"
          className=" w-1/2 mt-10 mb-5"
          onClick={saveGame}
        >
          Save Game
        </button>
      </div>
    </>
  );
};

export default Editor;
