import React, { type ReactElement, useState, useEffect, useCallback, useRef } from "react";
import TextField from "@mui/material/TextField";
import { type saveGameInfo } from "../../types/global";
import SearchIcon from '@mui/icons-material/Search';
// import Gyroscope from "../GameModules/Helpers/Gyroscope";
import Haversine from "../GameModules/Helpers/Haversine";

interface props {
  publicGames: saveGameInfo[];
  setGameId: (string: string) => void;
  setGame: ({ }: saveGameInfo) => void;
  handleOpen: () => void;
  game: saveGameInfo | null;
  gameId: string | null;
  acquiredPermissions: boolean;
}


const ListOfPublicGames = (props: props): ReactElement => {
  const { publicGames, acquiredPermissions } = props;

  // const {requestAccessAsync } = Gyroscope();
  const [currentCoords, setCurrentCoords] = useState<number[] | null>(null);
  const { haversineDistance } = Haversine();
  // const [acquiredPermissions, setAcquiredPermissions] =
  // useState<boolean>(false);
  const coords = useRef<number[] | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if(!isMounted.current){
      if (acquiredPermissions) {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            setCurrentCoords([
              position.coords.latitude,
              position.coords.longitude,
            ]);
            coords.current = [
              position.coords.latitude,
              position.coords.longitude,
            ];
            isMounted.current = false;
          });
        }
      }
    }
 
  }, [acquiredPermissions]);


  // function getPosition(
  //   options?: PositionOptions
  // ): Promise<GeolocationPosition> {
  //   return new Promise((resolve, reject) =>
  //     navigator.geolocation.getCurrentPosition(resolve, reject, options)
  //   );
  // }
  // const handlePermissions = useCallback(async () => {
  //   await requestAccessAsync();
  //   const position = await getPosition();
  //   console.log(position);
  //   setAcquiredPermissions(true);
  // }, [requestAccessAsync]);

  // useEffect(() => {
  //   if (!acquiredPermissions) {
  //     handlePermissions();
  //   }
  // }, [acquiredPermissions, handlePermissions]);

  // console.log(currentCoords);

  const publicGamesListing = publicGames.map((publicGame, index) => {
    return <tbody key={index} id={publicGame._id}>
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-2 font-heading whitespace-nowrap"
        >
          {publicGame.titleOfGame}
        </th>
        <td className="px-6 py-4 font-heading">{Math.round(haversineDistance(currentCoords!, publicGame.startingLocationCoordinates!)!)/1000} km</td>
        
      </tr>
    </tbody>
  })

  return (
    <div className="w-screen h-screen mt-20">
      <h1 className="mb-5 text-center text-m font-heading">
        &quot;Or, do you want to choose an open case?&quot;
      </h1>
      <div className="flex items-center m-1">
        <select
          id="visibility"
          className="p-2 text-black bg-white rounded-sm h-14 font-heading"
        >
          <option value="">Filter</option>
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
              Distance From You
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