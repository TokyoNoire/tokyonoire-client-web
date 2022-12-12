import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "../Components/Navigation/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
import "../styles/loadingSpinner.css";
import "../styles/animations.css";
import { useState, useEffect, useRef, createContext } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import Head from "next/head";
import AppContext from "../AppContext";
import { GameModules } from "../Components/Editor/ModuleForms";
import MockGameModules from "../Components/Editor/Helpers/MockGameModules";

export type saveGameInfo = {
  titleOfGame: string;
  isPublished: string | boolean;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image?: string;
  estimatedTimeMinutes?: number | string | null;
  gameModules?: GameModules;
  startLocationCoordinates?: Array<number>;
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loadScreenMounted, setLoadScreenMounted] = useState<boolean>(true);
  const [durationLoadingScreen] = useState<number>(2000);
  const [deviceType, setDeviceType] = useState<string | null>(null);
  const [gameData, setGameData] = useState<any[]>(MockGameModules);
  const compCheck = useRef<boolean>(false);

  useEffect(() => {
    if (!compCheck.current) {
      compCheck.current = true;
    } else {
      compCheck.current = false;
    }
  }, [Component]);

  useEffect(() => {
    const maxScreenSize =
      window.screen.height >= window.screen.width
        ? window.screen.height
        : window.screen.width;
    if (maxScreenSize < 1000) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        state: {
          gameData: gameData,
        },
        setGameData: setGameData,
      }}
    >
      <Head>
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        />
      </Head>

      {Component && !loadScreenMounted ? (
        <ThemeProvider theme={darkTheme}>
          {deviceType && <NavBar deviceType={deviceType} />}
          <Component {...pageProps} deviceType={deviceType} />
        </ThemeProvider>
      ) : (
        <LoadingScreen
          setLoadScreenMounted={setLoadScreenMounted}
          duration={durationLoadingScreen}
        />
      )}
    </AppContext.Provider>
  );
};

export default MyApp;
