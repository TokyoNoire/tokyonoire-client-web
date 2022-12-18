import { useState } from "react";
import Head from "next/head";
import FadeDiv from "../Components/Helpers/FadeDiv";
import HomeDesktop from "../Components/HomePage/HomeDesktop";
import HomeMobile from "../Components/HomePage/HomeMobile";
import { Dialog, List } from "@mui/material";

interface props {
  deviceType: string;
}


const Home = (props: props) => {
  // We want to use NextPage type... right now it is no longer a static Next.js page.
  const { deviceType } = props;
  const [show] = useState<boolean>(true);


  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>

      <FadeDiv show={show}>
        {deviceType === "Mobile" && <HomeMobile show={show} />}

        {deviceType === "Desktop" && <HomeDesktop show={show} />}
      </FadeDiv>
    </>
  );
};

export default Home;