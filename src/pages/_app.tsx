import { useState, useEffect, useRef } from "react";
import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mapLocationPicker.css";
import "../styles/compass.css";
import "../styles/loadingSpinner.css";
import "../styles/animations.css";
import AppContext from "../AppContext";
import LoadingScreen from "../Components/LoadingScreen";
import NavBar from "../Components/Navigation/NavBar";
import MockGame from "../Components/Editor/Helpers/MockGame";
import { saveGameInfo, GameModule } from "../types/global";

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
  const [gameData, setGameData] = useState<saveGameInfo>(MockGame);
  const [gameModules, setGameModules] = useState<GameModule[]>(
    MockGame.gameModules
  );
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    const newGameData = gameData;
    newGameData.gameModules = gameModules;
    setGameData(newGameData);
    console.log("gameData has been updated");
  }, [gameModules]);

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
        deviceType: deviceType,
        gameData: gameData,
        setGameData: setGameData,
        gameModules: gameModules,
        setGameModules: setGameModules,
        activeModule: activeModule,
        setActiveModule: setActiveModule,
      }}
    >
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      />

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
