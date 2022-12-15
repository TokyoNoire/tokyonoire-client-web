import { type NextPage } from "next";
import { useState } from "react";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
import ModuleForms from "../../Components/Editor/ModuleForms";
import FadeDiv from "../../Components/Helpers/FadeDiv";

const Editor: NextPage = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <FadeDiv show={show}>
      <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 mt-32 place-items-stretch">
        <DragAndDropEditor />
        <div className="fixed top-32 right-16 w-4/12 h-full">
          <ModuleForms />
        </div>
      </div>
    </FadeDiv>
  );
};
export default Editor;
