import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
//import { type GameModules } from "../../Components/Editor/ModuleForms";
import ModuleForms from "../../Components/Editor/ModuleForms";
import FadeDiv from "../../Components/Helpers/FadeDiv";

const Editor: NextPage = () => {
  const [show, setShow] = useState<boolean>(true);

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
