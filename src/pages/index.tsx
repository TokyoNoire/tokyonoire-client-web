import { useState, useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import TokyoNoireName from "../../public/Title_DarkTheme.svg";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Hero from "./../Components/Hero";
import GameIdForm from "../Components/GameIdForm";
import StartModule from "../Components/StartModule";
import { Dialog } from "@mui/material";
import FadeDiv from "../Components/Helpers/FadeDiv";
import NavBar from "../Components/NavBar";


export type startModuleInfo = {
  _id: string;
  titleOfGame: string;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image?: string;
  estimatedTimeMinutes?: number | null;
  startLocationCoordinates?: Array<number>;
};

const Home: NextPage = () => {

  const [deviceType, setDeviceType] = useState<string | null>(null)
  const [show, setShow] = useState<boolean>(true);

  // Checks whether the type of device.
  useEffect(() => {

    const maxScreenSize = window.screen.height >= window.screen.width ? window.screen.height : window.screen.width;

    // if (maxScreenSize) setShow(false)
    // if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    if (maxScreenSize < 1000) {
      console.log("mobile device");
      setDeviceType("Mobile")
    } else {
      console.log("not mobile device");
      setDeviceType("Desktop")
    }
  }, [])

  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<startModuleInfo | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (game !== null) {
      handleOpen();
    }
  }, [game]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 10000)
  }, [])


  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>

      <FadeDiv show={show}>
        <NavBar />
        <div className="relative h-screen flexCenterDiv place-items-center mx-5 ">
          <TokyoNoireName alt="Tokyo Noire Name" style={{ maxWidth: "80vw" }} />
          <div className="absolute bottom-8">
            <KeyboardArrowDownIcon
              style={{ animation: `hover-up-down ease-in-out 3s infinite`}}
              sx={{
                width: "1.5em",
                height: "1.5em",
              }} />
          </div>
        </div>
        <Hero />
        <GameIdForm
          setGameId={setGameId}
          gameId={gameId}
          setGame={setGame}
          game={game}
          handleOpen={handleOpen}
        />
        {game
          ?
          <Dialog className="object-fit flexCenterDiv" open={open} onClose={handleClose} fullScreen>
            <StartModule game={game!} handleClose={handleClose} gameId={gameId} />
          </Dialog>
          :
          <></>
        }
      </FadeDiv>

    </>
  );
};

export default Home;
