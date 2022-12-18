import React, {
  type ReactElement,
  useState,
  useEffect,
  useCallback,
  useRef,
  MouseEventHandler,
  type MutableRefObject
} from "react";
import TextField from "@mui/material/TextField";
import { type saveGameInfo } from "../../types/global";
import SearchIcon from "@mui/icons-material/Search";
// import Gyroscope from "../GameModules/Helpers/Gyroscope";
import Haversine from "../GameModules/Helpers/Haversine";
import axios from "axios";

interface props {
  publicGames: saveGameInfo[];
  setGame: ({ }: saveGameInfo) => void;
  handleOpen: () => void;
  game: saveGameInfo | null;
  gameId: MutableRefObject<string | null>;
  acquiredPermissions: boolean;
}

const ListOfPublicGames = (props: props): ReactElement => {
  const {
    publicGames,
    acquiredPermissions,
    handleOpen,
    gameId,
    setGame,
  } = props;
  const [currentCoords, setCurrentCoords] = useState<number[] | null>(null);
  const { haversineDistance } = Haversine();
  const coords = useRef<number[] | null>(null);
  const isMounted = useRef(false);

  const getGameById = async () => {
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/${gameId.current}`
      )
      .then((response) => {
        setGame(response.data[0])
      });
  };


  useEffect(() => {
    if (!isMounted.current) {
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

  const handleClick = (event: React.MouseEvent<HTMLSelectElement>) => {
    // @ts-expect-error
    gameId.current = event.target!.id!;
    getGameById();
    setTimeout(handleOpen, 2000);
  };

  const publicGamesListing = publicGames.map((publicGame, index) => {
    return (
      <tbody key={index} id={publicGame._id}>
        <tr
          className="border-y border-dotted"
          id={publicGame._id}
          // @ts-expect-error
          onClick={handleClick}
        >
          <th
            scope="row"
            className="px-6 py-4 font-body2 whitespace-nowrap text-left"
            id={publicGame._id}
          >
            {publicGame.titleOfGame}
          </th>
          <td className="px-6 py-4 font-body2 text-right" id={publicGame._id}>
            {(Math.round(
              haversineDistance(
                currentCoords!,
                publicGame.startingLocationCoordinates!
              )!
            ) / 1000).toFixed(2)}{" "}
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <section className="w-screen h-screen">
      <h1 className="my-12 text-center text-xl font-body2">
        {`Detective, ready to close a new case?`}
      </h1>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm  ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-body2 text-left">
                case title
              </th>
              <th scope="col" className="px-6 py-3 font-body2 text-right">
                Distance From You (KM)
              </th>
            </tr>
          </thead>
          {publicGamesListing}
        </table>
      </div>
    </section>
  );
};

export default ListOfPublicGames;
