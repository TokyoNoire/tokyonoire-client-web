import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/NavBar";

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
