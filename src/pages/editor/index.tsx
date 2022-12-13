import { type NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
//import { type GameModules } from "../../Components/Editor/ModuleForms";
import ModuleForms from "../../Components/Editor/ModuleForms";
import FadeDiv from "../../Components/Helpers/FadeDiv";

const Editor: NextPage = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <FadeDiv show={show}>
      <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 mt-28 place-items-stretch">
        <DragAndDropEditor />
        <div className="relative flex flex-col justify-start w-full px-6 py-4 overflow-scroll rounded shadow-lg h-144 bg-darkGrey shadow-slate-100">
          <ModuleForms />
        </div>
      </div>
    </FadeDiv>
  );
};
export default Editor;
