// import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import tokyoNoireName from "../../public/Title_DarkTheme.svg";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Hero from "./../Components/Hero";
import GameIdForm from "../Components/GameIdForm";
import Compass from "../Components/Compass";
// import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tokyo Noire</title>
        <meta name="keywords" content="interactive, story, game" />
      </Head>
      <Compass />
      <div className="items-center h-screen mx-10 pt-80">
        <Image src={tokyoNoireName} alt="Tokyo Noire Hero" priority={true} />
        <div className=" pt-96">
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <Hero />
      <GameIdForm />
    </>
  );
};

export default Home;
