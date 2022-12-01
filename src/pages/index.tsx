// import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Tokyo Noire</title>
      <meta name='keywords' content='interactive, story, game'/>
      {/* <link rel="icon" type="image/png" href="public/favicon.ico"/>
      <link rel="icon" type="image/png" href="public/favicon.ico"/> */}
    </Head>
    <h1 className="flex flex-col items-center justify-center text-5xl font-heading">HELLO FRIENDS</h1>
    </>
  );
};

export default Home;
