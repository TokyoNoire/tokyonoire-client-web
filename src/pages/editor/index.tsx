import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
//import { type GameModules } from "../../Components/Editor/ModuleForms";
import ModuleForms from "../../Components/Editor/ModuleForms";
import FadeDiv from "../../Components/Helpers/FadeDiv";
import { useContext } from "react";
import AppContext from "../../AppContext";

const Editor: NextPage = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <FadeDiv show={show}>
      <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 mt-32 place-items-stretch">
        <DragAndDropEditor />
        <div className="fixed top-32 right-16 w-5/12 h-full">
          <ModuleForms />
        </div>
      </div>
    </FadeDiv>
  );
};
export default Editor;
