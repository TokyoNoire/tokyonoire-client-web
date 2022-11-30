import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../components/NavBar";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
