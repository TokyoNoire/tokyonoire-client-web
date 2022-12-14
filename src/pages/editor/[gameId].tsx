import { type NextPage } from "next";
import { useState, useEffect, useContext, useRef } from "react";
import DragAndDropEditor from "../../Components/Editor/DragAndDropEditor";
import ModuleForms from "../../Components/Editor/ModuleForms";
import FadeDiv from "../../Components/Helpers/FadeDiv";
import AppContext from "../../AppContext";
import axios from 'axios'
import { useRouter } from "next/router";

const Editor: NextPage = () => {
  const [show, setShow] = useState<boolean>(true);
  const value = useContext(AppContext);
  const hasMounted = useRef<boolean>(false);

  const { setGameModules, setGameInfoModule, setGameData, gameData, userId } = value;

  const router = useRouter();

  useEffect(() => {
    if (!userId) {
      alert("You must be signed in to use the editor")
      router.push('/')
    }
  }, [userId])

  const getGameFromServer = async () => {
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/editor/${router.query.gameId}/edit`
      )
      .then((response) => {
        console.log(response.data);
        setGameData(response.data[0]);
        setGameModules(response.data[0].gameModules);
        setGameInfoModule(response.data[0]);
      });
  };

  useEffect(() => {
    if (!hasMounted.current && router.query.gameId) {
      getGameFromServer();
      hasMounted.current = true;
    }
  }, [hasMounted]);

  return (
    userId && (
      <FadeDiv show={show}>
        {gameData &&
          <div className="grid items-center justify-center grid-cols-2 gap-10 m-5 mt-32 place-items-stretch">
            <DragAndDropEditor />
            <div className="fixed top-32 right-40 w-4/12 h-full">
              <ModuleForms />
            </div>
          </div>
        }
      </FadeDiv>
    )
  );
};
export default Editor;
