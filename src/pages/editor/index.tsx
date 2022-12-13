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
      <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 mt-28 place-items-stretch">
        <DragAndDropEditor />
        <div className="fixed top-28 right-20 w-5/12 h-full">
          <div
            className="scrollbar relative w-full justify-start flex flex-col px-6 py-4 rounded shadow-lg bg-darkGrey shadow-slate-100 overflow-x-hidden overflow-y-auto"
            style={{ height: "calc(100vh - 10rem)" }}
          >
            <ModuleForms />
          </div>
        </div>
      </div>
    </FadeDiv>
  );
};
export default Editor;
