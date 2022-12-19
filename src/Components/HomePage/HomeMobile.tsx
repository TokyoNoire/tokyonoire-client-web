import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import FadeDiv from "../Helpers/FadeDiv";
import GameSearchByID from "./GameSearchByID";
import GamePreview from "./GamePreview";
import Hero from "./Hero";
import ListOfPublicGames from "./ListOfPublicGames";
import axios from "axios";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Dialog } from "@mui/material";
import TokyoNoireName from "../../../public/Title_DarkTheme.svg";
import { type saveGameInfo } from "../../types/global";
import Gyroscope from "../GameModules/Helpers/Gyroscope";
import AuthorizationPopup from "./AuthorizationPopup"
import AppContext from "../../AppContext";


interface props {
  show: boolean;
}

const HomeMobile = (props: props): ReactElement => {
  const value = useContext(AppContext)
  const { acquiredPermissions, setAcquiredPermissions } = value;

  const { show } = props;
  const value = useContext(AppContext);
  const { gyroscopeAccess, geolocationAccess } = value;

  const gameId = useRef<string>("");
  const [game, setGame] = useState<saveGameInfo | null>(null);
  const [open, setOpen] = useState<boolean>(true);
  const [publicGames, setPublicGames] = useState<saveGameInfo[] | null>(null);
  const hasMounted = useRef<boolean>(false);
  // const [acquiredPermissions, setAcquiredPermissions] = useState<boolean>(false);
  const { requestAccessAsync } = Gyroscope();
  const [devicePermission, setDevicePermission] = useState<boolean>(false);

  const handlePermissions = useCallback(async () => {
    if (devicePermission) {
      await requestAccessAsync();
      setAcquiredPermissions(true);
    }
  }, [requestAccessAsync]);

  useEffect(() => {
    if (devicePermission) {
      handlePermissions();
    }
  }, [devicePermission, handlePermissions]);

  // function getPosition(
  //   options?: PositionOptions
  // ): Promise<GeolocationPosition> {
  //   return new Promise((resolve, reject) =>
  //     navigator.geolocation.getCurrentPosition(resolve, reject, options)
  //   );
  // }

  const getPublicGame = async () => {
    await axios
      .get("https://tokyo-noire-server-development.herokuapp.com/")
      .then((response) => {
        setPublicGames(response.data);
      });
  };

  useEffect(() => {
    if (!hasMounted.current && !publicGames) {
      getPublicGame();
      hasMounted.current = true;
    }
  }, [hasMounted]);

  useEffect(() => {
    if (game !== null) {
      handleOpen();
    }
  }, [game]);

  const handleClose = () => {
    setGame(null);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  // console.log("📍", acquiredPermissions);
  return (
    <>
      {!geolocationAccess && !gyroscopeAccess ? <AuthorizationPopup
        setDevicePermission={setDevicePermission} /> : <></>}

      <div className="relative h-screen mx-5 flexCenterDiv place-items-center ">
        <TokyoNoireName alt="Tokyo Noire Name" style={{ maxWidth: "80vw" }} />
        <div className="absolute bottom-8">
          <KeyboardArrowDownIcon
            style={{ animation: `hover-up-down ease-in-out 3s infinite` }}
            sx={{
              width: "1.5em",
              height: "1.5em",
            }}
          />
        </div>
      </div>

      {publicGames && (
        <ListOfPublicGames
          publicGames={publicGames!}
          gameId={gameId}
          setGame={setGame}
          game={game}
          handleOpen={handleOpen}
          acquiredPermissions={acquiredPermissions}
        />
      )}

      <GameSearchByID
        gameId={gameId}
        setGame={setGame}
        game={game}
        handleOpen={handleOpen}
      />

      {game && (
        <Dialog
          className="object-fit flexCenterDiv"
          open={open}
          onClose={handleClose}
          fullScreen
        >
          <GamePreview
            game={game!}
            handleClose={handleClose}
            gameId={gameId!}
          />
        </Dialog>
      )}
    </>
  );
};

export default HomeMobile;
