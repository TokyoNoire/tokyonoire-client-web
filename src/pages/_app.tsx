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
import MockGameModules from "../Components/Editor/Helpers/MockGameModules";

export type saveGameInfo = {
  titleOfGame: string;
  isPublished: string | boolean;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image?: string;
  estimatedTimeMinutes?: number | string | null;
  gameModules?: GameModules[];
  startLocationCoordinates?: Array<number>;
};

export type GameModules = {
  typeOfModule: string;
  _id?: string;
  title: string;
  description: string;
  question?: string;
  answer?: string;
  image?: string;
  locationCoordinates?: number[];
  hint?: string;
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
  const gameData = useRef<saveGameInfo>();
  const gameModule = useRef<GameModules[]>(MockGameModules);
  const gameModuleObject = useRef<GameModules>();
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
          gameModuleObject: gameModuleObject,
          gameData: gameData,
          gameModule: gameModule,
        },
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
