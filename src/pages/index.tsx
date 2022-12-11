import { useState, useEffect } from "react";
import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import GameIdForm from "../Components/GameIdForm";
import StartModule from "../Components/StartModule";
import Hero from "./../Components/Hero";
import FadeDiv from "../Components/Helpers/FadeDiv";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Dialog } from "@mui/material";
import TokyoNoireName from "../../public/Title_DarkTheme.svg";

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
  const [show] = useState<boolean>(true);

  // Checks whether the type of device.
  useEffect(() => {

    const maxScreenSize = window.screen.height >= window.screen.width ? window.screen.height : window.screen.width;
    // if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    if (maxScreenSize < 1000) {
      setDeviceType("Mobile")
    } else {
      setDeviceType("Desktop")
    }
  }, [])

  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<startModuleInfo | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  //gets public game that are isPublished:true and isPrivate:false
  const getPublicGame = async () => {
    await axios.get("/").then((response) => console.log(response.data));
  };

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
  }, []);

  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>

      <FadeDiv show={show}>

        {deviceType === "Mobile" &&
          <FadeDiv show={show}>
            <div className="relative h-screen flexCenterDiv place-items-center mx-5 ">
              <TokyoNoireName alt="Tokyo Noire Name" style={{ maxWidth: "80vw" }} />
              <div className="absolute bottom-8">
                <KeyboardArrowDownIcon
                  style={{ animation: `hover-up-down ease-in-out 3s infinite` }}
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
            {game &&
              <Dialog className="object-fit flexCenterDiv" open={open} onClose={handleClose} fullScreen>
                <StartModule game={game} handleClose={handleClose} gameId={gameId} />
              </Dialog>
            }
          </FadeDiv>
        }

        {deviceType === "Desktop" &&
          <main className="relative w-screen h-screen flexCenterDiv place-items-center">
            <TokyoNoireName
              alt="Tokyo Noire Name"
              style={{ maxWidth: "80vw", filter: "drop-shadow(0 0 0.5rem grey)", animation: "pulsate 1s ease-in-out infinite alternate" }} />

            <section className="absolute bottom-1/4">
              <Link href="/editor">
                <button
                  id="themeButton"
                  style={{ transform: "scale(1.2)" }}
                >Go To Editor</button>
              </Link>
            </section>

          </main>
        }
      </FadeDiv>

    </>
  );
};

export default Home;
