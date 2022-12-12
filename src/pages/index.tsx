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