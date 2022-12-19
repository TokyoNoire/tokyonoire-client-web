import React, { type ReactElement, useContext, type MutableRefObject  } from "react";
import axios from 'axios'
import AppContext from "../../AppContext";
import { useRouter } from "next/router";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ClearIcon from "@mui/icons-material/Clear";
import { type saveGameInfo } from "../../types/global";
import Image from 'next/image'

interface Props {
  game: saveGameInfo;
  handleClose: () => void;
  gameId: MutableRefObject<string | null>;
}

const GamePreview = (props: Props): ReactElement => {
  const value = useContext(AppContext)
  const {userId, sessionTable, setSessionTable, sessionGameIndex} = value
  const { game, handleClose, gameId } = props;
  const router = useRouter();

  const getOrCreateSession = async() => {
    console.log("I ran!")
    await axios.get(`https://tokyo-noire-server-development.herokuapp.com/findsession/${gameId.current}/${userId}`).then(response => {
      setSessionTable(response.data)
      sessionGameIndex.current = response.data.gameModulesIndex;
    })
  }
  const handleClick = (e: React.MouseEvent) => {
    getOrCreateSession();
    e.preventDefault();
    router.push({
      pathname: "/game/[gameId]",
      query: { gameId: gameId.current },
    });
  };
  console.log(game)

  return (
    <div className="relative block flexCenterDiv bg-darkGrey">
      <div className="absolute top-4 right-4 flexCenterDiv ">
        <ClearIcon onClick={handleClose} />
      </div>
      <div className="self-center flexCenterDiv">
        <h1 className="self-center p-5 mt-5 text-2xl text-center uppercase font-heading">
          {game.titleOfGame}
        </h1>
        <p className="self-center pb-3 font-heading">{game.author}</p>

        <div className="grid grid-cols-2 gap-1 place-items-center">
          <AccessTimeFilledIcon fontSize="small" />
          <p className="self-center font-heading">RATING</p>
          <p className="self-center text-xs font-body2">
            {game.estimatedTimeMinutes} minutes
          </p>
          <p className="self-center font-body2">{game.rating}</p>
        </div>
        <div className="self-center my-5 flexCenterDiv">
          <img src={game.gameImageURL} alt="Game Image" className="w-100" />
        </div>
        <p className="px-2 mt-5 font-body1">{game.description}</p>
      </div>

      <div className="flex flex-row flexCenterDiv">
        <button
          onClick={handleClick}
          id="themeButton"
          className="self-center w-20 mx-2 mt-10 mb-8 font-heading"
          type="button"
        >
          start
        </button>
      </div>
    </div>
  );
};

export default GamePreview;
