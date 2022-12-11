import { useState, useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import TokyoNoireName from "../../public/Title_DarkTheme.svg";
// import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Hero from "./../Components/Hero";
import GameIdForm from "../Components/GameIdForm";
import StartModule from "../Components/StartModule";
import { Dialog, List } from "@mui/material";
import axios from "axios";
// import { LineAxisOutlined } from "@mui/icons-material";
import FadeDiv from "../Components/Helpers/FadeDiv";
import NavBar from "../Components/NavBar";
import Link from "next/link";
import ListOfPublicGames from "../Components/ListOfPublicGames";

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

const testArray = [
  {
    _id: "638d8a2f61306a3dc4e94430",
    titleOfGame: "The disappearance of Akika Mori",
    description:
      "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
    author: "Cole Phelps",
    rating: "G",
    isPrivate: false,
  },
  {
    _id: "638d8a2f61306a3dc4e94430",
    titleOfGame: "The disappearance of Akika Mori",
    description:
      "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
    author: "Cole Phelps",
    rating: "G",
    isPrivate: false,
  },
];

const Home: NextPage = () => {
  const [deviceType, setDeviceType] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(true);

  // Checks whether the type of device.
  useEffect(() => {
    const maxScreenSize =
      window.screen.height >= window.screen.width
        ? window.screen.height
        : window.screen.width;
    // if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    if (maxScreenSize < 1000) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  }, []);

  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<startModuleInfo | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [publicGames, setPublicGames] = useState<startModuleInfo[] | null>(
    testArray
  );

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
    setTimeout(() => setMounted(true), 10000);
  }, []);

  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>

      <FadeDiv show={show}>
        {/* {deviceType && <NavBar deviceType={deviceType} />} */}

        {deviceType === "Mobile" && (
          <FadeDiv show={show}>
            <div className="relative h-screen mx-5 flexCenterDiv place-items-center ">
              <TokyoNoireName
                alt="Tokyo Noire Name"
                style={{ maxWidth: "80vw" }}
              />
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
            <Hero />
            <GameIdForm
              setGameId={setGameId}
              gameId={gameId}
              setGame={setGame}
              game={game}
              handleOpen={handleOpen}
            />
            <div className="w-screen flexCenterDiv">
              <KeyboardArrowDownIcon
                style={{ animation: `hover-up-down ease-in-out 3s infinite` }}
                sx={{
                  width: "1.5em",
                  height: "1.5em",
                  alignSelf: "center",
                }}
              />
            </div>
            <ListOfPublicGames publicGames={publicGames!} />
            {game ? (
              <Dialog
                className="object-fit flexCenterDiv"
                open={open}
                onClose={handleClose}
                fullScreen
              >
                <StartModule
                  game={game!}
                  handleClose={handleClose}
                  gameId={gameId}
                />
              </Dialog>
            ) : (
              <></>
            )}
          </FadeDiv>
        )}

        {deviceType === "Desktop" && (
          <main className="relative w-screen h-screen flexCenterDiv place-items-center">
            <TokyoNoireName
              alt="Tokyo Noire Name"
              style={{
                maxWidth: "80vw",
                filter: "drop-shadow(0 0 0.5rem grey)",
                animation: "pulsate 1s ease-in-out infinite alternate",
              }}
            />

            <section className="absolute bottom-48">
              <Link href="/editor">
                <button id="themeButton" style={{ transform: "scale(1.2)" }}>
                  Go To Editor
                </button>
              </Link>
            </section>
          </main>
        )}
      </FadeDiv>
    </>
  );
};

export default Home;
