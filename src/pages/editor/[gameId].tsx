import { type NextPage } from "next";
import { useState, useEffect, useContext } from "react";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
import ModuleForms from "../../Components/Editor/ModuleForms";
import FadeDiv from "../../Components/Helpers/FadeDiv";
import AppContext from "../../AppContext";
import { useRouter } from "next/router";

const Editor: NextPage = () => {
  const [show, setShow] = useState<boolean>(true);
  const value = useContext(AppContext);
  const { setGameData, setGameModules, setGameInfoModule, userId, username } = value
  // const { game, gameId } = props;
  const router = useRouter();

  useEffect(() => {
      if (!userId) {
          alert("You must be signed in to use the editor")
          router.push('/')
      }
  }, [userId])

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
