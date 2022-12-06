// import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import tokyoNoireName from "../../public/Title_DarkTheme.svg";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Hero from "./../Components/Hero";
import GameIdForm from "../Components/GameIdForm";
import StartModule from "../Components/StartModule";
import { Dialog, DialogActions } from "@mui/material";
// import Link from "next/link";

export type startModuleInfo = {
  _id: string;
  title: string;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image: string;
  estimatedTimeMinutes?: number | null;
  startLocationCoordinates?: Array<number>;
};

const testObject = {
  _id: "21312",
  title: "testtestmysteries",
  description:
    "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
  author: "Hello",
  rating: "G",
  image:
    "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  estimatedTimeMinutes: 100,
  startLocationCoordinate: [1, 2],
};

const Home: NextPage = () => {
  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<startModuleInfo>(testObject);
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setGame(testObject);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>
      <div className="items-center h-screen mx-10 pt-80">
        <Image src={tokyoNoireName} alt="Tokyo Noire Hero" priority={true} />
        <div className=" pt-96">
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <Hero />
      <GameIdForm setGameId={setGameId} gameId={gameId} />

      <Dialog className="object-fit" open={open} onClose={handleClose}>
        <StartModule game={game} handleClose={handleClose} />
      </Dialog>
    </>
  );
};

export default Home;
