import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import FadeDiv from "../Components/Helpers/FadeDiv";
import HomeDesktop from "../Components/HomePage/HomeDesktop";
import HomeMobile from "../Components/HomePage/HomeMobile";
import { Dialog, List } from "@mui/material";
import ListOfPublicGames from "../Components/HomePage/ListOfPublicGames";

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

interface props {
  deviceType: string
}

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

const Home = (props: props) => { // We want to use NextPage type... right now it is no longer a static Next.js page.
  const { deviceType } = props;
  const [show] = useState<boolean>(true);

  //gets public game that are isPublished:true and isPrivate:false
  const getPublicGame = async () => {
    await axios.get("/").then((response) => console.log(response.data));
  };

  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>

      <FadeDiv show={show}>

        {deviceType === "Mobile" &&
          <HomeMobile show={show} />
        }

        {deviceType === "Desktop" &&
          <HomeDesktop show={show} />
        }
      </FadeDiv>

    </>
  );
};

export default Home;
