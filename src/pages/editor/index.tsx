import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
import { type GameModules } from "../../Components/Editor/ModuleForms";
import ModuleForms from "../../Components/Editor/ModuleForms";
import FadeDiv from "../../Components/Helpers/FadeDiv";

export type saveGameInfo = {
  titleOfGame: string;
  isPublished: string | boolean;
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
    isPublished: false,
  });
  const [show, setShow] = useState<boolean>(true);
  useEffect(() => {
    console.log(gameData);
  }, [gameData]);

  return (
    <FadeDiv show={show}>
      <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 place-items-stretch">
        <DragAndDropEditor />
        <ModuleForms />
      </div>
    </FadeDiv>
  );
};
export default Editor;
