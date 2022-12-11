import { type NextPage } from "next";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
import ModuleForms from "../../Components/Editor/ModuleForms";
// import Link from "next/link";

const Editor: NextPage = () => {
  return (
    <>
   <div className="grid items-center justify-center grid-cols-2 gap-10 place-items-stretch">
        <DragAndDropEditor/>
        <ModuleForms />
   </div>
    </>
  );
};

export default Editor;