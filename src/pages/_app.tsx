import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
import "../styles/loadingSpinner.css";
import "../styles/fade.css"
import "../styles/animations.css"
import { useState, useEffect } from "react";
import LoadingScreen from "../Components/LoadingScreen";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {

  const [loadScreenMounted, setLoadScreenMounted] = useState<boolean>(true);
  const [durationLoadingScreen] = useState<number>(2000)

  return (

    (Component && !loadScreenMounted)
      ?
      <>
        <ThemeProvider theme={darkTheme}>
          {/* {!deviceType ? <NavBar /> : <></>} */}
          <Component {...pageProps} />
        </ThemeProvider>
      </>
      :
      <LoadingScreen
        setLoadScreenMounted={setLoadScreenMounted}
        duration={durationLoadingScreen}
      />
  );
};

export default MyApp;
