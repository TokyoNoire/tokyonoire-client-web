import { useState, useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import tokyoNoireName from "../../public/Title_DarkTheme.svg";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Hero from "./../Components/Hero";
import GameIdForm from "../Components/GameIdForm";
import StartModule from "../Components/StartModule";
import { Dialog } from "@mui/material";
import FadeDiv from "../Components/Helpers/FadeDiv";


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

    if (maxScreenSize) setShow(false)
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
      <div className="h-screen mx-5 place-items-center">
        <Image src={tokyoNoireName} alt="Tokyo Noire Hero" priority={true} />
        <div className=" pt-96">
          <KeyboardArrowDownIcon />
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
        <Dialog className="object-fit" open={open} onClose={handleClose} fullScreen>
          <StartModule game={game!} handleClose={handleClose} gameId={gameId} />
        </Dialog>
        :
        <></>
      }
    </>
  );
};

export default Home;
