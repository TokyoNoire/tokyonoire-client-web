import { type NextPage } from "next";
import ModuleForms from "../../Components/Editor/ModuleForms";
// import Link from "next/link";

const Editor: NextPage = () => {
  return (
    <>
   <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 place-items-stretch">
      <div className="self-center">
        <h1 className="text-7xl">PUT DND HERE</h1>
      </div>
        <ModuleForms />
   </div>
    </>
  );
};

export default Editor;