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
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-title" content="Tokyo Noire"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png"></link>

        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>

      <FadeDiv show={show}>
        {deviceType === "Mobile" && <HomeMobile show={show} />}

        {deviceType === "Desktop" && <HomeDesktop show={show} />}
      </FadeDiv>
    </>
  );
};

export default Home;