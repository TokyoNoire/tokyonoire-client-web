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
import axios from "axios";
import { LineAxisOutlined } from "@mui/icons-material";

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

// let testObject = {
//   _id: "1239123",
//   titleOfGame: "de Finibus Bonorum et Malorum",
//   description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
//   rating: "G",
//   author: "Aristotle",
//   image: "https://images.unsplash.com/photo-1605153322277-dd0d7f608b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
//   estimatedTimeMinutes: "20",
//   startLocationCoordinates: [10,10]
// };

const Home: NextPage = () => {
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

  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>
      <div className="h-screen mx-5 flexCenterDiv place-items-center">
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

      {game ? (
        <Dialog
          className="object-fit flexCenterDiv"
          open={open}
          onClose={handleClose}
          fullScreen
        >
          <StartModule game={game!} handleClose={handleClose} gameId={gameId} />
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
