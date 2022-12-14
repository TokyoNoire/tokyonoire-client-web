import React, { type ReactElement } from "react";
import TextField from "@mui/material/TextField";
import { type saveGameInfo } from "../../types/global";
import SearchIcon from '@mui/icons-material/Search';

interface props {
  publicGames: saveGameInfo[];
  setGameId: (string: string) => void;
  setGame: ({ }: saveGameInfo) => void;
  handleOpen: () => void;
  game: saveGameInfo | null;
  gameId: string | null;
}


const ListOfPublicGames = (props: props): ReactElement => {
  const { publicGames } = props;

  const publicGamesListing = publicGames.map((publicGame, index) => {
    console.log(publicGame)
    return <tbody key={index}>
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-2 font-heading whitespace-nowrap"
        >
          {publicGame.titleOfGame}
        </th>
        <td className="px-6 py-4 font-heading">{publicGame.startingLocationCoordinates}</td>
      </tr>
    </tbody>
  })

  return (
    <div className="w-screen h-screen mt-20">
      <h1 className="mb-5 text-center text-m font-heading">
        &quot;Or, do you want to choose an open case?&quot;
      </h1>
      <div className="flex items-center">
        <select
          id="visibility"
          className="p-2 text-black bg-white rounded-sm h-14 font-heading"
        >
          <option value="">Filter</option>
          <option value="location">Distance From Me</option>
          <option value="name">Case Title</option>
          <option value="author">Author</option>
          <option value="rating">Rating</option>
          <option value="Time">Time</option>
        </select>
        <TextField
          id="caseSearch"
          fullWidth
          label="Search case..."
          variant="filled"
          aria-label="enter a game id"
        //   className=""
        />
        <button id="themeButton" className="self-center h-14 font-heading">
          <SearchIcon/>
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm text-center ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-body2">
                case title
              </th>
              <th scope="col" className="px-6 py-3 font-body2">
                location
              </th>
            </tr>
          </thead>
          {publicGamesListing}
        </table>
      </div>
    </div>
  );
};

export default ListOfPublicGames;